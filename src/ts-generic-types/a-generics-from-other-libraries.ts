import { z } from "zod"

const makeZodSafeFetch = <TData>(
  url: string,
  schema: z.Schema<TData>
): Promise<TData> => {
  return fetch(url)
    .then((res) => res.json())
    .then((res) => {
      return schema.parse(res)
    })
}

const result3 = makeZodSafeFetch("/api/endpoint", z.object({
  firstName: z.string(),
  lastName: z.string(),
  id: z.string()
})).then((res) => {
  console.log(res.lastName) // res is inferred as { firstName: string, lastName: string, id: string}
})

console.log(result3); // result3 is inferred as Promise<{ firstName: string, lastName: string, id: string}>