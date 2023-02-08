import { z } from "zod";

const CHARMESSAGE = "Number of characters allowed exceeded";

export const createPost = z.object({
  body: z.object({
    title: z.string().max(32, CHARMESSAGE),
    content: z.string().max(280, CHARMESSAGE).optional(),
    published: z.boolean(),
  }),
});

export const updatePost = z.object({
  body: z.object({
    title: z.string().max(32, CHARMESSAGE).optional(),
    content: z.string().max(280, CHARMESSAGE).optional(),
    published: z.boolean().optional(),
  }),
});
