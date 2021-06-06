function makeFriendsList(friends) {
  let ul = document.createElement("ul")
  for (let el of friends) {
    let name = `<li>${el.firstName} ${el.lastName}</li>`
    ul.innerHTML += name
    }
  return ul
}
