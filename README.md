# Mr. Roboger's Neighborhood
## A coding exercise to demonstrate the abilities of for loop incrementing.

# Technologies Used:
* Javascript
* HTML
* CSS

# Known Bugs:
* Some flickering/jittering when moving mouse quickly over the list elements

# Contact Me:
* jack@netbug.us for any coding inquiries

## License:
* Creative Commons 2.0

## Tests:

Describe: createRobogersArray()
  Test: Should return an array with just 0 from input 0
  Code: createRobogersArray(0)
  Expected output: (length:1) [0]

  Test: Should return an array with length x+1 for input x
  Code: createRobogersArray(5)
  Expected output: (length:6) [...]

  Test: Should replace all numbers including 3 with "Won't you be my neighbor?"
  Code: createRobogersArray(3)
  Expected output: (length:4) [0, ... "Won't you be my neighbor?"]

  Test: Should replace all numbers including 2 with "Boop!"
  Code: createRobogersArray(2)
  Expected output: (length:3) [0, ... "Boop!"]

  Test: Should replace all numbers including 1 with "Beep!"
  Code: createRobogersArray(1)
  Expected output: (length:2) [0, "Beep!"]

  Test: Should include name of user if it was provided.
  Code: createRobogersArray(3, "Test")
  Expected output: (length:4) [0, "Beep!", "Boop!", "Won't you be my neighbor, Test?"]

  Test: Should include no name if name not provided.
  Code: createRobogersArray(3)
  Expected output: (length:4) [0, "Beep!", "Boop!", "Won't you be my neighbor?"]

Describe: arrayToUL()

  Test: Should return an unordered list html element with same contents as the array, when given an array
  Code: arrayToUL(["text", "text"])
  Expected output: 
    <ul>
      <li>text</li>
      <li>text</li>
    </ul>

  Test: Should return null if passed an empty array
  Code: arrayToUL([])
  Expected output: null

Describe: arrayToOL()

  Test: Should return an ordered list html element with same contents as the array, when given an array
  Code: arrayToOL(["text", "text"])
  Expected output: 
    <ol>
      <li value = "0">text</li>
      <li value = "1">text</li>
    </ol>

  Test: Should start on index "0" to be lined up with the actual index of the array
  Code: arrayToOL(["text", "text"])
  Expected output: 
  <ol>
      <li value = "0">text</li>
      <li value = "1">text</li>
  </ol>

  Test: Should return null if passed an empty array
  Code: arrayToOL([])
  Expected output: null

Describe: robogersNumber()

  Test: Should return a single value of the "robogers array" based on number given
  Code: robogersNumber(3)
  Expected output: "Won't you be my neighbor?"

  
### Copyright Jackson Levine 2023