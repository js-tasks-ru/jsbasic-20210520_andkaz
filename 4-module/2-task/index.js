function makeDiagonalRed(table) {
  // let table = document.querySelector('table')
  for (let i = 0; i < table.rows.length; i++ ) {
      let tableElem = table.rows[i]
      tableElem.cells[i].style.backgroundColor = 'red'
      
  }
}
