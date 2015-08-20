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


