function mutation(arr) {
  let word1 = arr[0].split("");
  let word2 = arr[1].split("");

  let count = 0;
  for (let i = 0; i < word1.length; i++) {
    for (let j = 0; j < word2.length; j++) {
      if (word2[j] == word1[i]) {
        count++;
      }
    }
  }
  let answer = Boolean(count === word2.length);
  console.log(answer);
}

mutation(["animal", "pizza"]);
