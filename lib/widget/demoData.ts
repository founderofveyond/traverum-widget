import type { Experience } from "@/lib/widget/types";

export const LOADING_DELAY = 500;

export const DEMO_EXPERIENCES: Experience[] = [
  {
    id: "exp_kayak",
    title: "Sunrise Canadian canoe tour",
    imageUrl:
      "/images/sunrise-canoe-tour.webp",
    description:
      "Glide across Lake Maggiore from Angera towards Arona",
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
    title: "Wine tasting",
    imageUrl:
      "/images/winetasting.jpg",
    description:
      "Discover three carefully crafted mountain wines in the heart of Val d'Ossola",
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
    title: "Mottarone day",
    imageUrl:
      "/images/mottarone-day.jpg",
    description:
      "Imagine standing on a mountain ridge where seven lakes shimmer at your feet.",
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
