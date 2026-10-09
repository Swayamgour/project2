import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../lib/site";
import { endpoints } from "../lib/endpoints";

const baseQuery = fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: (headers) => {
        // Only runs in the browser when a request is made
        if (typeof window !== "undefined") {
            const token =
                window.localStorage.getItem("token") ||
                window.sessionStorage.getItem("token");

            if (token) {
                headers.set("authorization", `Bearer ${token}`);
            }
        }

        headers.set("Content-Type", "application/json");
        return headers;
    },
});

export const api = createApi({
    reducerPath: "api",
    baseQuery,
    tagTypes: ["Auth", "Users", "HomeHero", "HomeSection", "BlogCategories", "Blogs", "Contact"],

    endpoints: (builder) => ({
        getCategory: builder.query({ query: endpoints.getCategory, providesTags: ["Auth"] }),
        getTestimonials: builder.query({ query: endpoints.getTestimonials, providesTags: ["Auth"] }),
        getCaseStudyCategory: builder.query({ query: endpoints.getCaseStudyCategory, providesTags: ["Auth"] }),

        getHomeHero: builder.query({ query: endpoints.getHomeHero, providesTags: ["HomeHero"] }),
        getTeam: builder.query({ query: endpoints.getTeam, providesTags: ["HomeHero"] }),

        // Generic: any home-content card section by its sectionKey, e.g. useGetHomeSectionQuery("clientLogos")
        getHomeSection: builder.query({
            query: endpoints.getHomeSection,
            providesTags: (result, error, key) => [{ type: "HomeSection", id: key }],
        }),

        getPlatformBySlug: builder.query({ query: endpoints.getPlatformBySlug, providesTags: ["Users"] }),
        getServiceBySlug: builder.query({ query: endpoints.getServiceBySlug, providesTags: ["Users"] }),
        getIndustryBySlug: builder.query({ query: endpoints.getIndustryBySlug, providesTags: ["Users"] }),

        getBlogCategories: builder.query({ query: endpoints.getBlogCategories, providesTags: ["BlogCategories"] }),
        getPublishedBlogs: builder.query({ query: endpoints.getPublishedBlogs, providesTags: ["Blogs"] }),
        getBlogBySlug: builder.query({ query: endpoints.getBlogBySlug, providesTags: ["Blogs"] }),

        createContact: builder.mutation({
            query: (data) => ({
                url: "/contact",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["Contact"],
        }),

        getCategoriesBySlug: builder.query({ query: endpoints.getCategoriesBySlug, providesTags: ["Users"] }),
        getCaseStudyBySlug: builder.query({ query: endpoints.getCaseStudyBySlug, providesTags: ["Users"] }),
        getCaseStudyStoryBySlug: builder.query({ query: endpoints.getCaseStudyStoryBySlug, providesTags: ["Users"] }),
        getRelatedStoryById: builder.query({ query: endpoints.getRelatedStoryById, providesTags: ["Users"] }),

        getGuides: builder.query({ query: endpoints.getGuides, providesTags: ["Blogs"] }),
        getGuideBySlug: builder.query({ query: endpoints.getGuideBySlug, providesTags: ["Users"] }),

        // NOTE: the page/limit args are accepted by the hook but not sent (same as the original app)
        getChecklists: builder.query({ query: () => endpoints.getChecklists(), providesTags: ["Blogs"] }),
        getChecklistsBySlug: builder.query({ query: endpoints.getChecklistsBySlug, providesTags: ["Users"] }),

        getWhitepapers: builder.query({ query: endpoints.getWhitepapers, providesTags: ["Blogs"] }),
        getWhitepapersBySlug: builder.query({ query: endpoints.getWhitepapersBySlug, providesTags: ["Users"] }),
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
    useGetRelatedStoryByIdQuery,

    useGetGuidesQuery,
    useGetGuideBySlugQuery,

    useGetChecklistsQuery,
    useGetChecklistsBySlugQuery,

    useGetWhitepapersQuery,
    useGetWhitepapersBySlugQuery,

    useGetTeamQuery,
} = api;
