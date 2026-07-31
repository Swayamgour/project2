import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const BASE_URL = "https://daryoo.lead.crm.amaxjobs.com/api";
const BASE_URL = "https://jjc-backend-2.onrender.com/api";
// const BASE_URL = "http://localhost:5008/api";
// const BASE_URL = "https://jjc.admin.amaxjobs.com/api";

const baseQuery = fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {

        const token =
            localStorage.getItem("token") ||
            sessionStorage.getItem("token");

        if (token) {
            headers.set("authorization", `Bearer ${token}`);
        }

        headers.set("Content-Type", "application/json");

        return headers;
    },
});

export const api = createApi({
    reducerPath: "api",
    baseQuery,
    tagTypes: [
        "Auth",
        "Users",
        "HomeHero",
        "HomeSection",
        "BlogCategories",
        "Blogs",
    ],

    endpoints: (builder) => ({



        getCategory: builder.query({
            query: () => "/categories",
            providesTags: ["Auth"],
        }),
        getTestimonials: builder.query({
            query: () => "/home-content/sections/testimonials",
            providesTags: ["Auth"],
        }),

        getCaseStudyCategory: builder.query({
            query: () => "/case-study-categories",
            providesTags: ["Auth"],
        }),

        // Home page hero (singleton)
        getHomeHero: builder.query({
            query: () => "/home-content/hero",
            providesTags: ["HomeHero"],
        }),

        // Generic: any home-content card section by its sectionKey
        // e.g. useGetHomeSectionQuery("whyChooseUs")
        getHomeSection: builder.query({
            query: (key) => `/home-content/sections/${key}`,
            providesTags: (result, error, key) => [{ type: "HomeSection", id: key }],
        }),




        getPlatformBySlug: builder.query({
            query: (slug) => `/pages/platform/${slug}`,
            providesTags: ["Users"],
        }),
        getServiceBySlug: builder.query({
            query: (slug) => `/pages/service/${slug}`,
            providesTags: ["Users"],
        }),
        getIndustryBySlug: builder.query({
            query: (slug) => `/pages/industry/${slug}`,
            providesTags: ["Users"],
        }),

        getBlogCategories: builder.query({
            query: () => "/blog-categories",
            providesTags: ["BlogCategories"],
        }),

        // Public Published Blogs
        getPublishedBlogs: builder.query({
            query: () => "/blog/published",
            providesTags: ["Blogs"],
        }),


        // Blog detail
        getBlogBySlug: builder.query({
            query: (slug) => `/blog/${slug}`,
            providesTags: ["Blogs"],
        }),

        createContact: builder.mutation({
            query: (data) => ({
                url: "/contact",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["Contact"],
        }),

        getCategoriesBySlug: builder.query({
            query: (slug) => `/categories/${slug}/items`,
            providesTags: ["Users"],
        }),
        getCaseStudyBySlug: builder.query({
            query: (slug) => `/case-studies/slug/${slug}`,
            providesTags: ["Users"],
        }),


        getCaseStudyStoryBySlug: builder.query({
            query: (slug) => `/case-study-stories/slug/${slug}`,
            providesTags: ["Users"],
        }),
        getRelatedStoryById: builder.query({
            query: (id) => `/case-study-stories/${id}/related`,
            providesTags: ["Users"],
        }),




    }),
});

export const {

    useGetCategoryQuery,
    useGetTestimonialsQuery,
    useGetCaseStudyCategoryQuery,
    useGetHomeHeroQuery,
    useGetHomeSectionQuery,
    useGetPlatformBySlugQuery,
    useGetServiceBySlugQuery,
    useGetIndustryBySlugQuery,

    useGetBlogCategoriesQuery,
    useGetPublishedBlogsQuery,
    useGetBlogBySlugQuery,

    useCreateContactMutation,
    useGetCategoriesBySlugQuery,
    useGetCaseStudyBySlugQuery,

    useGetCaseStudyStoryBySlugQuery,
    useGetRelatedStoryByIdQuery

} = api;