"use strict";
//Print all even numbers from 0 – 10
/* 
function printAllEven() {
  for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

printAllEven(); */

//Create a length converter function

function kmToMiles(km) {
  let miles = km * 0.621371;
  return `${km} Kilometers is equal to ${miles} miles`;
}

// console.log(kmToMiles(1));

//Calculate the sum of numbers within an array

function sumOfNums(arr) {
  let sum = 0;
  for (let num in arr) {
    sum = sum + arr[num];
  }
  return sum;
}

// console.log(sumOfNums([2, 3, 4, 5]));

//Create a function that reverses an array

function reverseArr(arr) {
  let newArr = [];
  for (let num = arr.length - 1; num >= 0; num--) {
    newArr.push(arr[num]);
  }
  //   console.log(newArr);
}

reverseArr([2, 3, 4]);

//Sort an array from lowest to highest

function arrSortLowToHigh(arr) {
  let lowestNum = 0;
  let newArr = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < lowestNum) {
      lowestNum = arr[i];
      //   console.log(lowestNum);
    }
    newArr.push(arr[i]);
  }
  return newArr;
}

console.log(arrSortLowToHigh([87, 33, 24, 1, 8, 66, 43]));
