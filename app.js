//TODO
/*
1. username validation
2. password validation
3. password matching

*/

// DOM elements
const form = document.getElementById("registration-form");
const fName = document.getElementById("first-name");
const lName = document.getElementById("last-name");
const useremail = document.getElementById("user-email");
const username = document.getElementById("username");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const formInputs = [fName, lName, useremail, username, password, password2];

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
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if(re.test(inputEmail.value)) {
        showSuccess(inputEmail);
    } else {
        showError(inputEmail, "Invalid email");
    }
}

// Submit form on register button click
function submitForm(){
    checkRequired(formInputs);
    checkEmail(useremail);
}