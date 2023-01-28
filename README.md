# Mr. Roboger's Neighborhood
## A coding exercise to demonstrate the abilities of for loop incrementing.

# Technologies Used:
* Javascript
* HTML
* CSS

# Installation / Setup:
1. Clone this repository.
2. Navigate to the top folder.
3. Launch index.html in any web browser!
* Alternatively, you can visit https://jacksonlevine.github.io/mrRobogersNeighborhood to see it on GitHub Pages.

# Known Bugs:
* Some flickering/jittering when moving mouse quickly over the list elements

# Contact Me:
* jack@netbug.us for any coding inquiries

## Tests:

Describe: createRobogersArray()

  Test: Should return an array with just 0 from input 0

  Code: createRobogersArray(0)

  Expected output: (length:1) [0]

  ---

  Test: Should return an array with length x+1 for input x

  Code: createRobogersArray(5)

  Expected output: (length:6) [...]

  ---

  Test: Should replace all numbers including 3 with "Won't you be my neighbor?"

  Code: createRobogersArray(3)

  Expected output: (length:4) [0, ... "Won't you be my neighbor?"]

  ---

  Test: Should replace all numbers including 2 with "Boop!"

  Code: createRobogersArray(2)

  Expected output: (length:3) [0, ... "Boop!"]

  ---

  Test: Should replace all numbers including 1 with "Beep!"

  Code: createRobogersArray(1)

  Expected output: (length:2) [0, "Beep!"]

  ---

  Test: Should include name of user if it was provided.

  Code: createRobogersArray(3, "Test")

  Expected output: (length:4) [0, "Beep!", "Boop!", "Won't you be my neighbor, Test?"]

  ---

  Test: Should include no name if name not provided.
  
  Code: createRobogersArray(3)

  Expected output: (length:4) [0, "Beep!", "Boop!", "Won't you be my neighbor?"]

  ---

Describe: robogersNumber()

  Test: Should return a single value of the "robogers array" based on number given

  Code: robogersNumber(3)

  Expected output: "Won't you be my neighbor?"

  ---

  
## License:

Copyright © 2023 Jackson Levine

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.