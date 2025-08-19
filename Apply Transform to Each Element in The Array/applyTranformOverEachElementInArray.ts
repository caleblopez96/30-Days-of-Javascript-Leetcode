function mapped2(
  arr: number[],
  fn: (n: number, i: number) => number
): number[] {
  for (var i = 0; i < arr.length; i++) {
    arr[i] = fn(arr[i], i);
  }
  return arr;
}
