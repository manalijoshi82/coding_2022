"use strict"; /*
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

/* function uniqueCharacters(string) {
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
*/

/* 
function uniqueCharacters(s) {
  let chars = {};
  let str = s.split("");
  //   console.log(chars);
  for (let i = 0; i < str.length; i++) {
    if (str[i] in chars) {
      console.log(chars);
      return false;
    } else chars[str[i]] = str[i];
  }
  return true;
}

console.log(uniqueCharacters("aple")); */

//Convert Age to Days
/* 
function ageToDays(age) {
  return age * 365;
}
console.log(ageToDays(65));

//Return the Remainder from Two Numbers

function remainder(a, b) {
  return a % b;
}
console.log(remainder(1, 3)); */

//Find the Perimeter of a Rectangle
/* 
function perimeterOfRectangle(a, b) {
  return 2 * (a + b);
}

console.log(perimeterOfRectangle(6, 7));

//Return Something to Me!
function giveMeSomething(str) {
  return `something ${str}`;
}
console.log(giveMeSomething("is better than nothing"));

//Is the Number Less than or Equal to Zero?

function lessThanOrEqualToZero(a) {
  return a <= 0 ? true : false;
}
console.log(lessThanOrEqualToZero(5));

// sum of polygon's internal angles
function sumOfPolygon(a) {
  return (a - 2) * 180;
}

console.log(sumOfPolygon(3));

//Basketball Points

function points(a, b) {
  return a * 2 + b * 3;
}
console.log(points(7, 5));

//Basic Variable Assignment
function nameString(str) {
  let result = `${str}Edabit`;
  return result;
}
console.log(nameString("Matt"));

//Less Than 100?
function lessThan100(a, b) {
  return a + b < 100 ? true : false;
}
console.log(lessThan100(22, 15)); 

function search(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return true;
    }
  }
  return false;
}
console.log(search([1, 2, 3], 4));

function animals(animal1, animal2, animal3) {
  return 2 * animal1 + 4 * animal2 + 4 * animal3;
}

console.log(animals(2, 3, 5));

//Are the Numbers Equal?
function isSameNum(num1, num2) {
  return num1 === num2 ? true : false;
}

console.log(isSameNum(4, 8));

//Football Points

function footballPoints(wins, draw, losses) {
  return 3 * wins + 1 * draw + 0 * losses;
}
console.log(footballPoints(3, 4, 2));

//Convert Hours and Minutes into Seconds

function hoursMinsToSeconds(hrs, mins) {
  return hrs * 60 * 60 + mins * 60;
}
console.log(hoursMinsToSeconds(1, 3));

//Profitable Gamble
function profitableGamble(prob, prize, pay) {
  return prob * prize > pay ? true : false;
}
console.log(profitableGamble(0.2, 50, 9));
 */

//Boolean to String Conversion

/* function boolToString(flag) {
  //   let bool = flag;
  return flag + "foo bar";
}
console.log(boolToString(true)); */

/* 
//Using Arrow Functions
let arrowFunc = (param) => param;

console.log(arrowFunc(3));

//Miserable Parody of a Calculator

function calculator(str) {
  let sum = Number(str.split("+")[0]) + Number(str.split("+")[1]);
  return sum;
}
console.log(calculator("23+4"));

//Two Makes Ten
function makesTen(a, b) {
  return a === 10 || b === 10 || a + b === 10 ? true : false;
}
console.log(makesTen(9, 9));
*/
//Let's Fuel Up!
/* 
function calculateFuel(num) {
  return num * 10;
}

console.log(calculateFuel(15));

//Pair Management

function makePair(num1, num2) {
  return [num1, num2];
}
console.log(makePair(51, 21));

function makeObject(key, val) {
  return {
    key: val,
  };
} */
//Compare Strings by Count of Characters
/* 
function comp(str1, str2) {
  return str1.length === str2.length ? true : false;
}

console.log(comp("ABC", "CD"));

//Is the String Empty?
function isEmpty(str) {
  return str === "" ? true : false;
}
console.log(isEmpty(""));

//Check if an Integer is Divisible By Five

function isDivisibleByFive(num) {
  return num % 5 === 0 ? true : false;
}
console.log(isDivisibleByFive(551)); */

//Multiple of 100
/* function isDivisibleByHundred(num) {
  return num % 100 === 0 ? true : false;
}
console.log(isDivisibleByHundred(1003));

//Recursion: Length of a String

function lengthOfStr(str) {
  return str.length;
}

console.log(lengthOfStr("apple"));

//Divides Evenly
function dividesEvenly(a, b) {
  return a % b == 0 ? true : false;
}
console.log(dividesEvenly(85, 4));
 */

//Return a String as an Integer
/* function strToInt(str) {
  return Number(str);
}
console.log(strToInt("6"));

//Area of a Rectangle
function areaOfRectangle(a, b) {
  return a <= 0 || b <= 0 ? -1 : a * b;
}

console.log(areaOfRectangle(-3, 4));

//Concatenate First and Last Name into One String
function concatName(firstName, lastName) {
  return `${lastName}, ${firstName}`;
}
console.log(concatName("John", "Doe")); */

//Evaluate an Equation
/* function evalEquation(str) {
  return Number(str.split("+")[0]) + Number(str.split("+")[1]);
}

console.log(evalEquation("1+2")); */

// Write a JavaScript program to list the properties of a JavaScript object

let student = {
  name: "manali Joshi",
  sclass: "VI",
  rollno: 12,
};

/* function keys(obj) {
  let keys = [];
  for (let key in obj) {
    keys.push(key);
  }
  return keys;
}

console.log(keys({ name: "manali Joshi", sclass: "VI", rollno: 12 })); */

//Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.

/* console.log(student);
delete student.rollno;
console.log(student); */

//Write a JavaScript program to get the length of a JavaScript object

/* let objectLength = Object.keys(student).length;
console.log(`The length of student object is ${objectLength}`); */

//Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.

/* var library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

for (let i = 0; i < library.length; i++) {
  if (library[i].readingStatus === false) {
    console.log(
      `You still need to read ${library[i].title} by ${library[i].author}`
    );
  } else {
    console.log(`Already read ${library[i].title} by ${library[i].author}`);
  }
}
 */

//Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes

//volume of a cylinder : V = πr2h

/* function volOfCylinder(height, diameter) {
  let radius = diameter / 2;
  let volume = height * Math.pi * radius * radius;
  return volume.toFixed(4);
}

console.log(volOfCylinder(7, 4)); */

//Seven Boom!

/* function sevenBoom(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 7) {
      return "Boom";
    }
  }
  return `There is no 7 in the array`;
}
console.log(sevenBoom([8, 6, 33, 7, 100]));

//Add up the Numbers from a Single Number
function addUp(num) {
  let temp = 1;
  let sum = 0;
  while (temp <= num) {
    sum = sum + temp;
    // console.log(sum);
    temp++;
  }
  return sum;
}

console.log(addUp(13)); */
