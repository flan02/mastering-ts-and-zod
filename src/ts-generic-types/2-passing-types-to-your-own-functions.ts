// You can create functions with a type helper
// mapped over the top, and pass the type to them
// manually...

const doingFetch = <TData>(url: string): Promise<TData> => {
  return fetch(url).then((res) => res.json() as Promise<TData>)
}

doingFetch<{ firstName: string; lastName: string }>("api/endpoint").then(res => {
  console.log(res)
})

// More wordy way to do the same thing, but it works too
type USER_DATA = { firstName: string, lastName: string }

doingFetch<USER_DATA>("api/endpoint").then(res => {
  console.log(res)
})