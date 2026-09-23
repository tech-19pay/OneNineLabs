"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  y?: number;
}

export function Reveal({
  children,
  delay = 0,
  duration = 0.45,
  className = "",
  y = 16,
}: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface EyebrowProps {
  children: ReactNode;
  className?: string;
}

export function Eyebrow({ children, className = "" }: EyebrowProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-[#FCA5A5]/60 bg-[#FEEBE4] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#EA580C] shadow-2xs ${className}`}
    >
      {children}
    </span>
  );
}
