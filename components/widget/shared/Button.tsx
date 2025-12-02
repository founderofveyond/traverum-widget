"use client";

import React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
};

export default function Button({ variant = "primary", className = "", ...props }: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-4 sm:py-2 text-base sm:text-sm font-zacchera-bold font-zacchera-body uppercase tracking-zacchera transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed border-2";
  const styles =
    variant === "primary"
      ? "border-zacchera-primary text-zacchera-primary bg-transparent hover:bg-zacchera-primary hover:text-white"
      : variant === "secondary"
      ? "border-zacchera-secondary text-zacchera-secondary bg-transparent hover:bg-zacchera-secondary hover:text-white"
      : "border-transparent text-zacchera-primary hover:bg-zacchera-bg-light";
  return <button className={`${base} ${styles} ${className}`} {...props} />;
}
