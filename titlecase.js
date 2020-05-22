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

// second way to solve

function titleCase(str) {
  let array = str.toLowerCase().split(" ");
  let newSentence = "";

  for (let i = 0; i < array.length; i++) {
    newSentence += array[i][0].toUpperCase() + array[i].substr(1) + " ";
  }
  str = newSentence;
  return str;
}

console.log(titleCase("I'm a little tea pot"));

// third way to solve

function titleCase(str) {
    let array = str.toLowerCase().split(' ');
​
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i][0].toUpperCase() + array[i].substr(1);
        }
        str = array.join(' ');
        return str;
    }
  console.log(titleCase("I'm a little tea pot"));