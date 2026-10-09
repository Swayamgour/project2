import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";

// Per-request store factory (a module-level singleton would leak data between
// users on the server). Created once per browser tab / per SSR request in <Providers />.
export const makeStore = () =>
    configureStore({
        reducer: {
            [api.reducerPath]: api.reducer,
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({ serializableCheck: false }).concat(api.middleware),
        devTools: process.env.NODE_ENV !== "production",
    });
