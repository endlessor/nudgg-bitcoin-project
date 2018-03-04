/*
Following the Promise spec:
http://www.ecma-international.org/ecma-262/6.0/#sec-promise.resolve
*/
export const isPromise = (value) => {
  return Promise.resolve(value) === value
}