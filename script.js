//Using alert(), prompt(), and confirm() b/c that was the UI in scope of this week's lesson plan.
//in future work, better UI could be implemented

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

  for(var i = 0; i < passLength; i++){
    var char = generateCharacter(charReqs);
    password = password + char;
  }


  return password;
}

//Gets the length requirement from user input
function getLengthReq(){
  while(true){
    let input = prompt("What length do you require for your password? (Must be in between 8-128 characters)");
    input = + input;
    if(isNaN(input)){
      alert("The input you provided is not a number. Please enter a numeric value between 8-128.");
    }else{
      if(input < 8){
        alert("The value you provided is less than 8. Please enter a numeric value between 8-128.");
      }else if(input > 128){
        alert("The value you provided is greater than 128. Please enter a numeric value between 8-128.");
      }else{
        let validate = confirm("Are you okay with a password length of " + input + "?");
        if(validate){
          return input;
        }
      }
    }
  }
  
}

//start of character types function
function getCharReq(){
  while(true){
    //check lowercase
    let lower = confirm("Would you like to include LOWERCASE letters? Press \"OK\" for Yes and \"Cancel\" for No.");
    //check uppercase
    let upper = confirm("Would you like to include UPPERCASE letters? Press \"OK\" for Yes and \"Cancel\" for No.");
    //check numeric
    let num = confirm("Would you like to include NUMBERS? Press \"OK\" for Yes and \"Cancel\" for No.");
    //check special 
    let special = confirm("Would you like to include SPECIAL CHARACTERS? Press \"OK\" for Yes and \"Cancel\" for No.");

    if(!lower && !upper && !num && !special){ //if none of the options were selected
      alert("You selected \"Cancel\" (no) for every option. Please select \"OK\" for at least one of the four options.");
    }else{
      let validate = confirm("These are the options you chose. \nLowercase: " + lower + "\nUppercase: " + upper + "\nNumbers: " + num +"\nSpecial Characters: "+ special + "\nAre you OK with these choices?");
      if(validate){
        return [lower, upper, num, special];
      }
    }
  }
  
  

}

function generateCharacter(charReqsParam){
  //Lists of characters
  var lowerList = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var upperList = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var numList = ["0","1","2","3","4","5","6","7","8","9"];
  var specialList = [" ","!", "\"","#","$","%","&","\'","(",")","*","+","-",",",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"];
  
  //lists of character lists
  var charList = [lowerList, upperList, numList, specialList];
  var charsInUse = []; //list of character lists in use

  for(var i = 0; i < 4; i++){
    if(charReqsParam[i]){ 
      charsInUse.push(charList[i]); //charInUse will have a length between 1 and 4, previous function removes possibility of length 0
    }
  }

  //Math.floor((Math.random() * a) + b) generates a random number from 0 to (a-1) with an offset of b
  let x = Math.floor(Math.random() * (charsInUse.length)); //return whole number between 0 and and length of charsInUse minus 1
  let y = Math.floor(Math.random() * (charsInUse[x].length)); //returns a whole number between 0 and the length minus 1 of the chosen character list from charsInUse[x]
  
  return(charsInUse[x][y]);

  
}

// Add event listener to generate button (from assignment)
generateBtn.addEventListener("click", writePassword);

