// ? Exclude and Extract work on union types

type Example = "a" | "b" | 1 | 2 | "c" | 999

type Strings_Extracted = Extract<Example, string> // Takes the strings over the numbers
type Numbers_Extracted = Extract<Example, number> // Takes the numbers over the strings


type Strings_Excluded = Exclude<Example, string> // Forgets the strings, takes the numbers
type Numbers_Excluded = Exclude<Example, number> // Forgets the numbers, takes the strings