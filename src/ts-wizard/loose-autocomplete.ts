type ModelNames = | "gpt-3.5-turbo" | "gpt-4" | "gpt-4-0613" | (string & {})

// ? This way we can still have autocomplete for the known models, but also allow any string for custom models.
const model1: ModelNames = "gpt-4"
const model2: ModelNames = "custom-model" // (string & {})
