window.onload = myOnLoadHandler

function myOnLoadHandler() {
  let myForm = document.querySelector("form")
  myForm.onsubmit = myOnSubmitHandler
}

function myOnSubmitHandler(event) {
  event.preventDefault()
  let userInput = parseInt(document.getElementById("input").value)

}

function createRobogersArray(number) {
  let array = []
  for(let i = 0; i < number+1; i++) {
    array.push(i)
  }
  return array
}