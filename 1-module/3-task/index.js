function ucFirst(str) {
    if (str == "") {
    console.log("value is empty");
  } else {
    let word = str[0].toUpperCase() + str.slice(1);
    console.log(word);
  }
}

