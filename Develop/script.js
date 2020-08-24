// Assignment code here
function generatePassword(params) {
  
  // Prompt for length of password (between 8 and 128 characters) (or rng it bc im apparently doing more than i need to) then confirm validity.
  var passLengthInput = window.prompt("Input the desired password length, between 8 and 128");
  if(passLengthInput > 128, passLengthInput < 8) {
    window.alert("Password length is not within expected parameters, self-destruct sequence initiated...");
  } 
  var passwordLength = passLengthInput;
  console.log(passwordLength);


  // sort out characters being used.
  var charTypes = window.prompt("input what character types you want as spelled and separated by commas, options are lowercase, uppercase, numbers, and special characters");
 
  var charPool = [""];
  //concat to add possible data types to the pool of data.
  if(charTypes.search("lowercase") != -1) {
    charPool.splice(0, 0, "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"); 
  }
  if(charTypes.search("uppercase") != -1) {
    charPool.splice(0, 0, "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z");
  }
  if(charTypes.search("special character") != -1) {
    charPool.splice(0, 0, " ","!","\"","#","$","%","%","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~");
  }
  if(charTypes.search("numbers") != -1) {
    charPool.splice(0, 0, "1","2","3","4","5","6","7","8","9","0");
  }

  //find length of array to use for random selection later.
  var charLength = charPool.length;
  console.log(charPool, charLength);


  // Generate password in alert 

  var password = [""];
  while(passwordLength > 0) {
    var charIndex = Math.floor(Math.random()*passwordLength);
    var actualChar = charPool[charIndex];
    password.push(actualChar);
    passwordLength--;
  }
  password.toString;
  return password;
  console.log(password);
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
