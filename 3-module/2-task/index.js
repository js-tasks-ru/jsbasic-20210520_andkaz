function filterRange(arr, a, b) {
  let filteredArr = arr.filter((el) => a <= el && el <= b)
  return filteredArr
}
