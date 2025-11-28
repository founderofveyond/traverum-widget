"use client";

import React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
};

export default function Button({ variant = "primary", className = "", ...props }: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-zacchera-container px-4 py-2 text-sm font-medium font-zacchera-body uppercase tracking-zacchera transition disabled:opacity-50 disabled:cursor-not-allowed";
  const styles =
    variant === "primary"
      ? "bg-zacchera-primary text-white hover:bg-zacchera-hover-primary"
      : variant === "secondary"
      ? "bg-zacchera-secondary text-white hover:bg-zacchera-hover-secondary"
      : "text-zacchera-primary hover:bg-slate-100";
  return <button className={`${base} ${styles} ${className}`} {...props} />;
}
