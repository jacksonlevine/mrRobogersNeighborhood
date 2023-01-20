//User Interface Logic
window.onload = myOnLoadHandler

let makeSubmitHandler = function(parent) {
  return function myOnSubmitHandler(event) {
    event.preventDefault()
    let numInput = parseInt(parent.getElementById("numInput").value)
    let nameInput = parent.getElementById("nameInput").value
    let beepBoopArray = createRobogersArray(numInput, nameInput)
    displayOutput(beepBoopArray, parent)
  }
}

function myOnLoadHandler() {
  let myForm = document.querySelector("form")
  myForm.onsubmit = makeSubmitHandler(document)
  let myNewButton = document.getElementById("newButton")
  myNewButton.onclick = generateNew
}

function generateNew(event) {
  event.preventDefault()
  let mainBody = document.querySelector(".mainbody")
  let newMainBody = mainBody.cloneNode(true)
  mainBody.after(newMainBody)
  reloadHandler(newMainBody)
}

function reloadHandler(parent) {
  let myForm = parent.querySelector("form")
  myForm.onsubmit = makeSubmitHandler(parent)
}


function displayOutput(array, parent) {
  let olFromArray = arrayToOL(array)
  let outputSpot = parent.getElementById("output")
  outputSpot.innerText = ""
  outputSpot.append(olFromArray)
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

function arrayToUL(array) {
  if(array.length === 0) {
    return null
  }
  let ul = document.createElement("ul")
  array.forEach(
    function(element) {
      let li = document.createElement("li")
      li.innerText = element
      ul.append(li)
    }
  )
  return ul
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