"use strict";

function selectionSort(arr) {
  let workingArray = arr.slice(); //DC: don't mutate
  let smallestSoFar;

  for (let i = 0; i < workingArray.length; i++) {
    // set a tentative value for where
    // the smallest element in the array is
    // starting with i
    smallestSoFar = i;

    // for each index from i to the end
    // compare values until you find the
    // ACTUAL smallest value
    for (let j = i; j < workingArray.length; j++) {
      if (workingArray[j] < workingArray[smallestSoFar]) {
        smallestSoFar = j;
      }
    }

    // finally, still in the outer loop
    // swap the smallest element into
    // position i. You now have
    // one more sorted element at i.
    let temp = workingArray[i];
    workingArray[i] = workingArray[smallestSoFar];
    workingArray[smallestSoFar] = temp;
  }
  return workingArray;
}

let myArray = [23, 42, 4, 16, 8, 15, -1];
let mySortedArray = selectionSort(myArray);
console.log("Original array: " + myArray);
console.log("Sorted array: " + mySortedArray);
