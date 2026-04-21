type ComplexType = {
  a: string
  b: number
} & {
  c: boolean
} & {
  d: string[]
}

type ComplexTypePlus = {
  a: string
  b: number
} & Omit<{ c: boolean } & Record<'d', string[]>, 'c'>

type Prettify<T> = {
  [K in keyof T]: T[K]
} & {}


type showMe = ComplexTypePlus

type showMePrettified = Prettify<ComplexTypePlus>