"use client";

import React from "react";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

export default function Input({ label, error, className = "", id, ...props }: Props) {
  const inputId = id || React.useId();
  return (
    <div className="space-y-1">
      <label htmlFor={inputId} className="text-sm text-slate-600">
        {label}
      </label>
      <input
        id={inputId}
        className={`w-full rounded-md border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-primary ${className}`}
        {...props}
      />
      {error ? <p className="text-xs text-red-600">{error}</p> : null}
    </div>
  );
}
