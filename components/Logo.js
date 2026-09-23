"use client";

import React from "react";
import Link from "next/link";

export default function Logo({
  variant = "light",
  size = "md",
  className = "",
  style = {},
  priority = false,
}) {
  const isDark = variant === "dark";

  // Height sizing configurations preserving natural aspect ratio of the logo without increasing header height
  const heights = {
    sm: 30,
    md: 38,
    lg: 44,
    xl: 52,
  };

  const h = heights[size] || (typeof size === "number" ? size : 38);
  const w = Math.round(h * (841 / 129));

  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .onenine-brand-logo img {
            height: ${Math.round(h * 0.75)}px !important;
            width: auto !important;
          }
        }
      `}</style>
      <Link
        href="/"
        className={`onenine-brand-logo ${className}`}
        style={{
          display: "inline-flex",
          alignItems: "center",
          textDecoration: "none",
          cursor: "pointer",
          lineHeight: 0,
          ...style,
        }}
      >
        <img
          src="/logo.png"
          alt="OneNineLabs - BUILD • INNOVATE • ELEVATE"
          width={w}
          height={h}
          style={{
            height: `${h}px`,
            width: "auto",
            maxWidth: "100%",
            objectFit: "contain",
            display: "block",
            filter: isDark ? "brightness(0) invert(1)" : "none",
            transition: "filter 0.2s ease, transform 0.2s ease",
          }}
          loading={priority ? "eager" : "lazy"}
        />
      </Link>
    </>
  );
}
