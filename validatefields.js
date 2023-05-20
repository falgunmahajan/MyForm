

function setError(id,msg)
{
    let element=document.getElementById(id);
   let error =  element.getElementsByClassName("error")[0];
   error.innerHTML=msg;
   error.style.display = "block";

}

function validField(error)
{
    error.style.display = "none";
}
let errors=document.getElementsByClassName("error")
// Name Validation
function nameValid(name,valid) {

    if (!(name.value)) {
        valid.name = false;
        setError( "name", "*Name field can't be empty");

    }
    else if (!(/^([a-z A-Z]){4,20}$/).test(name.value)) {

        valid.name = false;
        setError("name", "*Please Enter a valid name");

    }
    else {

        valid.name = true;
        validField( errors[0])

    }

}

//Phone Number Validation
function phoneValid(phone,valid) {
    if (!(phone.value)) {

        valid.phone = false;
        setError("phone", "*Phone field can't be empty");

    }
    else if (!(/^([0-9]){10}$/).test(phone.value)) {

        valid.phone = false;
        setError("phone", "*Please Enter a valid Phone Number");

    }
    else {

        valid.phone = true;
        validField(errors[1])

    }

}

//Email Validation
function emailValid(mail,valid) {
    if (!(mail.value)) {

        valid.email = false;
        setError("email", "*Email field can't be empty");

    }
    else if (!(/^([_\.\- 0-9a-z A-z]+)@([_\.\- 0-9a-z A-z]+)\.([a-zA-Z]{2,7})$/).test(mail.value)) {

        valid.email = false;
        setError("email", "*Please Enter a valid Email");

    }
    else {

        valid.email = true;
        validField(errors[2])

    }

}

//Gender field test for empty values
function genderValid(gender,valid) {
    if (gender.checked) {
        valid.gender = true;
    }
}

//Language field test for empty values
function languageValid(input,valid) {
    let language = document.querySelectorAll("input[type=checkbox]:checked");
    
    if (language.length == 0) {
        valid.language = false;
    }
    else {
        valid.language = true;
    }

}

//Hobby field test for empty values
let hobby = document.querySelector("#hobby");
function hobbyValid(valid) {
    console.log("hobby")
    if (hobby.value != "") {
        valid.hobby= true;
    }
    else{
        valid.hobby=false;
    }
   
}
export{nameValid,
    phoneValid,
    emailValid,
    genderValid,
    languageValid,
    hobbyValid
}