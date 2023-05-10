
let errors = document.getElementsByClassName("error")
let validName, validPhone, validEmail;
// Name Validation
let name = document.querySelector("#name");
name.addEventListener("blur", nameValid);
function nameValid() {
    if(!(name.value))
    
    {
        name.style.border = "2px solid red";
        errors[0].innerHTML="*Name field can't be empty";
        errors[0].style.display = "block";
       validName = false;
    }
    else if (!(/^([a-z A-Z]){4,20}$/).test(name.value)) {
        name.style.border = "2px solid red";
        errors[0].innerHTML="*Please Enter a valid name";
        errors[0].style.display = "block";
        validName = false;
    }
    else {
        name.style.border = "2px solid green";
        errors[0].style.display = "none";
        validName = true;
    }

}


// Phone Number Validation
let phone = document.querySelector("#phone");
phone.addEventListener("blur", phoneValid);

function phoneValid() {
    if(!(phone.value))
    {
        phone.style.border = "2px solid red";
        errors[1].innerHTML="*Phone Number field can't be empty";
        errors[1].style.display = "block";
        validPhone = false;
    }
    else if (!(/^([0-9]){10}$/).test(phone.value)) {
        phone.style.border = "2px solid red";
        errors[1].innerHTML="*Please Enter a valid phone number";
        errors[1].style.display = "block";
        validPhone = false;
    }
    else {
        phone.style.border = "2px solid green";
        errors[1].style.display = "none";
        validPhone = true;
    }
}
//Email Validation
let mail = document.querySelector("#email");
mail.addEventListener("blur", emailValid);

function emailValid() {
    if(!(mail.value))
    {
        mail.style.border = "2px solid red";
        errors[2].innerHTML="*Email field can't be empty";
        errors[2].style.display = "block";
        validEmail = false;
    }
    else if (!(/^([_\.\- 0-9a-z A-z]+)@([_\.\- 0-9a-z A-z]+)\.([a-zA-Z]{2,7})$/).test(mail.value)) {
        mail.style.border = "2px solid red";
        errors[2].innerHTML="*Please Enter a valid mail";
        errors[2].style.display = "block";
       validEmail = false;
    }
    else {
        mail.style.border = "2px solid green";
        errors[2].style.display = "none";
        validEmail= true;
    }
}

//Gender field test for empty values
let gender = document.getElementsByName("Gender");
function genderValid() {
    if (gender[0].checked || gender[1].checked || gender[2].checked) {

        return true;
    }
}

//Language field test for empty values
let language = document.getElementsByName("Language");
function languageValid() {
    if (language[0].checked || language[1].checked || language[2].checked) {

        return true;
    }
}

//Hobby field test for empty values
let hobby = document.querySelector("#hobby");
function hobbyValid() {
    if (hobby.value != "") {
        return true;
    }
}

//Enable Submit button
form.addEventListener("change", validate)
function validate() {

    if (validName && validPhone && validEmail && genderValid() && languageValid() && hobbyValid()) {

        submit.disabled = false;
    }
    else {
        submit.disabled = true;
    }
}



