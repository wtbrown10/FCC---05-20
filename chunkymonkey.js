function chunkArrayInGroups(arr, size) {
  let chunkArray = [];
  let tempArray = [...arr]; // spread operator

  for (let i = 0; i < arr.length / size; i++) {
    chunkArray.push(tempArray.splice(0, size));
  }
  console.log(chunkArray);
}

chunkArrayInGroups([7, 3, 11, 21, 9], 2);
