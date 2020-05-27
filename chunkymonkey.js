function chunkArrayInGroups(arr, size) {
  let chunkArray = [];
  let tempArray = [...arr]; // spread operator

  for (let i = 0; i < arr.length / size; i++) {
    chunkArray.push(tempArray.splice(0, size));
  }
  console.log(chunkArray);
}

chunkArrayInGroups([7, 3, 11, 21, 9], 2);

function chunkArrayInGroups02(arr, size) {
  const chunkArray = [];
  let i = 0;
  while (i < arr.length) {
    chunkArray.push(arr.slice(i, i + size));
    i += size;
  }
  console.log(chunkArray);
}

chunkArrayInGroups02([7, 3, 11, 21, 9, 4, 6, 9, 8, 12, 77, 69, 88], 3);
