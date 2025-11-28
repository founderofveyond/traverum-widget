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
      <label htmlFor={inputId} className="text-sm text-slate-600 font-zacchera-body">
        {label}
      </label>
      <input
        id={inputId}
        className={`w-full rounded-zacchera-small border border-slate-300 bg-zacchera-form-bg px-3 py-2 font-zacchera-body outline-none focus:ring-2 focus:ring-zacchera-primary ${className}`}
        {...props}
      />
      {error ? <p className="text-xs text-red-600 font-zacchera-body">{error}</p> : null}
    </div>
  );
}
