let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let number = "1234567890";
let specialCharacter = "!@#$%^&*()_+";







function stringConcat(){
    let lowerCaseStatues = document.getElementById("include-lowercase").checked;
    let upperCaseStatues = document.getElementById("include-uppercase").checked;
    let numberStatues = document.getElementById("include-numbers").checked;
    let speciaCharacterStatues = document.getElementById("include-special").checked;

    

    if(lowerCaseStatues && upperCaseStatues && numberStatues && speciaCharacterStatues){
        return lowerCase.concat(upperCase).concat(number).concat(specialCharacter);
    }
    else if(lowerCaseStatues && upperCaseStatues && numberStatues){
        return lowerCase.concat(upperCase).concat(number);
    }
    else if(lowerCaseStatues && upperCaseStatues && speciaCharacterStatues){
        return lowerCase.concat(upperCase).concat(specialCharacter);
    }
    else if(lowerCaseStatues && numberStatues && speciaCharacterStatues){
        return lowerCase.concat(number).concat(specialCharacter);
    }
    else if(upperCaseStatues && numberStatues && speciaCharacterStatues){
        return upperCase.concat(number).concat(specialCharacter);
    }
    else if(lowerCaseStatues && upperCaseStatues){
        return lowerCase.concat(upperCase);
    }
    else if(lowerCaseStatues && numberStatues){
        return lowerCase.concat(number);
    }
    else if(lowerCaseStatues && speciaCharacterStatues){
        return lowerCase.concat(specialCharacter);
    }
    else if(upperCaseStatues && numberStatues){
        return upperCase.concat(number);
    }
    else if(upperCaseStatues && speciaCharacterStatues){
        return upperCase.concat(specialCharacter);
    }
    else if(numberStatues && speciaCharacterStatues){
        return number.concat(specialCharacter);
    }
    else if(upperCaseStatues){
        return upperCase;
    }
    else if(lowerCaseStatues){
        return lowerCase;
    }
    else if(numberStatues){
        return number;
    }
    else if(speciaCharacterStatues){
        return specialCharacter;
    }

    
    
    
    
}
    
function generatePassword(){
    try {
        let passwordConcat = stringConcat().split("");
        let passwordLength = Number(document.getElementById("length").value);
        let randomIndexPicker;
        let passwordConcatLength = passwordConcat.length;
        let password = "";
        if(passwordLength){
            console.log(passwordLength)
            if(passwordLength <= 50){
                for(let x = 1; x <= passwordLength; x++){
                    randomIndexPicker = Math.floor(Math.random()*passwordConcatLength);
                    password+=passwordConcat[randomIndexPicker];
                }
            } else {
                password = "Your Password is too long!"
            }
        } else {
            password = "Input Password Length First!"
        }



        document.getElementById("passwordResult").textContent = password;
    } catch {
        document.getElementById("passwordResult").textContent = "Choose the included element first!"
    }

    
}