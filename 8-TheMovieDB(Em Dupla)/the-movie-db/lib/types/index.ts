import { z } from 'zod';
/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

export const UserSchema = z.object({
  id: z.string().cuid(),
  email: z.string().email({ message: "Invalid email address" }).min(8, { message: "Minimum 8 characters" }),
  name: z.string().min(3, { message: "Minimum 3 characters" }).max(100, { message: "Maximum 100 characters" }),
  password: z.string().min(3, { message: "Minimum 3 characters" }).max(50, { message: "Maximum 50 characters" }),
  tmdbId: z.string().length(8, { message: "Must be 8 characters long" }).nullable(),
})

export type User = z.infer<typeof UserSchema>

/////////////////////////////////////////
// USER PARTIAL SCHEMA
/////////////////////////////////////////

export const UserPartialSchema = UserSchema.partial()

export type UserPartial = z.infer<typeof UserPartialSchema>
