"use client";

import { useWidget } from "@/lib/widget/widgetState";
import { DEMO_EXPERIENCES } from "@/lib/widget/demoData";
import ExperienceCard from "@/components/widget/shared/ExperienceCard";

export default function Catalog() {
  const { dispatch } = useWidget();
  return (
    <div className="w-full grid grid-cols-1 gap-4 sm:grid-cols-3 justify-items-stretch px-3 sm:px-0">
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
  );
}
