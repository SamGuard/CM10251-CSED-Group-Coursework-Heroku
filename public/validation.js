function checkUsername(usernameInputID, usernameErrorID) {
    var input = document.getElementById(usernameInputID);
    var errorElement = document.getElementById(usernameErrorID);
    if (input.value.length < 25 && input.value.length != 0){
        success(input,errorElement)
        return true;
    } else{
        document.getElementById("usernameError").display = "";
        error(input,errorElement)
        return false;
    }
};

function checkEmail(emailInputID, emailErrorID) {
    var input = document.getElementById(emailInputID);
    var errorElement = document.getElementById(emailErrorID);
    if (/^.+@.+\..+/.test(input.value)){
        success(input,errorElement)
        return true;
    } else{
        error(input,errorElement)
        return false;
    }
};

function checkPassword(passwordInputID, passwordErrorID) {
    var input = document.getElementById(passwordInputID);
    var errorElement = document.getElementById(passwordErrorID);
    passwordsSame(passwordInputID, "confirmPasswordInput")
    if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/.test(input.value) && input.value.length >= 8){
        success(input,errorElement)
        return true;
    } else{
        error(document.getElementById("confirmPasswordInput"),errorElement)
        error(input,errorElement)
        return false;
    }
};


function passwordsSame(firstPasswordElementID, confirmPasswordElementID){
    var errorElement = document.getElementById("confirmPasswordError");
    var firstPasswordElement = document.getElementById(firstPasswordElementID);
    var confirmPasswordElement = document.getElementById(confirmPasswordElementID);
    if (firstPasswordElement.value != confirmPasswordElement.value || confirmPasswordElement.value == ""){
        error(confirmPasswordElement, errorElement);
        return false;
    } else {
        success(confirmPasswordElement, errorElement)
        return true;
    }
}

function canRegister(usernameInputID, usernameErrorID, emailInputID, emailErrorID, passwordInputID, passwordErrorID, confirmPasswordInputID, consentID, consentError){
    var consentElement = document.getElementById(consentID);
    var consentError = document.getElementById(consentError);
    if(consentElement.value){
        return checkUsername(usernameInputID,usernameErrorID) && checkEmail(emailInputID,emailErrorID) && checkPassword(passwordInputID,passwordErrorID) && passwordsSame(passwordInputID,confirmPasswordInputID)
    } else {
        error(consentElement, consentError)
    }
}

function forceBeInt(element){
    element.value = element.value.match(/[0-9]+([\.,][0-9]*)?/g);
}

function error(element, errorElement){
    errorElement.style.display = "";
    element.style.color = "red";
    element.style.outline =  "2px solid red";
}

function success(element, errorElement){
    errorElement.style.display = "none";
    element.style.color = "green";
    element.style.outline =  "2px solid green";
}
