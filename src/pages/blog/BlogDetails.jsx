import { useRef, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import usePageEffects from "../../hooks/usePageEffects.js";
import useDocumentMeta from "../../hooks/useDocumentMeta.js";
import HeroSection from "../../components/HeroSection.jsx";
import {
  useGetBlogBySlugQuery,
  useGetPublishedBlogsQuery,
} from "../../redux/api.jsx";
import Loader from "../../components/Loader.jsx";

export default function BlogDetails() {
  const mainRef = useRef(null);
  const { slug } = useParams();

  const { data: response, isLoading, error } = useGetBlogBySlugQuery(slug);
  const { data: allBlogsRes } = useGetPublishedBlogsQuery();

  const pageData = response?.blog || response?.data || null;
  const allBlogs = allBlogsRes?.data || [];

  const formatDate = (dateString) => {
    if (!dateString) return "";
    try {
      return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    } catch {
      return dateString;
    }
  };

  const stripHtml = (html) => {
    if (!html) return "";
    const tmp = document.createElement("div");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  };

  const getExcerpt = (data, maxLength = 160) => {
    const text = data?.excerpt || data?.metaDescription || stripHtml(data?.description || "");
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  useDocumentMeta(
    pageData?.metaTitle ||
    (pageData?.title ? `${pageData.title} | Blog | JJC Systems` : "Blog | JJC Systems"),
    pageData?.metaDescription ||
    pageData?.excerpt ||
    getExcerpt(pageData) ||
    "Practical guidance on Microsoft platforms, security, data and AI from JJC Systems."
  );

  usePageEffects(mainRef);

  // Get recent posts (excluding current post)
  const recentPosts = useMemo(() => {
    if (!allBlogs.length || !pageData) return [];

    return allBlogs
      .filter((p) => p.slug !== slug)
      .sort((a, b) => {
        const dateA = new Date(a.blogDate || a.createdAt);
        const dateB = new Date(b.blogDate || b.createdAt);
        return dateB - dateA;
      })
      .slice(0, 5);
  }, [allBlogs, slug, pageData]);

  if (isLoading) {
    return (
      <Loader />
    );
  }

  if (error || !pageData) {
    return (
      <main id="main" ref={mainRef}>
        <div className="wrap" style={{ padding: "60px 0", textAlign: "center" }}>
          <p>Unable to load this article. Please try again later.</p>
        </div>
      </main>
    );
  }

  const {
    title,
    category,
    description,
    image,
    imageAlt,
    blogDate,
    createdAt,
    metaDescription,
  } = pageData;

  const publishedDate = blogDate || createdAt;
  const categoryName = category?.name || (typeof category === "string" ? category : null);

  return (
    <main id="main" ref={mainRef}>
      {/* Hero Section */}
      <HeroSection
        title={title}
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Blog", link: "/blog" },
          { label: title },
        ]}
        hero={{
          eyebrow: categoryName || "Insights",
          heading: title,
          lede: metaDescription || getExcerpt(pageData),
          primaryCtaText: "Talk to our team",
          primaryCtaLink: "/#contact",
          secondaryCtaText: "Back to all articles",
          secondaryCtaAnchor: "#article",
          stats: [
            publishedDate && { value: formatDate(publishedDate), label: "Published" },
            { value: "JJC Systems", label: "Author" },
            categoryName && { value: categoryName, label: "Category" },
          ].filter(Boolean),
        }}
      />

      {/* Blog Content with Sidebar */}
      <section className="section bg-paper" id="article" style={{ paddingTop: image ? "40px" : "60px" }}>
        <div className="wrap" style={{ maxWidth: "1200px" }}>
          <div className="blog-details-layout">
            {/* Main Content */}
            <article className="blog-main-content">
              {/* Featured Image */}
              {image && (
                <div className="blog-featured-image">
                  <img
                    src={image}
                    alt={imageAlt || title}
                  />
                </div>
              )}

              {/* Content */}
              <div className="blog-content">
                {description && (
                  <div dangerouslySetInnerHTML={{ __html: description }} />
                )}
              </div>
            </article>

            {/* Sidebar */}
            <aside className="blog-sidebar">
              <div className="sidebar-widget">
                <h3 className="sidebar-widget-title">Recent Blogs</h3>
                <div className="recent-posts">
                  {recentPosts.length > 0 ? (
                    recentPosts.map((post) => (
                      <Link
                        key={post._id || post.slug}
                        to={`/blog/${post.slug}`}
                        className="recent-post"
                      >
                        <h4 className="recent-post-title">{post.title}</h4>
                        <span className="recent-post-date">{formatDate(post.blogDate || post.createdAt)}</span>
                      </Link>
                    ))
                  ) : (
                    <p className="no-recent-posts">No other posts available</p>
                  )}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}