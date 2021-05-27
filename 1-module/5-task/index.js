function truncate(str, maxlength) {
  let dots = '…' 

  if (str.length >= maxlength) {
    return str.slice(0, maxlength-1) + dots
  } else if (str.length < maxlength) {
    return str
  } 
}


