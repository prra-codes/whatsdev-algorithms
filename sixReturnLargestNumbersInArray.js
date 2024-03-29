// 6. Return Largest Numbers in Arrays

// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

function largestOfFour(arr) {
  let arrMaxes = [];

  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);

    let maxValue = arr[i][0];
    for (let j = 0; j < arr.length; j++) {
      if (arr[i][j] > maxValue) {
        maxValue = arr[i][j];
      }
    }
    arrMaxes.push(maxValue);
  }

  return arrMaxes;
}

console.log(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);
