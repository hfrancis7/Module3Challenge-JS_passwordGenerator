# Module3Challenge-JS_passwordGenerator
This is a Javascript exercise from Module 3 of the University of Central Florida's (UCF) October 2022 Part-Time Coding Bootcamp for Full Stack development . <br>

We were provided the HTML, CSS, and a baseline for the Javascript, and were tasked with writing the function(s) that would give the program functionality.

## Functionality
This is a simple password generator that generates a random password using the specifications gotten from the user's input. <br>

The user's input is collected by clicking the "Generate Password" button towards the bottom of the page. Alert boxes will appear on the page that will allow the user to give their specifications on the length of the password (from 8-128 characters) and the types of symbols used (lowercase/uppercase letters, numbers, and special characters.) <br>

The special characters used came from this [list of password special characters](https://www.owasp.org/index.php/Password_special_characters) from the OWASP Foundation. <br>

The user's input is collected using the built in alert(), confirm(), and prompt() functions. As of that weeks material, this was the only User I/O we had been taught and practicing with. As a result, the buttons to confirm user input are "OK"/"Cancel" instead of a "Yes"/"No". In the future, as we learn more about User I/O, such as using forms and creating pop-up windows, future UI will be more personalized to the user's experience and the program's functional purpose.

## Live Link
https://hfrancis7.github.io/Module3Challenge-JS_passwordGenerator/

## Screenshots
### Main page:
![The Password Generator application displays a red button to "Generate Password".](./images/03-javascript-homework-demo.png) <br>

### Asking for length of password: 
![The alert box is asking for the length of the password to be generated. The user has input the number 20.](./images/passLength_prompt.png) <br>

### Asking which characters to be used: <br>
![The alert box is asking if the user wants to use lowercase letters in the password. The options "OK" and "Cancel" refer to "Yes" and "No" respectively.](./images/lowerCase_prompt.png) <br>
![The alert box is asking if the user wants to use uppercase letters in the password. The options "OK" and "Cancel" refer to "Yes" and "No" respectively.](./images/upperCase_prompt.png) <br>
![The alert box is asking if the user wants to use numbers in the password. The options "OK" and "Cancel" refer to "Yes" and "No" respectively.](./images/num_prompt.png) <br>
![The alert box is asking if the user wants to use special characters in the password. The options "OK" and "Cancel" refer to "Yes" and "No" respectively.](./images/num_prompt.png) <br>

### Confirming User Input: <br>
![The alert box is asking if the user is okay with their choices in characters they want to use. The character choices were uppercase, lowercase, numbers, and special characters. "True" and "false" refer to if the user chose to have the selected type of character in their generated password. The options "OK" and "Cancel" refer to "Yes" and "No" respectively.](./images/charConfirm_prompt.png) <br>

### Example of generated password from input in above screenshots:
![The Password Generator application now displays the generated password from the user input. The red button to "Generate Password" is still displayed below.](./images/password_gen.png) <br>


## User Story
```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria
```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```
