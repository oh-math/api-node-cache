import { z } from "zod";

export const createUser = z.object({
  body: z.object({
    email: z
      .string({
        required_error: "Email is required",
      })
      .email(),
    name: z.string().optional(),
  }),
});

export const updateUser = z.object({
  body: z.object({
    email: z
      .string({
        required_error: "Email is required",
      })
      .email()
      .optional(),
    name: z.string().optional(),
  }),
});
