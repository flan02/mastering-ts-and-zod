type User = {
  id: string
  name: string
  age: number
}

// ? We can create a new type by transforming the properties of User using a mapped type.
type UserTransformed = {
  [K in keyof User]: User[K]
}

// ? We can also make all properties optional and readonly if we want.
type UserTransformed2 = {
  readonly [K in keyof User]?: User[K]
}

// ? We can even rename the keys using the 'as' keyword in mapped types.
type UserTransformed3 = {
  [K in keyof User as Capitalize<K>]: User[K]
}

// ? We can combine both optional and renamed keys in the same mapped type.
type UserTransformed4 = {
  [K in keyof User as `get${Capitalize<K>}`]: User[K]
}

// ? This way we can create a type that has getter methods for each property of User.
type UserTransformed5 = {
  [K in keyof User as `get${Capitalize<K>}`]: () => User[K]
}
