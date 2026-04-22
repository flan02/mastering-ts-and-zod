
const getValueWithUnionType = <TObj>(obj: TObj, key: keyof TObj) => { }
// result1 is inferred as any, which is not ideal
// Will be treated as a union of all possible types of the values in TObj
// number | string | boolean | (string | number)[] in this case


const getValueWithSpecificType = <TObj, TKey extends keyof TObj>(obj: TObj, key: TKey) => {
  if (key === 'bad') {
    throw new Error("Don't access the bad key!")
  }
  return obj[key]
}

const result1 = getValueWithSpecificType({
  a: 1,
  b: "some-string",
  c: true,
  d: [1, 2, "pt"]
}, "d")

console.log(result1); // result1 is inferred as (string | number)[]

