window.onload = myOnLoadHandler
//User Interface Logic
function myOnLoadHandler() {
  let myForm = document.querySelector("form")
  myForm.onsubmit = myOnSubmitHandler
}

function myOnSubmitHandler(event) {
  event.preventDefault()
  let userInput = parseInt(document.getElementById("input").value)
}

//Business Logic
function createRobogersArray(number) {
  let array = []
  for(let i = 0; i < number+1; i++) {
    let numberString = "" + i
    if(numberString.includes(3)) {
      array.push("Won't you be my neighbor?")
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