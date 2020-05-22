function titleCase(str) {
  str = str.toLowerCase();
  let newWord = "";

  for (let i = 0; i < str.length; i++) {
    newWord = newWord + str[i];
    console.log(newWord);

    if (str[i] == " ") {
      newWord = newWord + str[i + 1].toUpperCase();
      i++;
    }
    console.log(newWord);
  }
}

titleCase("I'm a little tea pot");
