// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Variables with all the possible character lists:
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = "!@#$%^&*()_+";

// Alert that start the app:
alert("Let's get started! Please select from the following:")

// Code that prompts for the password length:
var lengthChoice = +prompt("How many characters? Please choose between 8 and 128:");

while (lengthChoice < 8 || lengthChoice > 128) {
  var lengthChoice = prompt("Please choose between 8 and 128:");
}

// Confirm statements that collect info about the type of characters the user wants:
var lowerChoice = confirm("Include lowercase characters? Click OK for Yes or CANCEL for NO:");
var upperChoice = confirm("Include UPPERCASE characters? Click OK for YES or CANCEL for NO:");
var numChoice = confirm("Include numbers? Click OK for YES or CANCEL for NO:");
var symbolChoice = confirm("Include special characters? Click OK for YES or CANCEL for NO:");
var charList = "";

//if statements that determine the password's characters type according to user's choice:
if (lowerChoice) {
  charList += lowercase;
}
if (upperChoice) {
  charList += uppercase;
}
if (numChoice) {
  charList += numbers;
}
if (symbolChoice) {
  charList += symbols;
}

// Function that generates the password according to above choices:
var randomPassword = function (length) {
  var pwd = "";
  for (var i = 0; i < length; i++) {

    pwd += charList.charAt(Math.floor(Math.random() * charList.length));
  }
  return pwd;
}
// console.log(randomPassword(lengthChoice));

// Function that generates the desired password when the button is clicked
function generatePassword() {
  return (randomPassword(lengthChoice));
}