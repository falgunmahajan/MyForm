function setError(field,id,msg)
{
    let element=document.getElementById(id);
   let error =  element.getElementsByClassName("error")[0];
   error.innerHTML=msg;
   error.style.display = "block";
    field.style.border="2px solid red";

}

function validField(field,error)
{
    field.style.border = "2px solid green";
    error.style.display = "none";
}

let errors=document.getElementsByClassName("error")

// Name Validation
let name = document.querySelector(".name");
name.addEventListener("blur", nameValid);
let validName=true;
function nameValid() {
        if(!(name.value))
        {
            setError(name,"name","*Name field can't be empty");
            validName= false;
        }
        else if (!(/^([a-z A-Z]){4,20}$/).test(name.value)) {
            setError(name,"name","*Please Enter a valid name");
            validName= false;
        }
        else{
            validField(name,errors[0])
            validName=true;
        }
    }

    //Phone Number Validation
    let phone = document.querySelector(".phone");
    phone.addEventListener("blur", phoneValid);
    let validPhone=true;
    function phoneValid() {
    if(!(phone.value))
        {
            setError(phone,"phone","*Phone field can't be empty");
            validPhone=false;
        }
        else if (!(/^([0-9]){10}$/).test(phone.value)) {
            setError(phone,"phone","*Please Enter a valid Phone Number");
            validPhone=false;
        }
        else{
            validField(phone,errors[1])
            validPhone=true;
        }
    }
    

//Email Validation
let mail = document.querySelector(".email");
mail.addEventListener("blur", emailValid);
let validMail=true;
function emailValid() {
    if(!(mail.value))
    {
        setError(mail,"email","*Email field can't be empty");
        validMail= false;
    }
    else if (!(/^([_\.\- 0-9a-z A-z]+)@([_\.\- 0-9a-z A-z]+)\.([a-zA-Z]{2,7})$/).test(mail.value)) {
        setError(mail,"email","*Please Enter a valid Email");
        validMail= false;
    }
    else {
        validField(mail,errors[2])
        validMail=true;
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

    if (validName && validPhone && validMail && genderValid() && languageValid() && hobbyValid()) {

        submit.disabled = false;
        return true;
        
    }
    else {
        submit.disabled = true;
        return false;
        
    }
}



