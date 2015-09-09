// Basic Algorithm Scripting
function meetBonfire(argument) {
  // Good luck!
  console.log("you can read this function's argument in the developer tools", argument);

  return true;
}



meetBonfire("You can do this!");

// Reverse of a word
function reverseString(str) {
  splitString = str.split('');
  reverseSplitString = splitString.reverse();
  str =reverseSplitString.join('');
  return str;
 }

reverseString('hello');

// Refactored Code
function reverseString(str) {
	str = str.split('').reverse().join('');
	return str;
}


// Factorisation
function factorialise(num) {
 var factorial =1;
 for(var i=1; i<=num; i++){
 	factorial *= num;
 	return factorial;
 }
}
factorialise(20);

// Check for Palindrome
function palindrome(str) {
  // remove special characters, spaces and make lower case
  var remove = str.replace(/[^A-Z0-9]/gi, "").toLowerCase();
  //reverse string
  var checkPalindrome = remove.split('').reverse().join('');
  // compare 
  if(remove == checkPalindrome){
  return true;
  }
  else {
    return false;
  }
}



palindrome("eye");


//Longest word in a string

function findLongestWord(str) {
  myarray = str.split(' ');
  myarray.sort(function(a, b){
    return b.length - a.length; // ASC -> a - b; DESC -> b - a
  });
  return myarray[0].length;
}

findLongestWord('The quick brown fox jumped over the lazy dog');


      
//Alternative 
function findLongestWord(str) {
var splitString = str.split(" ");
var longest = 0;
for(var i=0; i< splitString.length; i++){
  if(longest < splitString[i].length){
    longest = splitString[i].length; 
  }
}
  return str.length;
}

findLongestWord('The quick brown fox jumped over the lazy dog')



function titleCase(str) {
  var splitString = str.toLowerCase().split(" ");
  var caseChange;
  var newStr = [];
  var newString;
  for(var i=0; i<splitString.length; i++){
     caseChange =splitString[i][0].toUpperCase();
     newSplitString = splitString[i].replace(splitString[i][0], caseChange);
     newStr.push(newSplitString);
     newString = newStr.join(" ");
     console.log(newString);
  }
  return newString;
}

titleCase("I'm a little tea pot");


// Confirm the ending
function end(str, target) {
  if(str.substr(-target.length)=== target){
    return true;
  }
  else{
    return false;
  }
 
}

end('Bastian', 'n');

// Largest numbers in the array
function largestOfFour(arr) {
  var result = [];
  for(var i=0;i < arr.length; i++){
    var largest =0;
    for(var j=0; j< arr[i].length; j++){
      if(arr[i][j] > largest){
        largest = arr[i][j];
      }
    }
      result[i]= largest;
  }
  return result;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

// Repeat a string
function repeat(str, num) {
var repetition = "";
  while(num >0){
    repetition += str;
    num--;
  }
   return repetition;
}

repeat('abc', 3);

// Truncate a string
function truncate(str, num) {
  var trunc = "";
  if(str.length > num){
    trunc= str.slice(0,num-3) + "...";
    return trunc;
  }else{
    return str;
  }
}

truncate('A-tisket a-tasket A green and yellow basket', 11);
  
  // Chunky Monkey - break an array into multidimensional array
  function chunk(arr, size) {
    var count = 0;
    var newArray = [];
    var finalArray = [];
    while (count < arr.length) {
        newArray = arr.slice(count, count+size);
        finalArray.push(newArray);
        count += size;
    }
    return finalArray;
}

chunk(['a', 'b', 'c', 'd'], 2);


 // Slasher flick 
 // Return the remaining elements of an array after chopping off n elements from the head. 
 function slasher(arr, howMany) {
 var removed = arr.splice(0, howMany);
  return arr;
}

slasher([1, 2, 3], 2);


// Mutation - Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

function mutation(arr) {  
  var elem0 = arr[0].toLowerCase();
  var elem1 = arr[1].toLowerCase();

  for(var i = 0; i < elem1.length; i++){
    var check = elem0.indexOf(elem1[i]);
    if (check === -1){
      return false;
    }
  }
  return true;
}

mutation(['hello', 'hey']);  

// Falsey Bouncer - Remove all falsey values from an array.
function bouncer(arr) {
  var filtered = arr.filter(accessDenied());
  return filtered;
  
   function accessDenied(value){
    return Boolean(value);
  }
}


bouncer([7, 'ate', '', false, 9]);


// Where art thou? - Make a function that looks through an array (first argument) and returns an array of all objects that have equivalent property values 
// (second argument).
function where(collection, source) {
  var arr = [];
  // What's in a name?
  for(var ob in collection){
    if(collection[ob][Object.keys(source)] === source[Object.keys(source)]){
      arr.push(collection[ob]);
    }
  }
  return arr;
}

where([{ first: 'Romeo', last: 'Montague' }, { first: 'Mercutio', last: null }, { first: 'Tybalt', last: 'Capulet' }], { last: 'Capulet' });


// Seek and Destroy - You will be provided with an initial array (the first argument in the destroyer function), 
// followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

function destroyer(arr) {
 var elemToDestroy = [];
  for(var i=1; i<arguments.length; i++){
    elemToDestroy.push(arguments[i]);
  }
  var survived = arguments[0].filter(function(element, index){
    var toReturn = true;

    for(var i = 0; i < elemToDestroy.length; i++){
      if (element === elemToDestroy[i]){ 
        toReturn = false;
      }
    }
    return toReturn;

  });
  return survived;
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3);

// Return the lowest index at which a value (second argument) should be inserted into a sorted array (first argument).
function where(arr, num) {
  // Find my place in this sorted array.
  arr.sort(function(a,b){
           return a -b;
           });
  for(var i =0; i<arr.length; i++){
    if(arr[i]>=num){
      return parseInt(i);
    }
  }
   return arr.length;
}

where([40, 60], 50);
// Alternative solution
function where(arr, num) {  
arr.push(num);  
arr.sort();  
for(i = 0; i < arr.length; i++){  
  if(arr[i] === num){ 
    return i; 
  } 
} 
} 

where([40, 60], 50);  

// or
function where(arr, num) {

  arr.sort(function(a, b) {
  return a - b;
  });

  var iBelongHere = 0;

  for(var i = 0; i < arr.length; i++){

    if(arr[i] < num){
      iBelongHere = i + 1;
    } else {
      return iBelongHere;
    }
  }
}

where([70, 40, 55, 60], 10);


// Intermediate Algorithm Scripting

// Sum all numbers in a range 
// We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

function sumAll(arr) {
  arr.sort(function(a,b){return a - b; });
  if(arr[0] === arr[1]){
    return arr[0] +arr[1];
  }
  var sum = [];
  for(var i=arr[0]; i<=arr[1]; i++){
    sum.push(i);
  }
  sum = sum.reduce(function(a, b){
    return a + b;
  });

  return sum;
}

sumAll([1, 4]);


// Diff Two Arrays

function diff(arr1, arr2) {
  var newArr = [];
  for(var i=0; i<arr1.length; i++){
     if (arr2.indexOf(arr1[i]) === -1) {
      newArr.push(arr1[i]);
    }
  }
  for (var i=0; i<arr2.length; i++){
     if (arr1.indexOf(arr2[i]) === -1) {
      newArr.push(arr2[i]);
    }
  }
  // Same, same; but different.
  return newArr;
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);

// Roman Numeral Converter

var r = '',
        decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
        roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    for (var i = 0; i < decimals.length; i++) {
        while (num >= decimals[i]) {
            r += roman[i];
            num -= decimals[i];
        }
    }
    return r;
}
convert(36);  


// Search and Replace

function replace(str, before, after) {

  // If first letter of 'before' is uppercase, make the first letter of 'after' uppercase.
  if (before[0] === before[0].toUpperCase()) {
    after = after.split('');
    after[0] = after[0].toUpperCase();
    after = after.join('');

    // If first letter of 'before' is lowercase, make the first letter of 'after' lowercase.
  } else if (before[0] === before[0].toLowerCase()) {
    after = after.split('');
    after[0] = after[0].toLowerCase();
    after = after.join('');
  }

  // split up the string into an array of words
  var strArr = str.split(' ');

  // find the index of the word to replace
  var index = strArr.indexOf(before);

  // replace the word and then return the joined array.
  strArr.splice(index, 1, after).join('');
  return strArr.join(' ');
}

replace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"); 