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
    let numberString = "" + i
    if(numberString.includes(3)) {
      array.push("Won't you be my neighbor?")
    } else 
    if(numberString.includes(2)){
      array.push("Boop!")
    } else {
      array.push(i)
    }
  }
  return array
}