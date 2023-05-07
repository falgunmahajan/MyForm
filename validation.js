
let errors = document.getElementsByClassName("error")

// Name Validation
let name = document.querySelector("#name");
name.addEventListener("blur", nameValid);
function nameValid() {
    let regex = /^([a-z A-Z]){4,20}$/;
    if (regex.test(name.value)) {
        name.style.border = "2px solid green";
        errors[0].style.display = "none";

        return true;
    }
    else {
        name.style.border = "2px solid red";
        errors[0].style.display = "block";
        return false;
    }

}

//Email Validation
let mail = document.querySelector("#email");
mail.addEventListener("blur", emailValid);

function emailValid() {
    let regex = /^([_\.\- 0-9a-z A-z]+)@([_\.\- 0-9a-z A-z]+)\.([a-zA-Z]{2,7})$/;
    if (regex.test(mail.value)) {
        mail.style.border = "2px solid green";
        errors[2].style.display = "none";

        return true;
    }
    else {
        mail.style.border = "2px solid red";
        errors[2].style.display = "block";
        return false;
    }
}

// Phone Number Validation
let phone = document.querySelector("#phone");
phone.addEventListener("blur", phoneValid);

function phoneValid() {

    let regex = /^([0-9]){10}$/;
    if (regex.test(phone.value)) {
        phone.style.border = "2px solid green";
        errors[1].style.display = "none";

        return true;
    }
    else {
        phone.style.border = "2px solid red";
        errors[1].style.display = "block";
        return false;
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

    if (nameValid() && emailValid() && phoneValid() && genderValid() && languageValid() && hobbyValid()) {

        submit.disabled = false;
    }
    else {
        submit.disabled = true;
    }
}



