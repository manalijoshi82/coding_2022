//Write a function that takes an array as argument. It should return true if all elements in the array are equal. It should return false otherwise.
/*
function isAllEqual(arr) {

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[0]) {
            return false;
        }
        else {
            return true;
        }
    }
}
*/

function allAreEqual(arr) {
    const result = arr.every(element => {
        if (element === arr[0]) {
            return true;
        }
    });
    return result;

}
console.log(allAreEqual([1, 4, 1, 1, 1, 1]));

//Write a function that takes an array of strings as argument. Return the longest string.
/*
function getLongestStr(arr) {
    let max = 0;
    let longest;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length > max) {
            max = arr[i].length;
            longest = arr[i];
            //console.log(longest);
        }
    }
    return longest;
}

console.log(getLongestStr(["is", "my", "name", "and", "I", "love", "coding"]));

//Write a function that takes an array of numbers as argument. It should return the average of the numbers.
/*
function getAvg(arr) {
    var sum = 0;
    var avg = 0;
    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }

    return avg = sum / arr.length;
}

console.log(getAvg([1, 2, 3, 4, 5, 20]));

//Write a function that takes an array of numbers as argument. It should return the sum of the numbers.
/*
function sum(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}

console.log(sum([1, 2, 3, 4, 5]));

//Write a function that takes an array of numbers as argument. It should return an array with the numbers sorted in descending order.
/*
function sortNums(arr) {
    arr.sort(function (a, b) {
        return b - a;
    });
    return arr;
}

function sortAlt(arr1) {
    let result = arr1.sort().reverse();
    return result;
}

console.log(sortAlt([4, 2, 3, 1]));
//console.log(sortNums([4, 2, 3, 1]));

//Write a function that takes an array of strings as argument. Sort the array elements alphabetically. Return the result.
/*
function sort(arrOfStrings) {
    return (arrOfStrings.sort());
}
console.log(sort(['b', 'c', 'd', 'a']));


//Write a function that takes an array of numbers as argument. Return the number of negative values in the array.
/*
function getNegative(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            count++;
        }
    }
    return count;
}

console.log(getNegative([4, -3, 2, "1", 0]));

//Write a function that takes an array (a) as argument. Return the number of elements in a.
/*

function totalElements(arr) {
    return arr.length;
}

console.log(totalElements([4, 3, 2, 1, 0]));

//Write a function that takes an array (a) and a value (b) as argument. The function should remove all elements equal to 'b' from the array. Return the filtered array.
/*

function removeMatch(arr, num) {
    var index = arr.indexOf(num);
    arr.splice(index, 1);
    return arr;
}

console.log(removeMatch([false, '2', 1], false));

//Write a function that takes an array (a) as argument. Extract the first 3 elements of a. Return the resulting array

function removeFirstThree(arr) {
    arr.splice(0, 3);
    return arr;
}

console.log(removeFirstThree([1, 2, 4, 5, 6, 7]));

//Write a function that takes an array (a) as argument. Extract the last 3 elements of 'a'. Return the resulting array

function getLastThree(arr) {
    return arr.splice(arr.length - 3, arr.length);
}

console.log(getLastThree([1, 2, 3, 4, 5, 6, 7]));

//Write a function that takes an array (a) as argument. Remove the first 3 elements of 'a'. Return the result
/*
function removeFirstThree(arr) {

    return arr.splice(0, 3);
}

console.log(removeFirstThree([1, 2, 3, 4, 5, 6]));

//Write a function that takes an array (a) and a value (n) as argument. Return the nth element of 'a'
/*
function getNthElement(arr, num) {
    let result = [];
    //console.log(arr.slice(num));
    return result = arr.slice(num - 1, num);
    arr[num - 1]
    /*
    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) === num) {
            console.log(arr.indexOf(num));
            console.log(arr[i]);
        }
    }
    
}

console.log(getNthElement([10, 9, 8, 7, 6], 4));


//Write a function that takes an array (a) as argument. Extract the last 3 elements of 'a'. Return the resulting array
/*
function lastThree(arr) {
    let resultArr = arr.slice(arr.length - 3);
    return resultArr;
}

console.log(lastThree([1, 2, 3, 4, 5, 6, 7, 8, 9]));
*/