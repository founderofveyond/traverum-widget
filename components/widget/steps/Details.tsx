"use client";

import { useMemo, useState } from "react";
import { useWidget } from "@/lib/widget/widgetState";
import { DEMO_EXPERIENCES } from "@/lib/widget/demoData";
import Button from "@/components/widget/shared/Button";
import type { CartItem } from "@/lib/widget/types";

export default function Details() {
  const { state, dispatch } = useWidget();
  const experience = useMemo(() => DEMO_EXPERIENCES.find(e => e.id === state.selectedExperienceId), [state.selectedExperienceId]);
  const [slotId, setSlotId] = useState<string>(experience?.slots[0]?.id ?? "");
  const [qty, setQty] = useState<number>(1);

  if (!experience) return null;

  const addToCart = () => {
    if (!slotId) return;
    const item: CartItem = {
      id: `${experience.id}_${slotId}_${Date.now()}`,
      experienceId: experience.id,
      slotId,
      quantity: qty,
      unitPriceCents: experience.priceCents
    };
    dispatch({ type: "ADD_TO_CART", item });
  };

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <div className="trv-card overflow-hidden">
        <img src={experience.imageUrl} alt={experience.title} className="h-72 w-full object-cover" />
      </div>
      <div className="space-y-4 font-zacchera-body">
        <h2 className="text-2xl font-zacchera-bold font-zacchera-heading">{experience.title}</h2>
        <p className="text-zacchera-text-darker-gray font-zacchera-body">{experience.description}</p>
        <div className="flex gap-4 text-sm text-zacchera-text-gray font-zacchera-body">
          <div>Duration: {Math.round(experience.durationMin / 60)}h</div>
          <div>Max: {experience.maxParticipants} people</div>
        </div>
        <div className="space-y-2">
          <label className="text-sm text-zacchera-text-gray font-zacchera-body">Select date/time</label>
          <select
            className="w-full rounded-zacchera-small border border-zacchera-border-light bg-zacchera-form-bg px-3 py-2 font-zacchera-body outline-none focus:ring-2 focus:ring-zacchera-primary"
            value={slotId}
            onChange={(e) => setSlotId(e.target.value)}
          >
            {experience.slots.map(s => (
              <option key={s.id} value={s.id}>
                {new Date(s.startAt).toLocaleString()} · {s.remaining} spots left
              </option>
            ))}
          </select>
        </div>
        <div className="space-y-2">
          <label className="text-sm text-zacchera-text-gray font-zacchera-body">Participants</label>
          <input
            type="number"
            min={1}
            max={experience.maxParticipants}
            value={qty}
            onChange={(e) => setQty(Number(e.target.value))}
            className="w-32 rounded-zacchera-small border border-zacchera-border-light bg-zacchera-form-bg px-3 py-2 font-zacchera-body outline-none focus:ring-2 focus:ring-zacchera-primary"
          />
        </div>
        <div className="flex items-center justify-between pt-2">
          <div className="text-xl font-zacchera-bold font-zacchera-body">€ {(experience.priceCents / 100).toFixed(2)}</div>
          <div className="flex gap-2">
            <Button variant="ghost" onClick={() => dispatch({ type: "SET_STEP", step: "catalog" })}>Back</Button>
            <Button onClick={addToCart}>Add to cart</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
