// CODE

import { expect, it } from "vitest";
import { z } from "zod";

// COMMAND TO RUN THIS TEST IN GITBASH
// $ pnpm dlx vitest run src/zod/2-object-problem.test.ts

const PersonResult = z.object({
  name: z.string(),
  eye_color: z.string()
})

// ? Zod it's like to construct an interface
interface PersonResultType {
  name: string
  eye_color: string
}

export const fetchStarWarsPersonName = async (id: string) => {
  const data = await fetch(
    "https://www.totaltypescript.com/swapi/people/" + id + ".json",
  ).then((res) => res.json());

  console.log(data);
  const parsedData = PersonResult.parse(data);
  console.log(parsedData);

  return parsedData.name;
};

// TESTS

it("Should return the name", async () => {
  expect(await fetchStarWarsPersonName("1")).toEqual("Luke Skywalker");
  expect(await fetchStarWarsPersonName("2")).toEqual("C-3PO");
});


// ? data from https://www.totaltypescript.com/swapi/people/1.json
/* 
{
  name: 'Luke Skywalker',
  height: '172',
  mass: '77',
  hair_color: 'blond',
  skin_color: 'fair',
  eye_color: 'blue',
  birth_year: '19BBY',
  gender: 'male',
  homeworld: 'https://swapi.dev/api/planets/1/',
  films: [
    'https://swapi.dev/api/films/1/',
    'https://swapi.dev/api/films/2/',
    'https://swapi.dev/api/films/3/',
    'https://swapi.dev/api/films/6/'
  ],
  species: [],
  vehicles: [
    'https://swapi.dev/api/vehicles/14/',
    'https://swapi.dev/api/vehicles/30/'
  ],
  starships: [
    'https://swapi.dev/api/starships/12/',
    'https://swapi.dev/api/starships/22/'
  ],
  created: '2014-12-09T13:50:51.644000Z',
  edited: '2014-12-20T21:17:56.891000Z',
  url: 'https://swapi.dev/api/people/1/'
}

*/