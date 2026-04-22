// String Operations

// get length of the string

function getLength(str){
    console.log("Original String " + str);
    console.log("Length: " + str.length);
}

getLength("Osheen Jain")


function findIndexOf(str , target){
    console.log("Original String: " + str);
    console.log("Index of " + target + ": " + str.indexOf(target));
}

findIndexOf("Osheen Jain" , "Jain");

function getLastIndexOf(str , target){
    console.log("Original String: " + str);
    console.log("Last index of " + target + ": " + str.lastIndexOf(target));
}

getLastIndexOf("Osheen Jain Jain Jain" , "Jain");


function getSlice(str , start , end){
    console.log("Original String: " + str);
    console.log("Sliced String: " + str.slice(start , end));
}

getSlice("Osheen Jain. I am a Zero Coder." , 13 , 31);

function getSubString(str , start , end){
    console.log("Original String: " + str);
    console.log("Substring: " + str.substring(start  , end));
}

getSubString("Osheen Jain" , 0 , 6);

function replaceString(str , target , replacedBy){
    console.log("Original String: " + str);
    console.log("Replaced String: " + str.replace(target , replacedBy));
}

replaceString("Hello Osheen Jain" , "Osheen Jain" , "JavaScript");

function splitString(str , separator){
    console.log("Original String: " + str);
    console.log("After Splitting: " + str.split(separator));
}

splitString("Osheen Jain" , " ");

function trimString(str){
    console.log("Original String: " + str);
    console.log("After Trim: " + str.trim());
}

trimString("     Osheen                     Jain             ");
// Only Trim the leading and trailing spaces from the string

function stringToUpperCase(str){
    console.log("Original String: " + str);
    console.log("To Upper Case: " + str.toUpperCase());
}

stringToUpperCase("Osheen Jain");

function stringToLowercase(str){
    console.log("Original String: " + str);
    console.log("To Lower Case: " + str.toLowerCase());
}

stringToLowercase("OsheEn JAiN");



// Number Operations

// ParseInt

console.log(parseInt("54532"));
console.log(parseInt("54532njbhiphfrip")); // will take the first int val
console.log(parseInt("jefohipfhif54532"));// will give NaN
console.log(parseInt("jefohipfhif54532ndfknnpeneigp"));// will give NaN


// PerseFloat




// Array

// push
// pop
// shift (pop from front)
// unshift(push from the front)
// concat (const arr3 = arr1.concat(arr2))



// forEach loop for the array