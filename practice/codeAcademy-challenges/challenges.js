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

// function kmToMiles(km) {
//   let miles = km * 0.621371;
//   return `${km} Kilometers is equal to ${miles} miles`;
// }

// console.log(kmToMiles(1));

//Calculate the sum of numbers within an array

// function sumOfNums(arr) {
//   let sum = 0;
//   for (let num in arr) {
//     sum = sum + arr[num];
//   }
//   return sum;
// }

// // console.log(sumOfNums([2, 3, 4, 5]));

// //Create a function that reverses an array

// function reverseArr(arr) {
//   let newArr = [];
//   for (let num = arr.length - 1; num >= 0; num--) {
//     newArr.push(arr[num]);
//   }
//   //   console.log(newArr);
// }

// reverseArr([2, 3, 4]);

//Sort an array from lowest to highest

// function arrSortLowToHigh(arr) {
//   let lowestNum = arr[0];
//   let newArr = [];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < lowestNum) {
//       lowestNum = arr[i];
//     }
//     let index = arr.indexOf(lowestNum);
//     // console.log(index);
//     let elmRemoved = arr.splice(index, 1);
//     newArr.push(elmRemoved);
//     console.log(elmRemoved);
//   }
//   //   console.log(arr);
//   return newArr;
// }

// console.log(arrSortLowToHigh([87, 33, 24, 8, 66, 43]));

// function arrSortLowToHigh(arr) {
//   let newArr = [];
//   while (arr.length > 0) {
//     let lowestNum = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i] < lowestNum) {
//         lowestNum = arr[i];
//       }
//     }
//     console.log("lowest number is " + lowestNum);
//     let index = arr.indexOf(lowestNum);
//     // console.log(index);
//     let elmToBeRemoved = arr.splice(index, 1);
//     newArr.push(elmToBeRemoved);
//     //console.log(arr);
//   }
//   return newArr;
// }
// console.log(arrSortLowToHigh([87, 33, 24, 8, 66, 3]));
/* 
function arrSortHighToLow(arr) {
  let newArr = [];
  while (arr.length > 0) {
    let highestNum = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > highestNum) {
        highestNum = arr[i];
      }
    }
    console.log(`highest num is ${highestNum}`);
    let index = arr.indexOf(highestNum);
    let elmToBeRemoved = arr.splice(index, 1);
    newArr.push(elmToBeRemoved);
  }
  return newArr;
}

console.log(arrSortHighToLow([87, 33, 24, 8, 66, 3])); */

//Create a function that filters out negative numbers
/* 
function removeNegative(arr) {
  let positiveArr = [];
  for (let num = 0; num < arr.length; num++) {
    if (arr[num] < 0) {
      let index = arr.indexOf(arr[num]);
      arr.splice(index, 1);
    }
  }
  return arr;
}

console.log(removeNegative([3, -5, 6, 22, -67, 30]));

//Remove the spaces found in a string

function removeSpaces(str) {
  return str.split(" ").join("");
}

console.log(
  removeSpaces(
    `My name is Manali and I love how powerful coding makes me feel!`
  )
); */

// Return a Boolean if a number is divisible by 10
/* 
function isDivisibleByTen(number) {
  if (number % 10 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isDivisibleByTen(128)); */

//Return the number of vowels in a string
/* 
function numOfVowels(str) {
  let vowelsCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str.charAt(i) === "a" ||
      str.charAt(i) === "e" ||
      str.charAt(i) === "i" ||
      str.charAt(i) === "o" ||
      str.charAt(i) === "u"
    ) {
      vowelsCount++;
    }
  }
  return `There are ${vowelsCount} vowels in ${str}.`;
}

console.log(numOfVowels("manali")); */

/* function flattenArr(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === Object) {
      for (let j = 0; j < arr[i].length; j++) {
        newArr.push(arr[i][j]);
      }
    } else newArr.push(arr[i]);
  }
  return newArr;
}
console.log(flattenArr([1, 2, [3, 4, 5], 6, [7, 8], 9])); */

/* function flattenArr(arr) {
  return [].concat(...arr);
}

console.log(flattenArr([1, 2, [3, 4, 5], 6, [7, 8], 9])); */

/* function flattenArr(arr) {
  return [].concat.apply([], arr);
}

console.log(flattenArr([1, 2, [3, 4, 5], 6, [7, 8], 9])); */

function uniqueCharacters(string) {
  let chars = string.split("").sort();
  console.log(chars);
  for (let i = 0; i < chars.length; i++) {
    if (chars[i] === chars[i - 1]) {
      return false;
    }
  }
  return true;
}

console.log(uniqueCharacters("apple"));
