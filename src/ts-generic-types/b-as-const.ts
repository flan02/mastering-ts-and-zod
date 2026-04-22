// $ TS specific syntax

const routes = {
  home: "/",
  about: "/about",
  contact: "/contact",
  newUser: "/users/new",
  deep: {
    nested: "/deep/nested"
  }
} as const // TODO: 'as const' makes the properties of routes readonly and their types are inferred as literal types, not string


type RoutesCommon = (typeof routes)[keyof typeof routes] // Type is '/' | '/about' | '/contact' | '/deep/nested'

type RouteKeys = keyof typeof routes
type RoutesFashion = (typeof routes)[RouteKeys]



// ? Now thanks to 'as const', we can't change the value of our properties
routes.home = "/home" // Error: Cannot assign to 'home' because it is a read-only property
routes.deep.nested = "/deep/nested/updated" // Error: Cannot assign to 'nested' because it is a read-only property

// const goToRoute = (route: '/' | 'about' | '/contact' | '/deep/nested') => { }
const goToRoute = (route: RoutesFashion) => { }

goToRoute('/') // OK

// Since routes.home can be reassigned, it is inferred as string, not the literal type '/'
// route.home = '/users'
goToRoute(routes.home) // ! Yell at me because routes.home is inferred as string, not the literal type '/'
goToRoute(routes.newUser)

// 'as const' is different from 'as'

// Alternative to enums

// Return value of hooks 'as const'