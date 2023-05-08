const submit = document.querySelector('.submit');
const form = document.getElementById("form");
const show = document.querySelector('.showData');
submit.disabled = true;

//event handling for submit button
submit.addEventListener("click", (e) => {
  e.preventDefault();
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
  show.style.display = "block";
});

// //event handling for showData button
show.addEventListener("click", (e) => {
  e.preventDefault();
  if (localStorage.getItem("userDetails")) {
    let user = JSON.parse(localStorage.getItem("userDetails"));
    if (document.querySelector("tbody").innerHTML != "") {
      document.querySelector("tbody").innerHTML = "";
    }
    for (var item in user) {
      var row = document.querySelector("tbody").insertRow(item)
      for (var key in user[item]) {
        var cell = row.insertCell()
        cell.innerHTML = user[item][key];
      }
    }
    document.querySelector(".form-container").style.display = "flex";
    document.querySelector(".details").style.display = "block";
  }
});

// Search for Particular record
const search = document.querySelector("#search")
search.addEventListener("keyup", match);
function match() {
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

}



