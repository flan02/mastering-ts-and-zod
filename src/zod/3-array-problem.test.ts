// CODE

import { expect, it } from "vitest";
import { z } from "zod";

const StarWarsPerson = z.object({
  name: z.string(),
});

const StarWarsPeopleResults = z.object({
  results: z.array(StarWarsPerson), // z.array(z.any())
})

export const fetchStarWarsPeople = async () => {
  const data = await fetch(
    "https://swapi.py4e.com/api/people",
  ).then((res) => res.json());

  const parsedData = StarWarsPeopleResults.parse(data);
  console.log(parsedData);

  return parsedData.results;
};

// TESTS

it("Should return the name", async () => {
  expect((await fetchStarWarsPeople())[0]).toEqual({
    name: "Luke Skywalker",
  });
});

// mock data from the API
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
      homeworld: 'https://swapi.py4e.com/api/planets/1/',
      films: [Array],
      species: [Array],
      vehicles: [Array],
      starships: [Array],
      created: '2014-12-09T13:50:51.644000Z',
      edited: '2014-12-20T21:17:56.891000Z',
      url: 'https://swapi.py4e.com/api/people/1/'
    },

*/