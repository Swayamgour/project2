"use client";

import { useEffect, useRef } from "react";
import { Provider } from "react-redux";
import { setupListeners } from "@reduxjs/toolkit/query";
import { makeStore } from "../redux/store";

export default function Providers({ children }) {
    const storeRef = useRef(null);
    if (!storeRef.current) {
        storeRef.current = makeStore();
    }

    // refetchOnFocus / refetchOnReconnect
    useEffect(() => setupListeners(storeRef.current.dispatch), []);

    return <Provider store={storeRef.current}>{children}</Provider>;
}
