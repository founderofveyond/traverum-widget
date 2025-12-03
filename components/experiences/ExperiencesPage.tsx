"use client";

import { useMemo } from "react";
import { WidgetProvider, useWidget } from "@/lib/widget/widgetState";
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

export default function ExperiencesPage({ hotelId }: { hotelId: string }) {
  return (
    <WidgetProvider hotelId={hotelId}>
      <ExperiencesChrome />
    </WidgetProvider>
  );
}

function ExperiencesChrome() {
  const { state } = useWidget();
  const theme = useMemo(() => getHotelTheme(state.hotelId), [state.hotelId]);
  
  return (
    <div className="w-full font-zacchera-body text-zacchera-base" style={{ minHeight: '100vh', paddingTop: '40px', paddingBottom: '40px' }}>
      <Router />
    </div>
  );
}

