// ? Exclude and Extract work on union types

type AlbumState =
  | {
    type: "released"
    releaseDate: string
  }
  | {
    type: "recording"
    studio: string
  }
  | {
    type: "mixing"
    engineer: string
  }


// We joined two types together, and then we excluded the one with type "released"
type NotReleased = Exclude<AlbumState, { type: "released" }>

// (we can exclude various properties at once)
type notSelected = { type: "released" } | { studio: string } // Alternative way to write the type we want to exclude
type NotReleased2 = Exclude<AlbumState, { type: "released" } | { studio: string }>
type NotReleased2Alt = Exclude<AlbumState, notSelected> 