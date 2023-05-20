import{nameValid,
    phoneValid,
    emailValid,
    genderValid,
    languageValid,
    hobbyValid
} from "./validatefields.js";

const submit = document.querySelector('.submit');
let valid={
    name:false,
    phone:false,
    email:false,
    gender:false,
    language:false,
    hobby:false
};

// Name Validation
let name = document.querySelector(".name");
name.addEventListener("blur",()=> 
{
    nameValid(name,valid);
    validate(valid);
})

    //Phone Number Validation
    let phone = document.querySelector(".phone");
    phone.addEventListener("blur", ()=>{
        phoneValid(phone,valid);
    validate(valid);
    })
    

//Email Validation
let mail = document.querySelector(".email");
mail.addEventListener("blur",()=> {
    emailValid(mail,valid)
    validate(valid);
}
    );


//Gender field test for empty values
let radios=document.querySelectorAll("input[type=radio]")
radios.forEach(radioBtn=>{
    radioBtn.addEventListener("change",(e)=>
    {
        genderValid(e.target,valid);
        validate(valid);
    })
})



//Language field test for empty values
let checkboxes=document.querySelectorAll("input[type=checkbox]")
checkboxes.forEach(checkbox=>{
    checkbox.addEventListener("change",(e)=>{
        languageValid(e.target,valid);
    validate(valid);
    })
})


//Hobby field test for empty values
let select= document.querySelector("select");
select.addEventListener("change",()=>{
    hobbyValid(valid);
    validate(valid);
});


//Enable Submit button
function validate(valid) {
    console.log(valid)
    let allValid = true;
    
    
    for(let item in valid)
    {
        if(!valid[item])
        {
            allValid=false
        }
    }
    console.log(allValid)
    
    
    if (allValid) {
        submit.disabled = false;
        return true;
        
    }
    else {
        submit.disabled = true;
        return false;
        
    }
    
}





