"use client";

import Button from "@/components/widget/shared/Button";

export default function ExperienceCard({
  title,
  imageUrl,
  description,
  priceEuros,
  onView
}: {
  title: string;
  imageUrl: string;
  description: string;
  priceEuros: string;
  onView: () => void;
}) {
  return (
    <div className="trv-card overflow-hidden">
      <div className="h-44 w-full overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover"
          onError={(e) => {
            const t = e.currentTarget;
            t.onerror = null;
            t.src = "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80";
          }}
        />
      </div>
      <div className="space-y-2 p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="line-clamp-3 text-sm text-slate-600">{description}</p>
        <div className="flex items-center justify-between pt-2">
          <span className="text-base font-medium">{priceEuros}</span>
          <Button onClick={onView}>View</Button>
        </div>
      </div>
    </div>
  );
}
