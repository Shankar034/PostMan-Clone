console.log("This is my PostMan Clone Project");

// Hide the parametersBox initially
// let parametersBox = document.getElementById('parametersBox');

//Utility Function
//1.Utility function to get DOm element from string

function getElementFromString(string) {
  let div = document.createElement("div");
  div.innerHTML = string;
  return div.firstElementChild;
}
//Initialize no of parameters

let addedParamCount = 0;

// parametersBox.style.display = 'none';

// if the user clicks on params, hide the json box

let paramsRadio = document.getElementById("paramsRadio");
paramsRadio.addEventListener("click", () => {
  document.getElementById("requestJsonBox").style.display = "none";
  document.getElementById("parametersBox").style.display = "block";
});

// if the user clicks on json box, hide the params

let jsonRadio = document.getElementById("jsonRadio");
jsonRadio.addEventListener("click", () => {
  document.getElementById("parametersBox").style.display = "none";
  document.getElementById("requestJsonBox").style.display = "block";
});

// if teh user clicks on + button add the more parameters

let addParam = document.getElementById("addParam");
addParam.addEventListener("click", () => {
  let params = document.getElementById("params");
  let string = `<div class="form-row my-2">
    <label for="url" class="col-sm-2 col-form-label">Parameter ${
      addedParamCount + 2
    }</label>
    <div class="col-md-4">
      <input
        type="text"
        class="form-control"
        id="parameterKey${addedParamCount + 2}"
        placeholder="Enter Parameter ${addedParamCount + 2} Key"
      />
    </div>
    <div class="col-md-4">
      <input
        type="text"
        class="form-control"
        id="parameterValue${addedParamCount + 2}"
        placeholder="Enter Parameter ${addedParamCount + 2} Value"
      />
    </div>
    <button  class="btn btn-primary deleteParam">-</button>
  </div>`;

  //Convert the element string to DOM node

  let paramElement = getElementFromString(string);
  params.appendChild(paramElement);

  //Add an event listener to remove the parameter on  clicking - button
  let deleteParam = document.getElementsByClassName("deleteParam");
  for (item of deleteParam) {
    item.addEventListener("click", (e) => {
      alert("Are you sure to delete this file");
      e.target.parentElement.remove();
    });
  }

  addedParamCount++;
});


//If the user clicks on submit button

let submit = document.getElementById('submit');
submit.addEventListener('click', ()=>{
    //Show please wait in the response box to request patience from the user


    
})