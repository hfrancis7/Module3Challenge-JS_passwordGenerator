//Lists of characters
var lowerList = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperList = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numList = ["0","1","2","3","4","5","6","7","8","9"];
var specialList = [" ","!", "\"","#","$","%","&","\'","(",")","*","+","-",",",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"];

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
  var password = "";
  var passLength = getLengthReq(); //integer 8-128
  var charReqs = getCharReq(); //boolean array of length 4

  var charReqRand = 0;
  //for(var i = 0)

  // for(var i = 0; i < passLength){
    
  // }

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
//possible temporary solution if better UI made
function getCharReq(){
  //check lowercase
  let lower = confirm("Would you like to include lowercase letters? Press \"OK\" for Yes and \"Cancel\" for No.");
  //check uppercase
  let upper = confirm("Would you like to include uppercase letters? Press \"OK\" for Yes and \"Cancel\" for No.");
  //check numeric
  let num = confirm("Would you like to include numbers? Press \"OK\" for Yes and \"Cancel\" for No.");
  //check special 
  let special = confirm("Would you like to include special characters? Press \"OK\" for Yes and \"Cancel\" for No.");

  if(!lower && !upper && !num && !special){ //if none of the options were selected
    alert("You selected \"Cancel\" (no) for every option. Please select \"OK\" for at least one of the four options.");
    getCharReq();
  }else{
    let validate = confirm("These are the options you chose. \nLowercase: " + lower + "\nUppercase: " + upper + "\nNumbers: " + num +"\nSpecial Characters: "+ special + "\nAre you OK with these choices?");
    if(validate){
      return [lower, upper, num, special];
    }else{
      getCharReq();
    }
  }
  

}

// Add event listener to generate button (from assignment)
generateBtn.addEventListener("click", writePassword);

