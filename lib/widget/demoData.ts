import type { Experience } from "@/lib/widget/types";

export const LOADING_DELAY = 500;

export const DEMO_EXPERIENCES: Experience[] = [
  {
    id: "exp_kayak",
    title: "Sunrise Canadian canoe tour",
    imageUrl:
      "/images/sunrise-canoe-tour.webp",
    description:
      "Glide across Lake Maggiore from Angera towards Arona on a relaxed three‑and‑a‑half‑hour adventure.",
    priceCents: 6500,
    currency: "EUR",
    durationMin: 120,
    maxParticipants: 12,
    slots: [
      { id: "s1", startAt: new Date(Date.now() + 86400000).toISOString(), remaining: 6 },
      { id: "s2", startAt: new Date(Date.now() + 2 * 86400000).toISOString(), remaining: 10 }
    ]
  },
  {
    id: "exp_wine",
    title: "Wine Tasting",
    imageUrl:
      "https://images.unsplash.com/photo-1542843137-8791a6904d14?q=80&w=1600&auto=format&fit=crop",
    description:
      "Sample local varietals in a charming cellar with a sommelier-led tasting session.",
    priceCents: 4500,
    currency: "EUR",
    durationMin: 90,
    maxParticipants: 16,
    slots: [
      { id: "s1", startAt: new Date(Date.now() + 3 * 86400000).toISOString(), remaining: 8 },
      { id: "s2", startAt: new Date(Date.now() + 4 * 86400000).toISOString(), remaining: 12 }
    ]
  },
  {
    id: "exp_food",
    title: "City Food Tour",
    imageUrl:
      "https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?q=80&w=1600&auto=format&fit=crop",
    description:
      "Explore hidden gems and street food favorites with a local expert guide.",
    priceCents: 5500,
    currency: "EUR",
    durationMin: 150,
    maxParticipants: 10,
    slots: [
      { id: "s1", startAt: new Date(Date.now() + 5 * 86400000).toISOString(), remaining: 5 },
      { id: "s2", startAt: new Date(Date.now() + 6 * 86400000).toISOString(), remaining: 9 }
    ]
  }
];
