"use client";

import { useEffect } from "react";
import { WidgetProvider, useWidget } from "@/lib/widget/widgetState";
import { initAutoResize } from "@/lib/widget/embedMessaging";
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
  useAutoResizeOnce();
  return (
    <div className="mx-auto max-w-5xl rounded-zacchera-container bg-white px-4 py-6 font-zacchera-body text-zacchera-base">
      <header className="mb-6">
        <h1 className="text-4xl font-zacchera-bold font-zacchera-heading text-zacchera-text-tan mb-2">Local Experiences</h1>
        <p className="text-base text-zacchera-text-gray font-zacchera-body">
          These local experiences have been chosen by Zacchera hotels. Book directly and experience Lake Maggiore the fullest.
        </p>
      </header>
      <Router />
    </div>
  );
}

function useAutoResizeOnce() {
  useEffect(() => initAutoResize(), []);
}
