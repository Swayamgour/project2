// Single source of truth for API paths.
// Used by BOTH the RTK Query slice (browser) and the server-side fetchApi() helper.
// Keep this file free of React / react-redux imports so Server Components can import it.
export const endpoints = {
  getCategory: () => "/categories",
  getTestimonials: () => "/home-content/sections/testimonials",
  getCaseStudyCategory: () => "/case-study-categories",
  getHomeHero: () => "/home-content/hero",
  getTeam: () => "/home-content/sections/leadershipTeam",
  getHomeSection: (key) => `/home-content/sections/${key}`,

  getPlatformBySlug: (slug) => `/pages/platform/${slug}`,
  getServiceBySlug: (slug) => `/pages/service/${slug}`,
  getIndustryBySlug: (slug) => `/pages/industry/${slug}`,

  getBlogCategories: () => "/blog-categories",
  getPublishedBlogs: () => "/blog",
  getBlogBySlug: (slug) => `/blog/slug/${slug}`,

  getCategoriesBySlug: (slug) => `/categories/${slug}/items`,
  getCaseStudyBySlug: (slug) => `/case-studies/slug/${slug}`,
  getCaseStudyStoryBySlug: (slug) => `/case-study-stories/slug/${slug}`,
  getRelatedStoryById: (id) => `/case-study-stories/${id}/related`,

  getGuides: () => "/guides",
  getGuideBySlug: (slug) => `/guides/${slug}`,
  getChecklists: () => "/checklists",
  getChecklistsBySlug: (slug) => `/checklists/${slug}`,
  getWhitepapers: () => "/whitepapers",
  getWhitepapersBySlug: (slug) => `/whitepapers/${slug}`,
};
