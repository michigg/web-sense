export function reduceArrayToSize (arr: Array<any>, maxSize: number) {
  if (arr.length > maxSize) {
    arr.shift()
  }
}
