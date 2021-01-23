# Mr. Robogers Neighborhood

#### an app that takes a number from a user and returns a range of numbers from 0 to the number
#### By **Michael Kriegel**

## Description

A website created with HTML/CSS and Javascript where a user can input a number and the program will return every number between 0 and the inputted number. If the number contains a 1 it is replaced by the string "Beep!", if there is a 2 in the number it is replaced with "Boop!" and if there is a 3 in the number it is replaced with "Won't you be my neighbor?". These numbers take precedence over each other so 12 will be "Boop!" and 23 will be "Won't you be my neighbor?". 

## Specs

### **Test Pseudocode:**

**Describe:** roboger()
<br/>
**Test:** If a number is inputted, display the range of 0 to that number
<br/>
**Expect:** roboger(5).toEqual("0", "1", "2", "3", "4", "5")

**Describe:** roboger()
<br/>
**Test:** For numbers that include 1: replace all digits with "Beep!"
<br/>
**Expect:** roboger(5).toEqual("0", "Beep!", "2", "3", "4", "5")

**Describe:** roboger()
<br/>
**Test:** For numbers that include 2: replace all digits with "Boop!"
<br/>
**Expect:** roboger(5).toEqual("0", "Beep!", "Boop!", "3", "4", "5");

**Describe:** roboger()
<br/>
**Test:**For numbers that include 3: replace all digits with  "Won't you be my neighbor?"
<br/>
**Expect:** roboger(5).toEqual("0", "Beep!", "Boop!", "Won't you be my neighbor?",4,  5)

## Known Bugs
* Users can input multiple numbers to get a new result, but inputting a number that is 2x less than the previous will not work as expected.
* Inputting the same number will remove values, inputting that number a third time will return them

## Technologies Used
* HTML
* CSS
* Javascript

### Libraries Used
* Bootstrap
* JQuery

## Support and contact details

Contact mikkrieg@gmail.com

### License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2021 **_Michael Kriegel_**