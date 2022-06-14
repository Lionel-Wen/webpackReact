export const curryTest = (x) => (y) => {
  console.log({x,y})
  return x + y
}