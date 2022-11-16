//Write a function that takes an object as argument. It should return an object with all original object properties. except for the property with key 'b'
/*-------------------------------------------------------------
function getOriginalProps(obj) {
    //let newObj = {};
    for (key in obj) {
        if (obj.hasOwnProperty === b) {
            delete [b];
            //console.log(newObj.key);
        }
        return obj;
    }

}

console.log(getOriginalProps({ a: 1, b: 7, c: 3 }));
/*-------------------------------------------------------------
//Write a function that takes an object (a) as argument. Return the sum of all object values.
/*
function getSum(obj) {
    var sum = 0;
    for (key in obj) {
        sum = sum + obj[key];
    }
    return sum;
}

console.log(getSum({ w: 15, x: 22, y: 13 }));

//Write a function that takes an object as argument. In some cases the object contains other objects with some deeply nested properties. Return the property 'b' of object 'a' inside the original object if it exists. If not, return undefined
/*-------------------------------------------------------------
function getVal(obj) {
    if (obj.a !== undefined && obj.a.b !== undefined) {
        return obj.b;
    }
    return undefined;
}

console.log(getVal({ a: { b: { c: 3 } } }));
/*-------------------------------------------------------------
//Write a function that takes an object (a) as argument. Return an array with all object keys.
/*
function getArray(obj) {
    const keys = [];
    for (const key in obj) {
        keys.push(key);
    }
    return keys;

    //return Object.keys(obj);
}

console.log(getArray({ w: 15, x: 22, y: 13 }));

//Write a function that takes two arrays (a and b) as arguments. Create an object that has properties with keys 'a' and corresponding values 'b'. Return the object.
/*
function getObj(arr1, arr2) {
    const setObj = new Object();
    for (var i = 0; i < arr1.length; i++) {
        setObj[arr1[i]] = arr2[i];
    }
    return setObj;
}

console.log(getObj([1, 'b'], ['a', 2]));

//Write a function that takes two strings (a and b) as arguments. Create an object that has a property with key 'a' and a value of 'b'. Return the object.
/*
function getObj(a, b) {
    const newObj = new Object();
    newObj[a] = b;

    return newObj;
}

console.log(getObj('b', 'w'));
//Write a function that takes a string as argument. Create an object that has a property with key 'key' and a value equal to the string. Return the object.
/*
function getObj(str) {
    const value = new Object();
    value.key = str;

    return value;
}

console.log(getObj('z'));

//Write a function that takes an object (a) and a string (b) as argument. Return true if the object has a property with key 'b', but only if it has a truthy value. In other words, it should not be null or undefined or false. Return false otherwise.
/*
function ifTruthy(obj, str) {
    if (obj[str] !== null && obj[str] !== undefined && obj[str] !== false) {
        return true;
    }
    return false;
}

console.log(ifTruthy({ x: 'a', b: 'b', z: false }, 'z'));

//Write a function that takes an object (a) and a string (b) as argument. Return true if the object has a property with key 'b'. Return false otherwise. Tipp: test case 3 is a bit tricky because the value of property 'z' is undefined. But the property itself exists.
/*
function hasProp(obj, str) {
    return obj.hasOwnProperty(str);
}

console.log(hasProp({ x: 'a', y: 'b', z: undefined }, 'z'));


//Write a function that takes an object with two properties and a string as arguments. It should return the value of the property with key equal to the value of the string
/*
function getVal(obj, key) {
    return obj[key];
}

console.log(getVal({ continent: 'Asia', country: 'Japan' }, 'continent'));

//Write a function that takes an object with two properties as argument. It should return the value of the property with key 'prop-2'. Tipp: you might want to use the square brackets property accessor
/*
function getProp(obj) {
    return obj['prop-2'];
}

console.log(getProp({ one: 1, 'prop-2': 2 }));

//Write a function that takes an object with two properties as argument. It should return the value of the property with key country.
/*
function getCountry(obj) {
    return obj.country;
}

console.log(getCountry({ continent: 'Asia', country: 'Japan' }));

//Write a function that takes an array of strings as argument. Return the longest string.
/*
function longestString(arr) {
    let length = 0;
    let longest;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > length) {
            length = arr[i].length;
            longest = arr[i];
        }
    }
    return longest;
}

console.log(longestString(['I', 'need', 'candy']));

//Write a function that takes an array of numbers as argument. It should return the average of the numbers.
/*
function getAverage(arr) {
    let sum = 0;
    let avg = 0;
    for (let num of arr) {
        sum = sum + num;
    }
    return avg = sum / arr.length;
}

console.log(getAverage([10, 100, 40]));

//Write a function that takes an array of numbers as argument. It should return the sum of the numbers.
/*
function getTotal(arr) {
    let sum = 0;
    for (let i of arr) {
        sum = sum + i;
    }
    return sum;
}


console.log(getTotal([10, 100, 40]));
//Write a function that takes two arrays as arguments. Merge both arrays and remove duplicate values. Sort the merge result in ascending order. Return the resulting array
/*
function getSortedArr(arr1, arr2) {
    let arr = arr1.concat(arr2); //[1,2,3,3,4,5]
    let uniqueArr = [];

    for (let i of arr) {
        if (uniqueArr.indexOf(i) === -1) {
            uniqueArr.push(i);
        }

    }
    return uniqueArr.sort(function (a, b) {
        return b - a;
    });
}

console.log(getSortedArr([1, 1, 3], [3, 4, 5]));

//Write a function that takes arguments an arbitrary number of arrays. It should return an array containing the values of all arrays.
/*
function getArr(...arrays) {
    let result = [];
    for (let element in arrays) {


        console.log($, { element });
    }
    //return result;
}

console.log(getArr(['a', 'b', 'c'], [4, 5, 6]));


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
/*
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