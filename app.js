// DOM elements
const form = document.getElementById("registration-form");
const fName = document.getElementById("first-name");
const lName = document.getElementById("last-name");
const useremail = document.getElementById("user-email");
const username = document.getElementById("username");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const formInputs = [fName, lName, useremail, username, password, password2];

// Submit form on register button click
function submitForm(){
    checkRequired(formInputs);
    checkEmail(useremail);
    checkValidUsername(username);
    checkValidPassword(password, password2);
}

// Checks if form values are empty
function checkRequired(formInputArr){
    formInputArr.forEach(function(formInput){
        if(formInput.value === ""){
            showError(formInput, "Required")
        } else {
            showSuccess(formInput);
        }
    });
}

// Checks if email is in valid format
function checkEmail(inputEmail){
    if(inputEmail.parentElement.className === "form-control error"){ // if error already found, return
        return;
    } else {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
        if(re.test(inputEmail.value)) {
            showSuccess(inputEmail);
        } else {
            showError(inputEmail, "Invalid email");
        }
    }
}

// Checks if created username uses valid characters and is proper length
// Alphanumeric
// min: 6 characters
// max: 15 characters
function checkValidUsername (inputUsername) {
    if(inputUsername.parentElement.className === "form-control error"){ // if error already found, return
        return;
    } else {
        const re = /^[a-zA-Z0-9]{6,15}$/;
        if(re.test(inputUsername.value)) {
            showSuccess(inputUsername);
        } else {
            showError(inputUsername, "Invalid username");
        }
    }   
}

// checks if created password uses valid characters and is proper length
// Alphanumeric
// Valid symbols --->  !@#$%^&*()
// min: 8
// max: 20
function checkValidPassword (inputPassword1, inputPassword2) {
    if(inputPassword1.parentElement.className === "form-control error"){ // if error already found, return
        return;
    } else {
        const re = /^[a-zA-Z0-9!@#$%^&*()]{8,20}$/;

        if(re.test(inputPassword1.value)) {
            checkMatch(inputPassword1, inputPassword2);
        }else {
            showError(inputPassword1, "Invalid");
        }
    }  
}

// checks if initially created password and confirmation password match
function checkMatch (inputPassword1, inputPassword2){
    if(inputPassword1.value === inputPassword2.value) {
        showSuccess(inputPassword1);
    } else {
        showError(inputPassword1, "Not matching");
    }
}

// Adds error class to form control
function showError(formInput, message){
    const formControl = formInput.parentElement;
    formControl.className = "form-control error";
    const errorMsgContainer = formControl.querySelector("span");
    errorMsgContainer.innerText = message;
}

// Adds success class to form control
function showSuccess(formInput){
    const formControl = formInput.parentElement;
    formControl.className = "form-control success";
}