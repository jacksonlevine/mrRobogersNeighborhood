//User Interface Logic
let userY = 0;
let userX = 0;
let userSpeed = 1;
let userWidth = 27;
let currentType = "times";

window.onload = function() {
  displayRobogersMatrix(userWidth, "times");
  let myForm = document.querySelector("form")
  myForm.onsubmit = myOnSubmitHandler
  let matrixControls = document.getElementById("matrixControls");
  matrixControls.addEventListener("click", receiveMatrixControls)
  window.addEventListener('keypress', logKey);

}

function logKey(event) {
  if(document.activeElement !== document.getElementById("numInput") && document.activeElement !== document.getElementById("nameInput")) {
    if(event.key === "w") {
      userY+=userSpeed;
      displayRobogersMatrix(userWidth, currentType);
    }
    if(event.key === "a") {
      userX-=userSpeed;
      displayRobogersMatrix(userWidth, currentType);
    }
    if(event.key === "s") {
      userY-=userSpeed;
      displayRobogersMatrix(userWidth, currentType);
    }
    if(event.key === "d") {
      userX+=userSpeed;
      displayRobogersMatrix(userWidth, currentType);
    }
  }
}

function receiveMatrixControls(event) {
  if(event.target.id === "plus" || event.target.id === "times" || event.target.id === "divide") {
    displayRobogersMatrix(userWidth, event.target.id);
  }
  if(event.target.id === "userSpeed") {
    userSpeed = parseInt(document.getElementById("userSpeed").value);
    document.getElementById("speedNumber").innerText = userSpeed;
  }
  if(event.target.id === "screenSize") {
    userWidth = parseInt(document.getElementById("screenSize").value);
    displayRobogersMatrix(userWidth, currentType);
  }
}

function displayRobogersMatrix(width, type) {
  let matrixSpot = document.getElementById("matrix");
  let string = "";
  for(let j = width + userY; j > 0+userY; j--) {
    for(let i = 0+userX; i < width+userX; i++) {
      let number = 0;
      if(type === "plus") {
        number = i + j;
        currentType = type;
      }
      if(type === "times") {
        number = i * j;
        currentType = type;
      }
      if(type === "divide") {
        number = i / j;
        currentType = type;
      }
      
      let numberString = "" + number;
      if(numberString.includes(3)) {
        string += "<span class=\"red\">@</span>";
      } else 
      if(numberString.includes(2)) {
        string += "<span class=\"blue\">#</span>";
      } else 
      if(numberString.includes(1)) {
        string += "<span class=\"purple\">+</span>";
      } else {
        string += ".";
      }
    }
    string += "\n";
  }
  matrixSpot.innerHTML = string;
}

function myOnSubmitHandler(event) {
  event.preventDefault()
  let numInput = parseInt(document.getElementById("numInput").value)
  let nameInput = document.getElementById("nameInput").value
  let beepBoopArray = createRobogersArray(numInput, nameInput)
  displayOutput(beepBoopArray)
}

function displayOutput(array) {
  let olFromArray = arrayToOL(array)
  let outputSpot = document.getElementById("output")
  outputSpot.innerText = ""
  outputSpot.append(olFromArray)
}

function arrayToOL(array) {
  if(array.length === 0) {
    return null
  }
  let ol = document.createElement("ol")
  array.forEach(
    function(element, index) {
      let li = document.createElement("li")
      li.setAttribute("value", "" + index)
      li.innerText = element
      ol.append(li)
    }
  )
  return ol
}

//Business Logic
function createRobogersArray(number, name) {
  let array = []
  for(let i = 0; i < number+1; i++) {
    array.push(robogersNumber(i, name))
  }
  return array
}

function robogersNumber(number, name) {
  let numberString = "" + number
  if(numberString.includes(3)) {
    let line = "Won't you be my neighbor"
    if(name != null && name != "") {
      line += ", " + name
    }
    line += "?"
    return line
  } else 
  if(numberString.includes(2)){
    return "Boop!"
  } else 
  if(numberString.includes(1)) {
    return "Beep!"
  } else {
    return number
  }
}