// Sometimes you need to constrain the generic
// that gets passed in


// Record is a utility type that constructs an object type whose keys are of type K and values are of type T.
// In this case, we are constraining TObj to be an object type where the keys are strings and the values are numbers.
const getKeyWithHighestValue = <TObj extends Record<string, number>>(obj: TObj): {
  key: keyof TObj
  value: number
} => {
  const keys = Object.keys(obj) as Array<keyof TObj>

  let highestKey: keyof TObj = keys[0]
  let highestValue = obj[highestKey]


  for (const key of keys) {
    if (obj[key] > highestValue) {
      highestKey = key
      highestValue = obj[key]
    }
  }

  return {
    key: highestKey,
    value: highestValue
  }
}


const res = getKeyWithHighestValue({
  a: 1,
  b: 2,
  c: 3
})

const key = res.key // Type is "a" | "b" | "c"
const value = res.value // Type is number