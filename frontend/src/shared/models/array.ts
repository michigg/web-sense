export function reduceArrayToSize (arr: Array<unknown>, maxSize: number) {
  if (arr.length > maxSize) {
    arr.shift()
  }
}
