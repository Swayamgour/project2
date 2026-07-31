import { useMemo, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import HeroSection from "../../components/HeroSection.jsx";
import usePageEffects from "../../hooks/usePageEffects.js";
import useDocumentMeta from "../../hooks/useDocumentMeta.js";
import { useGetPublishedBlogsQuery } from "../../redux/api.jsx";

const TOPICS = {
  ai: { label: "Artificial Intelligence", icon: "#i-ai" },
  cybersecurity: { label: "Cybersecurity", icon: "#i-shield" },
  "microsoft-365": { label: "Microsoft 365", icon: "#i-grid" },
  "dynamics-365": { label: "Dynamics 365", icon: "#i-erp" },
  "data-analytics": { label: "Data & Analytics", icon: "#i-chart" },
  "cloud-infrastructure": { label: "Cloud & Infrastructure", icon: "#i-cloud" },
};

export default function ResourceTopic() {
  const mainRef = useRef(null);
  const { topic } = useParams();
  const meta = TOPICS[topic] || { label: topic, icon: "#i-docs" };

  const { data: blogsRes, isLoading } = useGetPublishedBlogsQuery();
  const posts = blogsRes?.data || [];

  const topicPosts = useMemo(() => {
    const needle = meta.label.toLowerCase();
    return posts.filter((p) => {
      const catSlug = (p.category?.slug || p.category || "").toLowerCase();
      const catName = (p.category?.name || "").toLowerCase();
      return catSlug === topic || catName === needle || catName.includes(topic.replace(/-/g, " "));
    });
  }, [posts, topic, meta.label]);

  useDocumentMeta(
    `${meta.label} | Resources | JJC Systems`,
    `Articles and resources on ${meta.label} from JJC Systems.`
  );
  usePageEffects(mainRef);

  return (
    <main id="main" ref={mainRef}>
      <HeroSection
        title={meta.label}
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Why Us", link: "/About" },
          { label: meta.label },
        ]}
        hero={{
          eyebrow: "Explore by Topic",
          heading: meta.label,
          lede: `Everything we've published on ${meta.label.toLowerCase()} \u2014 articles, guides and updates in one place.`,
          primaryCtaText: "Talk to our team",
          primaryCtaLink: "/#contact",
          secondaryCtaText: "See all resources",
          secondaryCtaLink: "/resources",
        }}
      />

      <section className="section bg-paper" id="topic-posts">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">{meta.label}</span>
            <h2 className="h-sec wide">Articles on this topic</h2>
          </div>

          {isLoading && (
            <div style={{ padding: "40px 0", textAlign: "center" }}>
              <p>Loading articles...</p>
            </div>
          )}

          {!isLoading && topicPosts.length === 0 && (
            <div style={{ padding: "40px 0", textAlign: "center" }}>
              <p>No articles tagged {meta.label} yet &mdash; check back soon, or browse everything on the blog.</p>
            </div>
          )}

          {!isLoading && topicPosts.length > 0 && (
            <div className="browse-grid">
              {topicPosts.map((post) => (
                <Link className="browse-card reveal" key={post._id || post.slug} to={`/blog/${post.slug}`}>
                  <span className="ic">
                    <svg><use href={meta.icon} /></svg>
                  </span>
                  <b>{post.title}</b>
                  <p>{post.excerpt || post.summary}</p>
                  <span className="cnt">
                    {post.readTime ? `${post.readTime} min read` : "Read the article"} &rarr;
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="section bg-mist">
        <div className="wrap">
          <div className="cta-band reveal">
            <div>
              <h2>Working through a {meta.label.toLowerCase()} decision right now?</h2>
              <p>Tell us where things stand and we'll tell you honestly what we'd do next.</p>
            </div>
            <div className="cta-actions">
              <a className="btn btn-primary" href="/contact">
                Talk to our team
                <svg><use href="#i-arrow-r" /></svg>
              </a>
              <Link className="btn btn-ghost" to="/resources">
                Browse all resources
                <svg><use href="#i-arrow-r" /></svg>
              </Link>
              <small>We reply to every message within one business day.</small>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
