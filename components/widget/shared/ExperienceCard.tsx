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
    <div className="bg-white border border-zacchera-border-light w-full max-w-full sm:w-auto sm:max-w-none overflow-hidden">
      {/* Image Section */}
      <figure className="w-full overflow-hidden m-0" style={{ height: 'var(--trv-card-image-height)' }}>
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
      </figure>
      
      {/* Header Section */}
      <div className="px-4 py-3 border-b border-zacchera-border-light">
        <h3 
          className="font-zacchera-bold font-zacchera-heading m-0"
          style={{ 
            fontSize: 'var(--trv-card-title-size)',
            color: 'var(--trv-text-tan)',
            lineHeight: '1.2'
          }}
        >
          {title}
        </h3>
      </div>
      
      {/* Content Section */}
      <div className="px-4 py-4 font-zacchera-body">
        <div className="text-zacchera-text-gray font-zacchera-body" style={{ fontSize: 'var(--trv-base-font-size)', lineHeight: 'var(--trv-base-line-height)' }}>
          <p className="m-0 line-clamp-3">{description}</p>
        </div>
      </div>
      
      {/* Footer Section with Button */}
      <div className="px-4 py-4 border-t border-zacchera-border-light">
        <div className="flex items-center justify-center">
          <Button
            className="w-full"
            onClick={() => {
              window.open("https://traverum-landing-page.lovable.app/book-demo", "_blank", "noopener,noreferrer");
            }}
          >
            Book a demo
          </Button>
        </div>
      </div>
    </div>
  );
}
