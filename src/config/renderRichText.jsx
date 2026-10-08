import React from "react";

/* Turns "text [label](url) text" into text + <a> tags.
   Used for definition.paragraphs and faqs.items[].answer */
export default function renderRichText(text = "") {
    const parts = [];
    const re = /\[([^\]]+)\]\(([^)]+)\)/g;
    let last = 0;
    let match;
    let i = 0;

    while ((match = re.exec(text)) !== null) {
        if (match.index > last) parts.push(text.slice(last, match.index));
        parts.push(
            <a key={i++} href={match[2]}>
                {match[1]}
            </a>
        );
        last = re.lastIndex;
    }

    if (last < text.length) parts.push(text.slice(last));
    return parts;
}