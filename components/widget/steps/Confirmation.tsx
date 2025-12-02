"use client";

import { useWidget } from "@/lib/widget/widgetState";
import Button from "@/components/widget/shared/Button";

export default function Confirmation() {
  const { state, dispatch } = useWidget();
  return (
    <div className="w-full">
      <div className="mx-auto" style={{ maxWidth: '1170px', width: '100%', paddingLeft: '15px', paddingRight: '15px' }}>
        <div className="mx-auto max-w-lg text-center font-zacchera-body">
          <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-green-100 text-green-600 grid place-items-center">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </div>
          <h2 
            className="text-2xl font-zacchera-bold font-zacchera-heading"
            style={{ color: 'var(--trv-text-tan)' }}
          >
            Booking Confirmed
          </h2>
          <p className="mt-2 text-zacchera-text-gray font-zacchera-body">Your reference: {state.fakeBookingId}</p>
          <div className="mt-6">
            <Button className="w-full sm:w-auto" onClick={() => dispatch({ type: "RESET" })}>Book another experience</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
