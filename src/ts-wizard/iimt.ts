type Actions = {
  login: {
    username: string
    password: string
  }
  logout: {
    reason: string
  }
  update: {
    id: string
    data: unknown
  }
}


type ActionAsDiscoUnion = {
  // This is the key part: we iterate over the keys of Actions and create a new type for each action
  [K in keyof Actions]: Prettify<{ type: K } & Actions[K]> // We also include the original properties of each action
}[keyof Actions] // (optional) Finally, we take the union of all these types