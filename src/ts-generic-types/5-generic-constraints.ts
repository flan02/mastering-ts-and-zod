// We are using the `extends` keyword to constrain the type parameter `T` to be 
// a function type that takes any arguments and returns any type. 
// This allows us to safely use `ReturnType<T>` and `Awaited<ReturnType<T>>` 
// without worrying about type errors.

type GetPromiseReturnType<T extends (...args: any) => any> = Awaited<ReturnType<T>>
// type GetPromiseReturnType<T extends boolean> = Awaited<ReturnType<T>> // <T extends [type]>

type res = GetPromiseReturnType<() => Promise<{
  firstName: string
  lastName: string
  id: string
}>
>

// @ts-expect-error
type ErrorLine = GetPromiseReturnType<string>