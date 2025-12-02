"use client";

import { useWidget } from "@/lib/widget/widgetState";
import { DEMO_EXPERIENCES } from "@/lib/widget/demoData";
import ExperienceCard from "@/components/widget/shared/ExperienceCard";

export default function Catalog() {
  const { dispatch } = useWidget();
  return (
    <div className="w-full">
      <div className="mx-auto" style={{ maxWidth: '1170px', width: '100%', paddingLeft: '15px', paddingRight: '15px' }}>
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
