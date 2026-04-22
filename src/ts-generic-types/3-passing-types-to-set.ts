// You can pass these type parameters to
// other parts of JS, like Set and Map

const set = new Set<number>() // by default, set is unknown

// What does a set do? Is this an array or Object? 
// No, it's a set! It only allows unique values,
// and it has some methods on it that are different to arrays and objects
set.add(1)

// We want this to error!
set.add("C")