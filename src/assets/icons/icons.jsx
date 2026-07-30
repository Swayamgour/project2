// Individual SVG icon components - each exported as a React component
import React from 'react';

export const Icons = {
    strategy: (props) => (
        <svg viewBox="0 0 24 24" {...props}>
            <circle cx="12" cy="12" r="9" />
            <path d="m15.6 8.4-2.1 5.1-5.1 2.1 2.1-5.1z" />
        </svg>
    ),

    ai: (props) => (
        <svg viewBox="0 0 24 24" {...props}>
            <path d="M11 3.2 12.7 8l4.8 1.7-4.8 1.8L11 16.3 9.3 11.5 4.5 9.7 9.3 8z" />
            <path d="m18.2 14.6.8 2.1 2.1.8-2.1.8-.8 2.1-.8-2.1-2.1-.8 2.1-.8z" />
        </svg>
    ),

    license: (props) => (
        <svg viewBox="0 0 24 24" {...props}>
            <path d="M20.6 12.9 12.9 20.6a1.9 1.9 0 0 1-2.7 0l-7-7A1.9 1.9 0 0 1 2.6 12V4.5a1.9 1.9 0 0 1 1.9-1.9H12c.5 0 1 .2 1.4.6l7.2 7.2a1.9 1.9 0 0 1 0 2.5Z" />
            <circle cx="7.6" cy="7.6" r="1.3" />
        </svg>
    ),

    change: (props) => (
        <svg viewBox="0 0 24 24" {...props}>
            <path d="M20.2 11A8.2 8.2 0 0 0 6.4 6.1L3.5 8.8" />
            <path d="M3.8 13a8.2 8.2 0 0 0 13.8 4.9l2.9-2.7" />
            <path d="M3.4 4.2v4.6H8" />
            <path d="M20.6 19.8v-4.6H16" />
        </svg>
    ),

    modernize: (props) => (
        <svg viewBox="0 0 24 24" {...props}>
            <rect x="3" y="3" width="18" height="18" rx="3.4" />
            <path d="M12 16.4V9" />
            <path d="m8.6 12.4 3.4-3.4 3.4 3.4" />
        </svg>
    ),

    support: (props) => (
        <svg viewBox="0 0 24 24" {...props}>
            <path d="M4.2 14.2v-2.1a7.8 7.8 0 0 1 15.6 0v2.1" />
            <path d="M19.8 15.4a2 2 0 0 1-2 2h-.9v-5.1h.9a2 2 0 0 1 2 2Z" />
            <path d="M4.2 15.4a2 2 0 0 0 2 2h.9v-5.1h-.9a2 2 0 0 0-2 2Z" />
            <path d="M17.8 17.4v.7a3 3 0 0 1-3 3h-2.6" />
        </svg>
    ),

    shield: (props) => (
        <svg viewBox="0 0 24 24" {...props}>
            <path d="M12 21.5s7.6-3.4 7.6-9.6V5.6L12 2.4 4.4 5.6v6.3c0 6.2 7.6 9.6 7.6 9.6Z" />
            <path d="m9.1 11.9 2 2 3.8-3.9" />
        </svg>
    ),

    cloud: (props) => (
        <svg viewBox="0 0 24 24" {...props}>
            <path d="M17.4 19H7a4.5 4.5 0 0 1-.6-8.9A6 6 0 0 1 17.8 11a4 4 0 0 1-.4 8Z" />
        </svg>
    ),

    server: (props) => (
        <svg viewBox="0 0 24 24" {...props}>
            <ellipse cx="12" cy="6.2" rx="7.6" ry="3.1" />
            <path d="M4.4 6.2v11.6c0 1.7 3.4 3.1 7.6 3.1s7.6-1.4 7.6-3.1V6.2" />
            <path d="M4.4 12c0 1.7 3.4 3.1 7.6 3.1s7.6-1.4 7.6-3.1" />
        </svg>
    ),

    phone: (props) => (
        <svg viewBox="0 0 24 24" {...props}>
            <path d="M15.6 21A13.4 13.4 0 0 1 3 8.4 2.9 2.9 0 0 1 5.9 5.5h1.6a1.5 1.5 0 0 1 1.5 1.3l.5 2.5a1.5 1.5 0 0 1-.5 1.4l-1.1 1a12 12 0 0 0 4 4l1-1.1a1.5 1.5 0 0 1 1.4-.5l2.5.5a1.5 1.5 0 0 1 1.3 1.5V18a3 3 0 0 1-3 3Z" />
        </svg>
    ),

    device: (props) => (
        <svg viewBox="0 0 24 24" {...props}>
            <rect x="3" y="5" width="18" height="12" rx="2.2" />
            <path d="M2 20.2h20" />
        </svg>
    ),

    erp: (props) => (
        <svg viewBox="0 0 24 24" {...props}>
            <path d="m12 2.8 8.8 4.6L12 12 3.2 7.4Z" />
            <path d="m3.2 12 8.8 4.6 8.8-4.6" />
            <path d="m3.2 16.6 8.8 4.6 8.8-4.6" />
        </svg>
    ),

    finance: (props) => (
        <svg viewBox="0 0 24 24" {...props}>
            <rect x="2.6" y="5.6" width="18.8" height="12.8" rx="2.4" />
            <circle cx="12" cy="12" r="2.7" />
            <path d="M6.4 12h.02M17.6 12h.02" />
        </svg>
    ),

    project: (props) => (
        <svg viewBox="0 0 24 24" {...props}>
            <path d="M9 4.4H7a2 2 0 0 0-2 2v12.4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6.4a2 2 0 0 0-2-2h-2" />
            <rect x="9" y="2.6" width="6" height="3.6" rx="1.2" />
            <path d="m9.6 13.2 2 2 3.6-3.7" />
        </svg>
    ),

    sales: (props) => (
        <svg viewBox="0 0 24 24" {...props}>
            <path d="M3 17.2 9.2 11l3.9 3.9L21 7" />
            <path d="M15.2 7H21v5.8" />
        </svg>
    ),

    service: (props) => (
        <svg viewBox="0 0 24 24" {...props}>
            <circle cx="12" cy="12" r="8.8" />
            <circle cx="12" cy="12" r="3.5" />
            <path d="m5.8 5.8 3.7 3.7M14.5 14.5l3.7 3.7M18.2 5.8l-3.7 3.7M9.5 14.5l-3.7 3.7" />
        </svg>
    ),

    chats: (props) => (
        <svg viewBox="0 0 24 24" {...props}>
            <path d="M13.6 11.8a3.8 3.8 0 0 1-3.8 3.8H7l-3.4 2.4v-2.6a3.8 3.8 0 0 1-1.4-2.9V9a3.8 3.8 0 0 1 3.8-3.8h3.8A3.8 3.8 0 0 1 13.6 9Z" />
            <path d="M16.6 8.6h.9a4 4 0 0 1 4 4v3.3a4 4 0 0 1-1.6 3.2v2.5l-3.4-2.4h-3" />
        </svg>
    ),

    field: (props) => (
        <svg viewBox="0 0 24 24" {...props}>
            <path d="M3 16.4V7.2a1 1 0 0 1 1-1h9.2a1 1 0 0 1 1 1v9.2" />
            <path d="M14.2 9.4h3.4a1 1 0 0 1 .8.4l2.4 3.1a1 1 0 0 1 .2.6v2.9" />
            <circle cx="7.6" cy="17.6" r="1.9" />
            <circle cx="17.4" cy="17.6" r="1.9" />
            <path d="M9.5 17.6h6M3 16.4h1.6M19.3 16.4H21" />
        </svg>
    ),

    target: (props) => (
        <svg viewBox="0 0 24 24" {...props}>
            <circle cx="12" cy="12" r="8.8" />
            <circle cx="12" cy="12" r="5" />
            <circle cx="12" cy="12" r="1.3" />
        </svg>
    ),

    chart: (props) => (
        <svg viewBox="0 0 24 24" {...props}>
            <circle cx="12" cy="12" r="8.8" />
            <path d="M12 12V3.2" />
            <path d="m12 12 7.6 4.4" />
        </svg>
    ),

    integration: (props) => (
        <svg viewBox="0 0 24 24" {...props}>
            <rect x="3.2" y="3.2" width="7" height="7" rx="2.2" />
            <rect x="13.8" y="13.8" width="7" height="7" rx="2.2" />
            <path d="M10.2 6.7h3.3a3.8 3.8 0 0 1 3.8 3.8v3.3" />
        </svg>
    ),

    grid: (props) => (
        <svg viewBox="0 0 24 24" {...props}>
            <rect x="3.2" y="3.2" width="7" height="7" rx="2.2" />
            <rect x="13.8" y="3.2" width="7" height="7" rx="2.2" />
            <rect x="3.2" y="13.8" width="7" height="7" rx="2.2" />
            <rect x="13.8" y="13.8" width="7" height="7" rx="2.2" />
        </svg>
    ),

    docs: (props) => (
        <svg viewBox="0 0 24 24" {...props}>
            <path d="M3 7.2a2 2 0 0 1 2-2h3.8l2 2.6H19a2 2 0 0 1 2 2v8.4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" />
            <path d="M8 13.4h8M8 16.6h5" />
        </svg>
    ),

    automation: (props) => (
        <svg viewBox="0 0 24 24" {...props}>
            <path d="M13.4 2.8 5.6 13.6h5.6l-1.8 7.6 8.2-11.2h-5.6z" />
        </svg>
    ),

    staffing: (props) => (
        <svg viewBox="0 0 24 24" {...props}>
            <circle cx="9.6" cy="8" r="3.6" />
            <path d="M3.2 20a6.6 6.6 0 0 1 9.8-5.8" />
            <circle cx="17.2" cy="17.2" r="3.3" />
            <path d="m19.7 19.7 2.1 2.1" />
        </svg>
    ),

    users: (props) => (
        <svg viewBox="0 0 24 24" {...props}>
            <circle cx="9" cy="7.8" r="3.2" />
            <path d="M2.8 19.4a6.2 6.2 0 0 1 12.4 0" />
            <path d="M16.4 6.2a3.2 3.2 0 0 1 0 6.2" />
            <path d="M17.4 14.1a6.2 6.2 0 0 1 3.8 5.3" />
        </svg>
    ),

    globe: (props) => (
        <svg viewBox="0 0 24 24" {...props}>
            <circle cx="12" cy="12" r="8.8" />
            <path d="M3.4 12h17.2" />
            <path d="M12 3.2a14 14 0 0 1 0 17.6 14 14 0 0 1 0-17.6Z" />
        </svg>
    ),

    mail: (props) => (
        <svg viewBox="0 0 24 24" {...props}>
            <rect x="2.8" y="5" width="18.4" height="14" rx="2.4" />
            <path d="m3.4 6.6 8.6 6 8.6-6" />
        </svg>
    ),

    pin: (props) => (
        <svg viewBox="0 0 24 24" {...props}>
            <path d="M12 21.5s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
            <circle cx="12" cy="10.2" r="2.6" />
        </svg>
    ),

    clock: (props) => (
        <svg viewBox="0 0 24 24" {...props}>
            <circle cx="12" cy="12" r="8.8" />
            <path d="M12 7.2V12l3.2 2" />
        </svg>
    ),

    check: (props) => (
        <svg viewBox="0 0 24 24" {...props}>
            <path d="m4.5 12.5 5 5 10-11" />
        </svg>
    ),

    'arrow-r': (props) => (
        <svg viewBox="0 0 24 24" {...props}>
            <path d="M3.8 12h15.4" />
            <path d="m13.2 5.6 6 6.4-6 6.4" />
        </svg>
    ),

    'arrow-l': (props) => (
        <svg viewBox="0 0 24 24" {...props}>
            <path d="M20.2 12H4.8" />
            <path d="m10.8 5.6-6 6.4 6 6.4" />
        </svg>
    ),

    'arrow-down': (props) => (
        <svg viewBox="0 0 12 12" {...props}>
            <path d="M1.5 3.75 6 8.25l4.5-4.5" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),

    star: (props) => (
        <svg viewBox="0 0 24 24" {...props}>
            <path d="m12 2.6 2.9 6 6.6.9-4.8 4.6 1.2 6.5-5.9-3.2-5.9 3.2 1.2-6.5-4.8-4.6 6.6-.9z" />
        </svg>
    ),

    award: (props) => (
        <svg viewBox="0 0 24 24" {...props}>
            <circle cx="12" cy="9" r="6" />
            <path d="m8.4 14.2-1.6 7 5.2-2.8 5.2 2.8-1.6-7" />
        </svg>
    )
};

// Default export for convenience
export default Icons;