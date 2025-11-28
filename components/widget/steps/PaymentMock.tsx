"use client";

import { useState } from "react";
import { useWidget } from "@/lib/widget/widgetState";
import Button from "@/components/widget/shared/Button";

export default function PaymentMock() {
  const { dispatch } = useWidget();
  const [loading, setLoading] = useState(false);

  function complete() {
    setLoading(true);
    setTimeout(() => {
      const id = `demo_${Math.random().toString(36).slice(2, 10)}`;
      window.parent?.postMessage({ type: "traverum.booking_completed", fakeBookingId: id }, "*");
      dispatch({ type: "SET_BOOKING_ID", bookingId: id });
    }, 800);
  }

  return (
    <div className="mx-auto max-w-md space-y-4 font-zacchera-body">
      <div className="trv-card p-4">
        <div className="space-y-2">
          <div className="text-sm text-zacchera-text-gray font-zacchera-body">Mock card form</div>
          <input className="w-full rounded-zacchera-small border border-zacchera-border-light bg-zacchera-form-bg px-3 py-2 font-zacchera-body outline-none focus:ring-2 focus:ring-zacchera-primary" placeholder="Card number" />
          <div className="flex gap-2">
            <input className="w-full rounded-zacchera-small border border-zacchera-border-light bg-zacchera-form-bg px-3 py-2 font-zacchera-body outline-none focus:ring-2 focus:ring-zacchera-primary" placeholder="MM/YY" />
            <input className="w-full rounded-zacchera-small border border-zacchera-border-light bg-zacchera-form-bg px-3 py-2 font-zacchera-body outline-none focus:ring-2 focus:ring-zacchera-primary" placeholder="CVC" />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <Button variant="ghost" onClick={() => dispatch({ type: "SET_STEP", step: "guest" })}>Back</Button>
        <Button onClick={complete} disabled={loading}>{loading ? "Processing..." : "Complete Booking"}</Button>
      </div>
    </div>
  );
}
