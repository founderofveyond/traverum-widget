"use client";

import { useEffect, useMemo } from "react";
import { WidgetProvider, useWidget } from "@/lib/widget/widgetState";
import { initAutoResize } from "@/lib/widget/embedMessaging";
import { getHotelTheme } from "@/lib/widget/hotelThemes";
import Catalog from "@/components/widget/steps/Catalog";
import Details from "@/components/widget/steps/Details";
import Cart from "@/components/widget/steps/Cart";
import GuestForm from "@/components/widget/steps/GuestForm";
import PaymentMock from "@/components/widget/steps/PaymentMock";
import Confirmation from "@/components/widget/steps/Confirmation";

function Router() {
  const { state } = useWidget();
  switch (state.step) {
    case "catalog":
      return <Catalog />;
    case "details":
      return <Details />;
    case "cart":
      return <Cart />;
    case "guest":
      return <GuestForm />;
    case "payment":
      return <PaymentMock />;
    case "confirmation":
      return <Confirmation />;
    default:
      return null;
  }
}

export default function WidgetRoot({ hotelId }: { hotelId: string }) {
  return (
    <WidgetProvider hotelId={hotelId}>
      <WidgetChrome />
    </WidgetProvider>
  );
}

function WidgetChrome() {
  const { state } = useWidget();
  const theme = useMemo(() => getHotelTheme(state.hotelId), [state.hotelId]);
  useAutoResizeOnce();
  
  return (
    <div className="mx-auto max-w-5xl rounded-zacchera-container bg-white px-4 py-6 font-zacchera-body text-zacchera-base">
      <header className="mb-6">
        <h1 
          className="font-zacchera-bold font-zacchera-heading text-zacchera-text-tan mb-2"
          style={{ fontSize: 'var(--trv-heading-size)' }}
        >
          {theme.content?.title || 'Local Experiences'}
        </h1>
        <p className="text-base text-zacchera-text-gray font-zacchera-body">
          {theme.content?.description || 'Discover amazing experiences in your area.'}
        </p>
      </header>
      <Router />
    </div>
  );
}

function useAutoResizeOnce() {
  useEffect(() => initAutoResize(), []);
}
