import { z } from "zod";

export const guestSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(6, "Enter a valid phone")
});

export type GuestInput = z.infer<typeof guestSchema>;
