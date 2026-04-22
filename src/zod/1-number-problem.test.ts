
import { expect, it } from "vitest";
import { z } from "zod";
//       ^ 🕵️‍♂️

// COMMAND TO RUN THIS TEST IN GITBASH
// $ pnpm dlx vitest run src/zod/1-number-problem.test.ts

const numberParser = z.number()


export const toString = (num: unknown) => {
  const parsed = numberParser.parse(num)
  return String(parsed)
};

// TESTS

it("Should throw a runtime error when called with not a number", () => {
  expect(() => toString("123")).toThrow(
    "Invalid input: expected number, received string"
  );
});

it("Should return a string when called with a number", () => {
  expect(toString(1)).toBeTypeOf("string");
});