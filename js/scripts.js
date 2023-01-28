//User Interface Logic
window.onload = myOnLoadHandler

function myOnLoadHandler() {
  let myForm = document.querySelector("form")
  myForm.onsubmit = myOnSubmitHandler
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