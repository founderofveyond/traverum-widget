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
    <div className="space-y-4 font-zacchera-body">
      <div className="trv-card">
        <div className="divide-y">
          {items.length === 0 ? (
            <div className="p-4 text-sm text-slate-600 font-zacchera-body">Your cart is empty.</div>
          ) : (
            items.map((it) => {
              const exp = experiences[it.experienceId];
              return (
                <div key={it.id} className="flex items-center justify-between gap-4 p-4">
                  <div className="flex items-center gap-3">
                    <img src={exp.imageUrl} alt="" className="h-14 w-14 rounded object-cover" />
                    <div>
                      <div className="font-medium font-zacchera-heading">{exp.title}</div>
                      <div className="text-xs text-slate-500 font-zacchera-body">
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

      <div className="flex items-center justify-between">
        <Button variant="ghost" onClick={() => dispatch({ type: "SET_STEP", step: "catalog" })}>
          Continue browsing
        </Button>
        <div className="flex items-center gap-4">
          <div className="text-lg font-semibold font-zacchera-body">Total: € {(totalCents / 100).toFixed(2)}</div>
          <Button disabled={items.length === 0} onClick={() => dispatch({ type: "SET_STEP", step: "guest" })}>
            Checkout
          </Button>
        </div>
      </div>
    </div>
  );
}
