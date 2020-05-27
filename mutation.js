function mutation(arr) {
  let word1 = arr[0].split("");
  let word2 = arr[1].split("");
  let newWord = "";

  let count = 0;
  let answer = Boolean(count === word2.length);
  let answer1 = Boolean(newWord === arr[1]);

  for (let i = 0; i < word1.length; i++) {
    for (let j = 0; j < word2.length; j++) {
      if (word2[j] == word1[i]) {
        count++;
        newWord += word2[j];
        console.log(newWord);
        console.log(`${word2[j]} : ${word1[i]} ${count}`);
        if (newWord === arr[1]) {
          console.log(answer1);
        }
      }
    }
  }
  console.log(answer);
}

mutation(["hello", "hey"]);
