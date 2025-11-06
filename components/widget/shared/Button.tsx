"use client";

import React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
};

export default function Button({ variant = "primary", className = "", ...props }: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition disabled:opacity-50 disabled:cursor-not-allowed";
  const styles =
    variant === "primary"
      ? "bg-primary text-white hover:opacity-90"
      : variant === "secondary"
      ? "bg-slate-200 text-slate-900 hover:bg-slate-300"
      : "text-primary hover:bg-slate-100";
  return <button className={`${base} ${styles} ${className}`} {...props} />;
}
