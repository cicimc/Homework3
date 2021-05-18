var generateBtn = document.querySelector("#generate");
//My characters (Arrays)
var charUpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var charLowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var charNumber = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var charSpecial = ["!", "@", "#", "$", "%", "^", "&", "*"];
var userInput = [];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Adding messages for the user to choose what they want in their password
function generatePassword() {
//Concat is joining 2 or more strings, and then returning a new string
if (userInput.length == 0) {
  alert ("Please choose what kind of characters you would like to include in your password.");
}
if (confirm("Would you like an Uppercase letter in the password?")) {
  userInput = userInput.concat(charUpperCase);
}
if (confirm("Would you like a lowercase letter in the password?")) {
  userInput = userInput.concat(charLowerCase);
}
if (confirm("Do you want numbers in the password?")) {
  userInput = userInput.concat(charNumber);
}
if (confirm("Do you want any special characters in the password?")) {
  userInput = userInput.concat(charSpecial);
}
//Making sure the user chooses a how long they want their password to be
while (true) {
  var charLength = prompt("How many characters would you like your password to be? Character lenngth must be 8 to 128.");
  if (!charLength) {
    alert("You must add a value between 8 and 128.");
  }
  else if (charLength < 8 || charLength > 128) {
    prompt("Your character length must be higher than 8 and lower than 128.");
  }
  else {
    break;
  }
}
var newPassword = [];
for (var i = 0; i < charLength; i++) {
  var allUserInput = userInput[Math.floor(Math.random() * userInput.length)];
  newPassword.push(allUserInput);
}
return newPassword.join("");
}

generateBtn.addEventListener("click", writePassword);