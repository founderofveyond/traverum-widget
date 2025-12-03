import type { Experience } from "@/lib/widget/types";

export const LOADING_DELAY = 500;

export const DEMO_EXPERIENCES: Experience[] = [
  {
    id: "exp_kayak",
    title: "Island tour",
    imageUrl:
      "/images/borromean-island.jpg",
    description: "Exclusive 2 hour tour by local guide.",
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
      "/images/pexels-helenalopes-696219.jpg",
    description: "Discover carefully crafted local wines.",
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
    title: "Nature adventure",
    imageUrl:
      "/images/mottarone-day.jpg",
    description: "Hike to nearby mountain with lunch at the top.",
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
