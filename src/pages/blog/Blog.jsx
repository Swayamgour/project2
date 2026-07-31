import { useMemo, useState, useRef } from "react";
import { Link } from "react-router-dom";
import usePageEffects from "../../hooks/usePageEffects.js";
import useDocumentMeta from "../../hooks/useDocumentMeta.js";
import HeroSection from "../../components/HeroSection.jsx";
import {
  useGetPublishedBlogsQuery,
  useGetBlogCategoriesQuery,
} from "../../redux/api.jsx";

export default function Blog() {
  const mainRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState(null);

  const { data: blogsRes, isLoading, error } = useGetPublishedBlogsQuery();
  const { data: categoriesRes } = useGetBlogCategoriesQuery();

  // Extract data from API responses
  const posts = blogsRes?.data || [];
  const categories = categoriesRes?.data || [];

  useDocumentMeta(
    "Blog | JJC Systems",
    "Practical guidance on Microsoft 365, Dynamics 365, cybersecurity, data and AI \u2014 written for people who have to make these decisions, not just read about them."
  );

  usePageEffects(mainRef);

  // Filter posts by active category
  const filteredPosts = useMemo(() => {
    if (!activeCategory) return posts;
    return posts.filter(
      (p) => p.category?.slug === activeCategory || p.category === activeCategory
    );
  }, [posts, activeCategory]);

  // Get featured post (first item) and rest
  const featured = filteredPosts.length > 0 ? filteredPosts[0] : null;
  const rest = activeCategory ? filteredPosts.slice(1) : filteredPosts.slice(1);

  // Format date helper
  const formatDate = (dateString) => {
    if (!dateString) return "";
    try {
      return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch {
      return dateString;
    }
  };

  // Strip HTML tags for excerpt
  const stripHtml = (html) => {
    if (!html) return "";
    const tmp = document.createElement("div");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  };

  // Get truncated excerpt
  const getExcerpt = (post, maxLength = 140) => {
    const text = post.excerpt || post.summary || stripHtml(post.description || "");
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  // Get category name from category object or string
  const getCategoryName = (post) => {
    if (post.category?.name) return post.category.name;
    if (typeof post.category === "string") {
      const cat = categories.find(c => c._id === post.category || c.slug === post.category);
      return cat?.name || post.category;
    }
    return null;
  };

  // Get category slug from category object or string
  const getCategorySlug = (post) => {
    if (post.category?.slug) return post.category.slug;
    if (typeof post.category === "string") {
      const cat = categories.find(c => c._id === post.category || c.slug === post.category);
      return cat?.slug || post.category;
    }
    return null;
  };

  // Count posts in category
  const countPostsInCategory = (categorySlug) => {
    return posts.filter(p => {
      const slug = getCategorySlug(p);
      return slug === categorySlug;
    }).length;
  };

  // Get category description or generate one
  const getCategoryDescription = (cat) => {
    if (cat.description) return cat.description;
    return `Articles about ${cat.name}.`;
  };

  return (
    <main id="main" ref={mainRef}>
      <HeroSection
        title="Blog"
        breadcrumbs={[{ label: "Home", link: "/" }, { label: "Blog" }]}
        hero={{
          eyebrow: "Insights",
          heading: "Ideas, guides and updates from JJC Systems",
          lede: "Practical thinking on Microsoft 365, Dynamics 365, cybersecurity, data and AI \u2014 written by the people who do the implementation work, not a marketing team.",
          primaryCtaText: "Talk to our team",
          primaryCtaLink: "/#contact",
          secondaryCtaText: "Browse all posts",
          secondaryCtaAnchor: "#posts",
          glance: {
            title: "What you'll find here",
            items: [
              "Guidance grounded in real client engagements",
              "No vendor fluff \u2014 tradeoffs are named honestly",
              "Organized by the topics you already care about",
              "New posts added as the work produces something worth sharing",
            ],
          },
          stats: [
            { value: posts.length || "—", label: "Articles published" },
            { value: categories.length || "—", label: "Topics covered" },
            { value: "1 day", label: "We reply to every enquiry" },
          ],
        }}
      />

      {/* Categories Section */}
      {categories.length > 0 && (
        <section className="section bg-paper" id="topics">
          <div className="wrap">
            <div className="sec-head reveal">
              <span className="eyebrow">Browse by topic</span>
              <h2 className="h-sec wide">Find what's relevant to you</h2>
              <p className="lede">
                Filter the list below by the area you're focused on right now.
              </p>
            </div>
            <div className="browse-grid">
              {/* All Posts Button */}
              <button
                type="button"
                className={`browse-card reveal${!activeCategory ? " active" : ""}`}
                onClick={() => setActiveCategory(null)}
                style={{ cursor: "pointer", textAlign: "left", border: "none", width: "100%" }}
              >
                <span className="ic">
                  <svg><use href="#i-grid" /></svg>
                </span>
                <b>All Posts</b>
                <p>See every article we've published, most recent first.</p>
                <span className="cnt">{posts.length} articles →</span>
              </button>

              {/* Category Buttons */}
              {categories.map((cat) => {
                const postCount = countPostsInCategory(cat.slug);
                return (
                  <button
                    key={cat._id || cat.slug}
                    type="button"
                    className={`browse-card reveal${activeCategory === cat.slug ? " active" : ""}`}
                    onClick={() => setActiveCategory(cat.slug)}
                    style={{ cursor: "pointer", textAlign: "left", border: "none", width: "100%" }}
                  >
                    <span className="ic">
                      <svg><use href="#i-docs" /></svg>
                    </span>
                    <b>{cat.name}</b>
                    <p>{getCategoryDescription(cat)}</p>
                    <span className="cnt">
                      {postCount} article{postCount !== 1 ? "s" : ""} →
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Section */}
      <section className="section bg-mist" id="posts">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">Latest articles</span>
            <h2 className="h-sec wide">
              {activeCategory
                ? categories.find(c => c.slug === activeCategory)?.name || "Filtered results"
                : "From the blog"}
            </h2>
            <p className="lede">
              Straightforward writing on the platforms and problems we work with every day.
            </p>
          </div>

          {/* Loading State */}
          {isLoading && (
            <div style={{ padding: "40px 0", textAlign: "center" }}>
              <p>Loading articles...</p>
            </div>
          )}

          {/* Error State */}
          {error && !isLoading && (
            <div style={{ padding: "40px 0", textAlign: "center" }}>
              <p>Unable to load articles right now. Please try again later.</p>
            </div>
          )}

          {/* Empty State */}
          {!isLoading && !error && filteredPosts.length === 0 && (
            <div style={{ padding: "40px 0", textAlign: "center" }}>
              <p>No articles in this topic yet — check back soon.</p>
            </div>
          )}

          {/* Blog Posts */}
          {!isLoading && !error && featured && (
            <>
              {/* Featured Post */}
              <article className="case reveal" style={{ marginBottom: "clamp(32px,4vw,48px)" }}>
                <div className="case-top">
                  <div className="case-kicker">
                    {getCategoryName(featured) && (
                      <span className="case-tag">{getCategoryName(featured)}</span>
                    )}
                    {featured.readTime && (
                      <span className="case-tag ref">{featured.readTime} min read</span>
                    )}
                  </div>
                  <h3>{featured.title}</h3>
                  {(featured.author || featured.blogDate || featured.createdAt) && (
                    <p className="case-org">
                      <b>{featured.author?.name || featured.author || "JJC Systems"}</b>
                      {featured.blogDate && ` — ${formatDate(featured.blogDate)}`}
                    </p>
                  )}
                </div>
                <div className="case-body">
                  <div className="case-main">
                    <p>{getExcerpt(featured)}</p>
                    <Link className="link-more" style={{ marginTop: "18px" }} to={`/blog/${featured.slug}`}>
                      Read the full article
                      <svg><use href="#i-arrow-r" /></svg>
                    </Link>
                  </div>
                </div>
              </article>

              {/* Rest of the Posts */}
              {rest.length > 0 && (
                <div className="browse-grid">
                  {rest.map((post) => (
                    <Link
                      className="browse-card reveal"
                      key={post._id || post.slug}
                      to={`/blog/${post.slug}`}
                    >
                      <span className="ic">
                        <svg><use href="#i-docs" /></svg>
                      </span>
                      <b>{post.title}</b>
                      <p>{getExcerpt(post)}</p>
                      <span className="cnt">
                        {post.readTime ? `${post.readTime} min read` : "Read the article"} →
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-paper">
        <div className="wrap">
          <div className="cta-band reveal">
            <div>
              <h2>Have a topic you'd like us to cover?</h2>
              <p>
                Tell us what you're trying to figure out and we'll point you to what we've
                already written — or write it if we haven't.
              </p>
            </div>
            <div className="cta-actions">
              <a className="btn btn-primary" href="/#contact">
                Talk to our team
                <svg><use href="#i-arrow-r" /></svg>
              </a>
              <a className="btn btn-ghost" href="/case-studies">
                See our client success stories
                <svg><use href="#i-arrow-r" /></svg>
              </a>
              <small>We reply to every message within one business day.</small>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}