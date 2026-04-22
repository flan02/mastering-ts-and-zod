// You don't always have to pass the types to a generic function!

const addIdToObject = <T>(obj: T) => {
  return {
    ...obj,
    id: "123"
  };
}

const result2 = addIdToObject({
  firstName: "John",
  lastName: "Doe"
});

console.log(result2.id); // "123"