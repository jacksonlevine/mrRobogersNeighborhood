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
    let numberString = "" + i
    if(numberString.includes(3)) {
      let line = "Won't you be my neighbor"
      if(name != null && name != "") {
        line += ", " + name
      }
      line += "?"
      array.push(line)
    } else 
    if(numberString.includes(2)){
      array.push("Boop!")
    } else 
    if(numberString.includes(1)) {
      array.push("Beep!")
    } else {
      array.push(i)
    }
  }
  return array
}

function arrayToUL(array) {
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