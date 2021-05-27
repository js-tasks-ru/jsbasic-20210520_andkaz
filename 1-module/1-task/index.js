function factorial(n) {
  // let numValue = 1
  //   while (n) {
  //       numValue *= n--
  //   }
  //   return numValue


  let numValue = 1

  for (let i = 0; i < n; i++) {
    numValue *= (n - i)
  }
  return numValue
}

factorial(0); // 1
factorial(1); // 1
factorial(3); // 6
factorial(5); // 120



