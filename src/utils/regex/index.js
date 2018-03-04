// Using underscore's duck typing solution
export const isRegex = (obj) => {
  return !!(
    obj &&
    obj.test &&
    obj.exec &&
    (
      obj.ignoreCase ||
      obj.ignoreCase === false
    )
  )
}