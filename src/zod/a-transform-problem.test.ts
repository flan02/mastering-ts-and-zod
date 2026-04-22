// CODE

import { expect, it } from "vitest";
import { z } from "zod";

// * We can concatenate multiple transforms together, and they will be executed in order. 
// * This allows us to create complex transformations on our data,
// * while still keeping our code clean and readable.

const StarWarsPerson = z
  .object({
    // name: z.string(),
    name: z.string().transform((name) => `Hello, my name is ${name}`),
  })
  .transform((person) => ({
    ...person,
    nameAsArray: person.name.split(" "),
  }));

const StarWarsPeopleResults = z.object({
  results: z.array(StarWarsPerson),
});

export const fetchStarWarsPeople = async () => {
  const data = await fetch(
    "https://www.totaltypescript.com/swapi/people.json",
  ).then((res) => res.json());

  const parsedData = StarWarsPeopleResults.parse(data);

  return parsedData.results;
};

// TESTS

it("Should resolve the name and nameAsArray", async () => {
  expect((await fetchStarWarsPeople())[0]).toEqual({
    name: "Luke Skywalker",
    nameAsArray: ["Luke", "Skywalker"],
  });
});
