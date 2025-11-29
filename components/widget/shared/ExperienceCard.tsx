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
    <div className="trv-card overflow-hidden w-full max-w-full sm:w-auto sm:max-w-none mx-auto sm:mx-0">
      <div className="h-50 w-full overflow-hidden">
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
      <div className="space-y-3 p-4 sm:p-6 font-zacchera-body">
        <h3 
          className="font-zacchera-bold font-zacchera-heading"
          style={{ fontSize: 'var(--trv-card-title-size)' }}
        >
          {title}
        </h3>
        <p className="line-clamp-3 text-base text-zacchera-text-gray font-zacchera-body">{description}</p>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-0 pt-2">
          <span className="text-lg font-medium font-zacchera-body">{priceEuros}</span>
          <Button className="w-full sm:w-auto" onClick={onView}>View</Button>
        </div>
      </div>
    </div>
  );
}
