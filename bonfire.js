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


