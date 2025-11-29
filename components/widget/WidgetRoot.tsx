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
    <div className="w-full sm:mx-auto sm:max-w-5xl rounded-zacchera-container px-0 sm:px-4 py-4 sm:py-6 font-zacchera-body text-zacchera-base" style={{ backgroundColor: 'var(--trv-bg-light)', minHeight: '100%' }}>
      <Router />
    </div>
  );
}

function useAutoResizeOnce() {
  useEffect(() => initAutoResize(), []);
}
