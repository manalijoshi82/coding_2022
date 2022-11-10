//Write a function that takes a string as argument. As it is, the string has no meaning. Increment each letter to the next letter in the alphabet. Return the correct word
function getNextChar(str) {
    var word = str.split("");
    var result = [];
    for (var i = 0; i < word.length; i++) {
        result.push((String.fromCharCode(word[i].charCodeAt(word[i]) + 1)));
    }
    return result.toString();;

}

console.log(getNextChar("manali")); // nbobmj

/*
function getNextChar(str) {
    let alphabets = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let word = str.split("");
    let result = [];
    for (let i = 0; i < alphabets.length; i++) {
        for (let j = 0; j < word.length; j++) {
            if (word[j] === alphabets[i]) {
                result.push(alphabets[i] + 1);
            }
        }
    }
    return result;
}

console.log(getNextChar("manali"));// nbobmj


//Insert character after every n characters (backwards)
//Write a function that takes two strings (a and b) as arguments. Beginning at the end of 'a', insert 'b' after every 3rd character of 'a'. Return the resulting string.
/*
function insertChar(str, char) {
    let resultStr = "";
    let index = 0;
    for (let i = str.length - 1; i > -1; i--) {
        index++;
        resultStr = str[i] + resultStr;
        //console.log(resultStr);
        if (index % 3 === 0) {
            resultStr = char + resultStr;
        }
    }
    return resultStr;
}

console.log(insertChar("Ilovecoding", "."));


/*-----------------------------------------------------------*/

// adding new lines to test

/*
function isPrime(num) {
    let isPrime = true;
    if (num == 1) {
        console.log("1 is neither prime nor composite");
    }
    else if (num > 1) {
        for (let i = 2; i < num / 2; i++) {
            if (num % i == 0) {
                isPrime = false;
            }
        }
    }

    if (!isPrime) {
        return nextPrimeNum(num + 1);
    }
    else {
        return (num + " is a prime number");
    }
}

function nextPrimeNum(num) { // return the next higher prime number

    let nextPrime = isPrime(num);
    return nextPrime;
}

console.log(isPrime(888));
/*-----------------------------------------------------------*/





/*
function splitToDigits(num) {
    return (num.toString().split("").map(Number));
}

console.log(splitToDigits(10));

/*
function roundNum(a) {
    return a.toFixed(2);
}

console.log(roundNum(2.12397));

/*
function operators(a, b) {
    if (a < b) {
        return a / b;
    }
    return a * b;

}

console.log(operators(50, 4));

/*
function isWholeNum(a) {
    if (a == Math.floor(a)) {
        return ("Whole Number");
    }
    return "Decimal number";
}

console.log(isWholeNum(10));



/*-----------------------------------------------------------*/
/*

function occurance(a, b) {
    var result = b.split("");

    var count = 0;
    for (var i = 0; i < result.length; i++) {
        if ((result[i]) == a) {
            count++;
            //console.log(count);
        }
    }
    return count;
}

console.log(occurance("m", "how many times does the character occur in this sentence?"));


function occur(a, b) {
    let count = b.split(a).length - 1;
    return count;
}

console.log(occur("h", "how many times does the character occur in this sentence?"));

/*-----------------------------------------------------------*/








/*
function isEven(num) {
    if (num % 2 === 0) {
        return true;
    }
    return false;
}

console.log(isEven(20));

/*function concat(a, b) {
    if (a.includes(b)) {
        return b + a;
    }

    return a + b;
}
console.log(concat("java", "script"));

/*
function getOperationResults(a, b, c, d, e, f) {
    return Math.pow(((((a + b) - c) * d) / e), f);
}

console.log(getOperationResults(6, 2, 1, 4, 2, 3));

/*function getPercentage(num1, num2) {
    return (num1 * num2 / 100);
}

console.log(getPercentage(500, 25));

/*
function removeLastThree(str) {
    return str.slice(0, str.length - 3);
}

console.log(removeLastThree("abcdefg"));

/*

function getHalf(str) {
    return str.slice(0, str.length / 2);
}

console.log(getHalf("abcdefgh"));
/*function getIndex(str) {
    return str.indexOf("is");
}

console.log(getIndex("praise"));

/*
function myFunction(str) {
    var result = str.slice(0, 3);
    return result;
}

console.log(myFunction("Manali"));
/*
function myFunction(str) {
    var result = str.slice(str.length - 3);
    return result;
}

console.log(myFunction("Manali"));

/*
function myFunction(str, n) {
    var char = str.charAt(n);
    return char;
}

console.log(myFunction("This", 2));

/*
function myFunction(a) {
    return typeof (a);
}

console.log(myFunction(56));

/*

function myFunction(a, b) {
    if (a === b && typeof (a) === typeof (b)) {
        return true;
    }
    return false;
}

console.log(myFunction(45, "str"));



/*

function myFunction(a) {
    var result = a.slice(0, 3);
    return result;
}

console.log(myFunction([1, 2, 3, 4, 5]));
*/ 