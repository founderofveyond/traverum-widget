"use client";

import { useMemo } from "react";
import { useWidget } from "@/lib/widget/widgetState";
import { DEMO_EXPERIENCES } from "@/lib/widget/demoData";
import Button from "@/components/widget/shared/Button";

export default function Cart() {
  const { state, dispatch } = useWidget();
  const items = state.cart;
  const experiences = useMemo(() => Object.fromEntries(DEMO_EXPERIENCES.map(e => [e.id, e])), []);
  const totalCents = items.reduce((sum, it) => sum + it.unitPriceCents * it.quantity, 0);

  return (
    <div className="w-full">
      <div className="mx-auto" style={{ maxWidth: '1170px', width: '100%', paddingLeft: '15px', paddingRight: '15px' }}>
        <div className="space-y-4 font-zacchera-body">
      <div className="trv-card">
        <div className="divide-y">
          {items.length === 0 ? (
            <div className="p-4 text-sm text-zacchera-text-gray font-zacchera-body">Your cart is empty.</div>
          ) : (
            items.map((it) => {
              const exp = experiences[it.experienceId];
              return (
                <div key={it.id} className="flex items-center justify-between gap-4 p-4">
                  <div className="flex items-center gap-3">
                    <img src={exp.imageUrl} alt="" className="h-14 w-14 rounded object-cover" />
                    <div>
                      <div 
                        className="font-medium font-zacchera-heading"
                        style={{ color: 'var(--trv-text-tan)' }}
                      >
                        {exp.title}
                      </div>
                      <div className="text-xs text-zacchera-text-dark-gray font-zacchera-body">
                        {new Date(exp.slots.find(s => s.id === it.slotId)!.startAt).toLocaleString()} · {it.quantity}×
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-sm font-medium font-zacchera-body">€ {((it.unitPriceCents * it.quantity) / 100).toFixed(2)}</div>
                    <Button
                      variant="ghost"
                      onClick={() => dispatch({ type: "REMOVE_FROM_CART", itemId: it.id })}
                    >
                      Remove
                    </Button>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-0">
        <Button className="w-full sm:w-auto" variant="ghost" onClick={() => dispatch({ type: "SET_STEP", step: "catalog" })}>
          Continue browsing
        </Button>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
          <div className="text-lg font-zacchera-bold font-zacchera-body text-center sm:text-left">Total: € {(totalCents / 100).toFixed(2)}</div>
          <Button className="w-full sm:w-auto" disabled={items.length === 0} onClick={() => dispatch({ type: "SET_STEP", step: "guest" })}>
            Checkout
          </Button>
        </div>
        </div>
      </div>
    </div>
  );
}
