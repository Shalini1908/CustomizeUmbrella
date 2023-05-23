function Fly(arr) {
  const N = arr.length;

  let count = 0;
  let currentFuel = arr[0];
  let max = 0;

  for (let i = 1; i < N; i++) {
    if (i <= currentFuel) {
      if (i > max) {
        max = i;
      }
    } else {
      if (max === 0) {
        return -1;
      }
      count++;
      currentFuel = arr[max];
      max = i;
    }
  }

  return count;
}

const arr = [2, 1, 2, 3, 1];
console.log(Fly(arr)); // Output: 2

const arr2 = [1, 6, 3, 4, 5, 0, 0, 0, 6];
console.log(Fly(arr2)); //Output 3