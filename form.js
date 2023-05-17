const submit = document.querySelector('.submit');
const form = document.getElementById("form");
const show = document.querySelector('.showData');
const update = document.querySelector('.update');
const add = document.querySelector('.add');

submit.disabled = true;

//event handling for submit button
submit.addEventListener("click", (e) => {
  
  let formData = new FormData(form);
  let formValues = formData.entries();
  let user = Object.fromEntries(formValues);
  user.Language = formData.getAll("Language");

  let userDetails = (function () {
    if (localStorage.getItem('userDetails') === null) {
      return [];
    }
    return JSON.parse(localStorage.getItem("userDetails"));
  })();
  userDetails.push(user);
  localStorage.setItem("userDetails", JSON.stringify(userDetails));

});

// //event handling for showData button
show.addEventListener("click", (e) => {
  e.preventDefault();
  showData();
});
// create a table

function showData()
{
  if (localStorage.getItem("userDetails")) {
    let user = JSON.parse(localStorage.getItem("userDetails"));
   
    if (document.querySelector("tbody").innerHTML != "") {
      document.querySelector("tbody").innerHTML = "";
    }
    for (var item in user)
     {
      
    var row = document.querySelector("tbody").insertRow()
    row.setAttribute("index",item);
    for (var key in user[item]) {
      var cell = row.insertCell()
      cell.innerHTML = user[item][key];
    }
    var cell = row.insertCell()
      cell.innerHTML = "<button class = 'btn1 edit'> Edit</button><button class = 'btn1 delete'> Delete</button>";
  }

    document.querySelector(".container").style.display = "none";
    document.querySelector(".details").style.display = "flex";
  }
  const edit = document.querySelectorAll(".edit");
const dlt = document.querySelectorAll(".delete");

// event handling for delete button
for(var btns of dlt)
{
  
  btns.addEventListener("click",(e)=>
  {
    let user = JSON.parse(localStorage.getItem("userDetails"))
    const btnClicked = e.target;
    const currentRow = btnClicked.parentNode.parentNode;
    const currentRowIndex = currentRow.getAttribute("index");
    user.splice(currentRowIndex,1);
    localStorage.setItem("userDetails",JSON.stringify(user));
    currentRow.remove();
    showData();
  })
}
//Edit the details
for(var btns of edit)
{
  
  btns.addEventListener("click",(e)=>
  {
    let user = JSON.parse(localStorage.getItem("userDetails"))
    const btnClicked = e.target;
    const currentRow = btnClicked.parentNode.parentNode;
    const currentRowIndex = currentRow.getAttribute("index");
    const data = user[currentRowIndex];
   document.querySelector("#name").value = data.Name;
   document.querySelector("#phone").value = data.PhoneNumber;
   document.querySelector("#email").value = data.Email;
   let radio = document.getElementsByName("Gender");
   for (var options of radio)
   {
     if(options.value==data.Gender)
     {
      options.checked=true;
     }
   }
   let checkboxes = document.getElementsByName("Language");
   for (var options of checkboxes)
   {
    for(var i of data.Language)
    if(options.value== i )
    {
      options.checked=true;
    } 
   }
   let dropdown = document.getElementById("hobby");
   dropdown.value = data.Hobby;
   submit.style.display="none";
   update.style.display="block";
   show.style.display="none";
   document.querySelector(".container").style.display = "block";
   document.querySelector(".details").style.display = "none";
     //update the record
update.addEventListener("click",()=>{
  if(validate())
  {
  let formData = new FormData(form);
  let formValues = formData.entries();
  let newData = Object.fromEntries(formValues);
  newData.Language = formData.getAll("Language");
  user[currentRowIndex] = newData
  localStorage.setItem("userDetails", JSON.stringify(user));
  }
})
  })

}
}




// Search for Particular record
const search = document.querySelector("#search")
search.addEventListener("keyup", ()=> {
  const searchValue = search.value.toUpperCase();
  const row = document.querySelector("tbody").rows;
  for(var i =0; i<row.length;i++)
  {
    let nameField = row[i].cells[0];
    let name=(nameField.innerHTML).toUpperCase();
    if(name.indexOf(searchValue)>-1)
    {
      row[i].style.display="";
    }
    else{
      row[i].style.display="none";
    }
  }
})

// event handling for add button
add.addEventListener("click",()=>
{
  document.querySelector(".container").style.display = "block";
   document.querySelector(".details").style.display = "none";
})


//sort the record
const sort = document.querySelector('.sort');
sort.addEventListener("change",(e)=>
{
  let user = JSON.parse(localStorage.getItem("userDetails"));
  let value = e.target.value;
  console.log(value)
    user.sort((a,b)=>
    {
      console.log(a.value)
      if(a.value>b.value)
      {
        return 1;
      }
      else if(a.value<b.value)
      {
        return -1;
      }
        return 0
    })
})
  // if(sort.value=="Name")
  // {
  //   user.sort((a,b)=>
  //   {
  //     if(a.Name.toLowerCase()>b.Name.toLowerCase())
  //     {
  //       return 1;
  //     }
  //     else if(a.Name.toLowerCase()<b.Name.toLowerCase())
  //     {
  //       return -1;
  //     }
  //       return 0
  //     })
  // }
  // if(sort.value=="Phone")
  // {
  //  user.sort((a,b)=>
  //   a.PhoneNumber-b.PhoneNumber
  //   )
  // }
  // if(sort.value=="Email")
  // {
  //  user.sort((a,b)=>
  // {
  //   if(a.Email.toLowerCase()>b.Email.toLowerCase())
  //   {
  //     return 1;
  //   }
  //   else if(a.Email.toLowerCase()<b.Email.toLowerCase())
  //   {
  //     return -1;
  //   }
  //     return 0
  //   })
  // }
  // localStorage.setItem("userDetails",JSON.stringify(user));
  // showData();




