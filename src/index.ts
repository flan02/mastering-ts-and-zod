import { z } from "zod";

// Define a schema with Zod
const UserSchema = z.object({
  id: z.number().int().positive(),
  name: z.string().min(1),
  email: z.string().email(),
  age: z.number().int().min(0).optional(),
});

// Infer the TypeScript type from the schema
type User = z.infer<typeof UserSchema>;

// Parse and validate data at runtime
const rawData: unknown = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
  age: 30,
};

const user: User = UserSchema.parse(rawData);
console.log("Valid user:", user);

// Safe parse returns a result object instead of throwing
const invalidData: unknown = {
  id: -1,
  name: "",
  email: "not-an-email",
};

const result = UserSchema.safeParse(invalidData);
if (!result.success) {
  console.log("Validation errors:", result.error.flatten().fieldErrors);
}
