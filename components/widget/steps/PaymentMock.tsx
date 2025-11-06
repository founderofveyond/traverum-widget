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
    <div className="mx-auto max-w-md space-y-4">
      <div className="trv-card p-4">
        <div className="space-y-2">
          <div className="text-sm text-slate-600">Mock card form</div>
          <input className="w-full rounded-md border border-slate-300 px-3 py-2" placeholder="Card number" />
          <div className="flex gap-2">
            <input className="w-full rounded-md border border-slate-300 px-3 py-2" placeholder="MM/YY" />
            <input className="w-full rounded-md border border-slate-300 px-3 py-2" placeholder="CVC" />
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
