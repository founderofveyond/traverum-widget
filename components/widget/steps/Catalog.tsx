"use client";

import { useWidget } from "@/lib/widget/widgetState";
import { getHotelTheme } from "@/lib/widget/hotelThemes";
import { DEMO_EXPERIENCES } from "@/lib/widget/demoData";
import ExperienceCard from "@/components/widget/shared/ExperienceCard";

export default function Catalog() {
  const { state, dispatch } = useWidget();
  const theme = getHotelTheme(state.hotelId);
  return (
    <div className="w-full">
      <div className="mx-auto" style={{ maxWidth: '1170px', width: '100%', paddingLeft: '15px', paddingRight: '15px' }}>
        {/* Title Section */}
        <div className="text-left mb-6 sm:mb-8">
          <h5 
            className="text-left uppercase font-zacchera-heading font-zacchera-bold mb-4"
            style={{ 
              fontSize: '40px',
              letterSpacing: '0.1em',
              color: 'var(--trv-text-tan)',
              paddingBottom: '20px',
              lineHeight: '1.2',
              margin: '0'
            }}
          >
            {theme.content?.title ?? 'LOCAL EXPERIENCES'}
          </h5>
          <p 
            className="text-left font-zacchera-body"
            style={{
              fontSize: 'var(--trv-base-font-size)',
              lineHeight: 'var(--trv-base-line-height)',
              color: 'var(--trv-text-darker-gray)',
              marginTop: '0',
              marginBottom: '0'
            }}
          >
            {theme.content?.description ?? 'These are our selected experiences from the area. Start booking by clicking view details.'}
          </p>
        </div>
        
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-stretch">
          {DEMO_EXPERIENCES.map((exp) => (
            <ExperienceCard
              key={exp.id}
              title={exp.title}
              imageUrl={exp.imageUrl}
              description={exp.description}
              priceEuros={`€ ${(exp.priceCents / 100).toFixed(2)}`}
              onView={() => dispatch({ type: "SELECT_EXPERIENCE", experienceId: exp.id })}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
