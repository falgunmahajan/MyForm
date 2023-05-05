
function validate(user)
{
   let values=Object.values(user);
   for(let val of values)
   {
    if(val=="")
    {
        alert("Please fill all the fields");
        return false;
    }
}
if(!isChecked())
{
    alert("Please fill all the fields");
    return false;
}
if(!isSelect())
   {
    alert("Please fill all the fields");
    return false;
   }
if((!nameValid())||(!emailValid())||(!phoneValid()))
    {
        alert("Pls fill the valid details");
        return false;
    }
else{
        return true;
    }
} 
let hobby=document.querySelector("#hobby");
function isSelect()
{
    if(hobby.value!=="Select")
    {
        return true;
    }
}

let gender=document.getElementsByName("Gender");
function isChecked()
{
    if(gender[0].checked||gender[1].checked)
    {
        return true;
    }
}
let name=document.querySelector("#name");
name.addEventListener("blur",nameValid);

function nameValid()
{
    let regex=/^([a-z A-Z]){4,20}$/;
    if(regex.test(name.value))
    {
        name.style.border="2px solid green";
        return true;
    }
    else
    {
        name.style.border="2px solid red";
        
        return false;
    }
}
let mail=document.querySelector("#email");
mail.addEventListener("blur",emailValid);

function emailValid()
{
    let regex=/^([_\.\- 0-9a-z A-z]+)@([_\.\- 0-9a-z A-z]+)\.([a-zA-Z]{2,7})$/;
    if(regex.test(mail.value))
    {
        mail.style.border="2px solid green";
        return true;
    }
    else
    {
        mail.style.border="2px solid red";
        return false;
    }
}

let phone=document.querySelector("#phone");
phone.addEventListener("blur",phoneValid);

function phoneValid()
{

    if((phone.value).length==10)
    {
        phone.style.border="2px solid green";
        return true;
    }
    else
    {
        phone.style.border="2px solid red";
        return false;
    }
}

// function passValidate()
// {
    
//     var pass=document.getElementById("pass").value;
//     let regex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
//     if(regex.test(pass))
//     {
//         document.getElementById("pass").style.border="2px solid green";
//         document.getElementsByClassName("error")[3].style.display="none";
//         fourth=true;
//     }
//     else
//     {
//         document.getElementById("pass").style.border="2px solid red";
//         document.getElementsByClassName("error")[3].style.display="block";
//         fourth=false;
//     }
// }
// var fifth=false;
// function cpassValidate()
// {
//     var pass=document.getElementById("pass").value;
//     var cpass=document.getElementById("cpass").value;
//     if(pass==cpass)
//     {
//         document.getElementById("cpass").style.border="2px solid green";
//         document.getElementsByClassName("error")[4].style.display="none";
//         fifth=true;
//     }
//     else
//     {
//         document.getElementById("cpass").style.border="2px solid red";
//         document.getElementsByClassName("error")[4].style.display="block";
//         fifth=false;
//     }
// }
