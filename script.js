// Assignment Code (from assignment)
var generateBtn = document.querySelector("#generate");

// Write password to the #password input (from assignment)
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//generate password function
function generatePassword(){
  var passLength = getLengthReq();

  return "pass"; //placeholder
}

//Gets the length requirement from user input
function getLengthReq(){
  let input = prompt("What length do you require for your password? (Must be in between 8-128 characters)");
  input = + input;
  if(isNaN(input)){
    alert("The input you provided is not a number. Please enter a numeric value between 8-128.");
    getLengthReq();
  }else{
    if(input < 8){
      alert("The value you provided is less than 8. Please enter a numeric value between 8-128.");
      getLengthReq();
    }else if(input > 128){
      alert("The value you provided is greater than 128. Please enter a numeric value between 8-128.");
      getLengthReq();
    }else{
      let validate = confirm("Are you okay with a password length of " + input + "?");
      if(validate){
        return input;
      }else{
        getLengthReq();
      }
    }
  }
}

//start of character types function
function getCharReq(){
  //check lowercase
  //check uppercase
  //check numeric
  //check special 
}
// Add event listener to generate button (from assignment)
generateBtn.addEventListener("click", writePassword);

