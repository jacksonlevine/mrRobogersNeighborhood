Describe: createRobogersArray()
  Test: Should return an array with just 0 from input 0
  Code: createRobogersArray(0)
  Expected result: (length:1) [0]

  Test: Should return an array with length x+1 for input x
  Code: createRobogersArray(5)
  Expected result: (length:6) [...]

  Test: Should replace all numbers including 3 with "Won't you be my neighbor?"
  Code: createRobogersArray(3)
  Expected result: (length:4) [0, ... "Won't you be my neighbor?"]

  Test: Should replace all numbers including 2 with "Boop!"
  Code: createRobogersArray(2)
  Expected result: (length:3) [0, ... "Boop!"]

  Test: Should replace all numbers including 1 with "Beep!"
  Code: createRobogersArray(1)
  Expected result: (length:2) [0, "Beep!"]

Describe: arrayToUL()
  Test: Should return an unordered list html element with same contents as the array, when given an array
  Code: arrayToUL(["text", "text"]])
  Expected result: 
  <ul>
    <li>text</li>
    <li>text</li>
  </ul>

  