import { z } from "zod";

export const inputUser = z.object({
  body: z.object({
    email: z
      .string({
        required_error: "Email is required",
      })
      .email(),
    name: z.string(),
  }),
});
