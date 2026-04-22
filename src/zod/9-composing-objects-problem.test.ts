import { z } from "zod";
import { Equal, Expect } from "./helpers/type-utils";


/**
 * 🕵️‍♂️ Refactor this code below to reduce the duplication,
 * while also making sure the cases don't go red!
 */

// ! Merge in zod is actually deprecated (2026), use .extend instead.

const Id = z.uuid();

const ObjectWithId = z.object({
  id: z.uuid(),
  createdAt: z.date(),
});


const User = z.object({
  id: Id,
  name: z.string(),
});

const Post = z.object({
  id: Id,
  title: z.string(),
  body: z.string(),
});

const Comment = z.object({
  id: Id,
  text: z.string(),
});

// TODO: We are extending the original object
const Payment = ObjectWithId.extend({
  title: z.string(),
  body: z.string(),
});

type cases = [
  Expect<Equal<z.infer<typeof Comment>, { id: string; text: string }>>,
  Expect<
    Equal<z.infer<typeof Post>, { id: string; title: string; body: string }>
  >,
  Expect<Equal<z.infer<typeof User>, { id: string; name: string }>>,
  Expect<Equal<z.infer<typeof Payment>, { id: string; title: string; body: string }>>,
];
