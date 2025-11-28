"use client";

import { useWidget } from "@/lib/widget/widgetState";

const steps: { key: string; label: string }[] = [
  { key: "catalog", label: "Browse" },
  { key: "details", label: "Details" },
  { key: "cart", label: "Cart" },
  { key: "guest", label: "Guest" },
  { key: "payment", label: "Payment" },
  { key: "confirmation", label: "Done" }
];

export default function StepIndicator() {
  const { state } = useWidget();
  const idx = steps.findIndex(s => s.key === state.step);
  return (
    <div className="text-xs text-slate-500 font-zacchera-body">
      Step {idx + 1} / {steps.length}
    </div>
  );
}
