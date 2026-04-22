//export const createSet = <T>() => {
export const createSet = <T = string>() => {
  return new Set<T>()
}

const numberSet = createSet<number>()
const stringSet = createSet<string>()

// if not define a default parameter, this will be inferred as Set<unknown>, which is not ideal
const otherStringSet = createSet() // type unknown 
