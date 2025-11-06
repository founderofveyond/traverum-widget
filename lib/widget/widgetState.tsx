"use client";

import { createContext, useContext, useEffect, useMemo, useReducer } from "react";
import type { CartItem, GuestDetails, WidgetStep } from "@/lib/widget/types";
import { DEMO_EXPERIENCES } from "@/lib/widget/demoData";

export type WidgetState = {
  hotelId: string;
  step: WidgetStep;
  selectedExperienceId?: string;
  cart: CartItem[];
  guest?: GuestDetails;
  fakeBookingId?: string;
};

export type WidgetAction =
  | { type: "SET_STEP"; step: WidgetStep }
  | { type: "SELECT_EXPERIENCE"; experienceId: string }
  | { type: "ADD_TO_CART"; item: CartItem }
  | { type: "REMOVE_FROM_CART"; itemId: string }
  | { type: "UPDATE_GUEST"; guest: GuestDetails }
  | { type: "SET_BOOKING_ID"; bookingId: string }
  | { type: "RESET" };

function reducer(state: WidgetState, action: WidgetAction): WidgetState {
  switch (action.type) {
    case "SET_STEP":
      return { ...state, step: action.step };
    case "SELECT_EXPERIENCE":
      return { ...state, selectedExperienceId: action.experienceId, step: "details" };
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, action.item], step: "cart" };
    case "REMOVE_FROM_CART":
      return { ...state, cart: state.cart.filter(i => i.id !== action.itemId) };
    case "UPDATE_GUEST":
      return { ...state, guest: action.guest };
    case "SET_BOOKING_ID":
      return { ...state, fakeBookingId: action.bookingId, step: "confirmation" };
    case "RESET":
      return { ...initialState(state.hotelId) };
    default:
      return state;
  }
}

function initialState(hotelId: string): WidgetState {
  return { hotelId, step: "catalog", cart: [] };
}

const Ctx = createContext<{
  state: WidgetState;
  dispatch: React.Dispatch<WidgetAction>;
  experiences: typeof DEMO_EXPERIENCES;
} | null>(null);

export function WidgetProvider({ hotelId, children }: { hotelId: string; children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, undefined as unknown as WidgetState, () => {
    if (typeof window !== "undefined") {
      const raw = sessionStorage.getItem(`trv_widget_${hotelId}`);
      if (raw) {
        try {
          return JSON.parse(raw) as WidgetState;
        } catch {}
      }
    }
    return initialState(hotelId);
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem(`trv_widget_${hotelId}`, JSON.stringify(state));
      window.parent?.postMessage({ type: "traverum.cart_count", count: state.cart.length }, "*");
      window.parent?.postMessage({ type: "traverum.step_changed", step: state.step }, "*");
    }
  }, [state, hotelId]);

  const value = useMemo(() => ({ state, dispatch, experiences: DEMO_EXPERIENCES }), [state]);
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useWidget() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useWidget must be used within WidgetProvider");
  return ctx;
}
