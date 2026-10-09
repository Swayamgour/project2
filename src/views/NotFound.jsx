"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main" style={{ padding: "120px 24px", textAlign: "center" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Page not found</h1>
      <p style={{ marginBottom: "1.5rem" }}>The page you're looking for doesn't exist.</p>
      <Link href="/" className="btn btn-primary">Back to home</Link>
    </main>
  );
}
