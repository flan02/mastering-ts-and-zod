const doThing = (ctx: { traceId?: string | undefined }) => { }

const doAnotherThing = (ctx: { traceId?: string | undefined }) => { }

export const mainFunction = (ctx: { traceId?: string | undefined }) => {
  // doThing({ traceId: ctx.traceId })
  // doAnotherThing({ traceId: ctx.traceId })

  // ? Only works if traceId is optional in the parameter of doThing and doAnotherThing
  doThing({})
  doAnotherThing({})
}

mainFunction({}) // can't be called if traceId is not optional
mainFunction({ traceId: undefined })

// Summary: Value optional is less prettier than key optional, but it allows you to omit the property when calling the function. Key optional requires you to provide the property, even if it's undefined.