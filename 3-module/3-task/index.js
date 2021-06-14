function camelize(str) {
  let result = str.split('-').map(
    (item, position) => position == 0 ? item : item[0].toUpperCase() + item.slice(1))
    
return result.join('')
  
}
