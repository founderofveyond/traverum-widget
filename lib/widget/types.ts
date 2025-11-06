export type ExperienceSlot = {
  id: string;
  startAt: string; // ISO datetime
  remaining: number;
};

export type Experience = {
  id: string;
  title: string;
  imageUrl: string;
  description: string;
  priceCents: number;
  currency: string;
  durationMin: number;
  maxParticipants: number;
  slots: ExperienceSlot[];
};

export type CartItem = {
  id: string; // unique per cart item
  experienceId: string;
  slotId: string;
  quantity: number;
  unitPriceCents: number;
};

export type GuestDetails = {
  fullName: string;
  email: string;
  phone: string;
};

export type WidgetStep =
  | "catalog"
  | "details"
  | "cart"
  | "guest"
  | "payment"
  | "confirmation";
