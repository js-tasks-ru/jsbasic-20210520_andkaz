function sumSalary(salaries) {
  let val = 0
  let arr = [false, NaN, Infinity, -Infinity]


  for (let key in salaries) {
    if (typeof salaries[key] === 'number' || salaries[key] == false ) {
      val += salaries[key]// + salaries[key] + salaries[key]
    }
  }
  return val
}

