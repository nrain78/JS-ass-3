// ch 13- 20
// qno 1;
// Character input
// if else statment
let p = ("<h2> If, Else_IF Statment</h2>")
document.write(p);

// let character = prompt("Enter one character");

// Check if input is valid
// if (character.length !== 1) {
//     document.write("Only input one character<br><br>");
// } else {
    // Convert character to ASCII code
    // let asciiCode = character.charCodeAt(0);

    // Check conditions using if-else
//     if (asciiCode >= 48 && asciiCode <= 57) { // ASCII codes for 0-9
//         document.write("This is a number.<br><br>");
//     } else if (asciiCode >= 65 && asciiCode <= 90) { // ASCII codes for A-Z
//         document.write("its uppercase letter .<br><br>");
//     } else if (asciiCode >= 97 && asciiCode <= 122) { // ASCII codes for a-z
//         document.write("its lowercase letter.<br><br>");
//     } else {
//         document.write("its no number, no uppercase, no lowercase letter.<br><br>");
//     }
// }

// qno 2;
// let num1 = parseInt(prompt("enter a one number"));
// let num2 = parseInt(prompt("enter 2nd number"));
// if (num1 > num2){
//     document.write(`Larger integer: ${num1}<br><br>`)
// } else if (num2 > num1){
//     document.write(`smaller integer: ${num2}<br><br>`)
// }
// else {
// document.write("Dono integers barabar hain.<br><br>");
// }

// qno 3;
// let number = parseFloat(prompt("Enter a one number"))
// if (number > 0){
//     document.write("Positive number<br><br>")
// } else if (number < 0){
//     document.write("Negative number<br><br>")
// } else {
//     document.write("zero<br><br>")
// }

//qno 4;
// let char = prompt("Enter a character")
// if (char.length !== 1){
// document.write("Enter a one charcter")
// } else {
    // Convert character to lowercase for case-insensitive comparison
    // let lowerChar = char.toLowerCase();

    // Check if the character is a vowel
//     if (lowerChar === 'a' || lowerChar === 'e' || lowerChar === 'i' || lowerChar === 'o' || lowerChar === 'u') {
//         document.write("its a vowel<br><br>"); // It's a vowel
//     } else {
//         document.write("its not a vowel<br><br>"); // It's not a vowel
//     }
// }

// qno 5;
// Store the correct password in a variable
const correctPassword = "noor123";

// Ask the user for their password
let userPassword = prompt("Please enter password!");

// Validate the user's input
if (!userPassword) {
    // If no password is entered
    alert("Please enter your password.");
} else if (userPassword === correctPassword) {
    // If the entered password matches the correct password
    alert("Correct! The password you entered matches the original password.");
} else {
    // If the entered password does not match
    alert("Incorrect password.");
}

//----------------------------ch 14-16------------------
document.write("<h2>Arrays</h2>")

//QNO 1;
let emptyArray = [];

//QNO2;
let emptyArray2 = [];

//QNO3;
let cars = ["brv", "crv", "hrv"]

// QUESTION NO 04
const numberArray = [1, 2, 3, 4, 5];

// QUESTION NO 05
const booleanArray = [true, false];

// QUESTION NO 06
const mixedArray = ["Mango", 1, true];

// question no 07;
let qualifications = ["SSC", "HSC", "BCS",
"BS", "BCOM"," MS"," M. Phil", "PhD"];
document.write(`Qualifications:`);
for (let i = 0 ; i < qualifications.length; i++){
    document.write(`${i + 1}  ${qualifications[i]}<br><br>`)
}

//ques no 8;
let students = ["noor", "zoha", "meerub"];
let scoreStud = [320, 480, 320];
let total = 500;
for (let i = 0; i < students.length; i++){
    const percentage = (scoreStud[i]/total)*100
    document.write(`Score of ${students[i]} is ${scoreStud[i]}. Percentage is ${percentage.toFixed(2)}<br>`)
}

// QUESTION NO 09
const colorNames = ["Red", "Green", "Blue", "Yellow", "Purple", "Orange", "Black", "White"];
document.write(colorNames);

// QUESTION NO 09 (a)
// const colorNames = ["Red", "Green", "Blue", "Yellow", "Purple", "Orange", "Black", "White"];
// const userColor = prompt("What color you want to add at the begining?")
// const userColorAddBegining = colorNames.unshift(userColor);
// document.write(colorNames);





// QUESTION NO 09 (b)
// const colorNames = ["Red", "Green", "Blue", "Yellow", "Purple", "Orange", "Black", "White"];
// const userColor = prompt("What color you want to add at the end?")
// const userColorAddEnd = colorNames.push(userColor);
// document.write(colorNames);





// QUESTION NO 09 (c)
// const colorNames = ["Red", "Green", "Blue", "Yellow", "Purple", "Orange", "Black", "White"];
// const userColor1 = prompt("Enter the first color to add at the beginning:");
// const userColor2 = prompt("Enter the second color to add at the beginning:");
// colorNames.unshift(userColor2, userColor1);
// document.write("Updated Colors: " + colorNames.join(", "));





// QUESTION NO 09 (d)
// const colorNames = ["Red", "Green", "Blue", "Yellow", "Purple", "Orange", "Black", "White"];
// const DeleteFirstColor = colorNames.shift();
// document.write("Updated Colors: " + colorNames);





// QUESTION NO 09 (e)
// const colorNames = ["Red", "Green", "Blue", "Yellow", "Purple", "Orange", "Black", "White"];
// const DeleteLastColor = colorNames.pop();
// document.write("Updated Colors: " + colorNames);





// QUESTION NO 09 (f)
// const colorNames = ["Red", "Green", "Blue", "Yellow", "Purple", "Orange", "Black", "White"];
// const userIndexNo = prompt(` ${colorNames} \n Which index you want to add a color? \n "Note: Index no starting from 0"`)
// const userColorName = prompt("Which color you want to add?");
// colorNames.splice(userIndexNo,0,userColorName);
// document.write(`Updated Array: ${colorNames}`);





// QUESTION NO 09 (g)
// const colorNames = ["Red", "Green", "Blue", "Yellow", "Purple", "Orange", "Black", "White"];
// const userIndexNo = prompt(` ${colorNames} \n Which index you want to delete a color? \n "Note: Index no starting from 0"`)
// const deleteColors = prompt("How many colors you want to delete?");
// colorNames.splice(userIndexNo,deleteColors);
// document.write(`Updated Array: ${colorNames}`);


// QUESTION NO 10
const studentScores = [320,230,480,120];
studentScores.sort((a, b) => a - b);
document.write(`Scores of student ${studentScores} <br> Ordered scores of student ${studentScores} `)


// QUESTION NO 11
// const cityNames = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"]
// const selectedCityNames = cityNames.slice(2,4)
// document.write(`Cities List: <br> ${cityNames} <br> Selected Cities List: ${selectedCityNames}`)





// QUESTION NO 12
// const arr = ["This","is","my","cat"];
// const arrIntoString = arr.join(" ")
// document.write(`Array: ${arr} <br> String:${arrIntoString}`)





// QUESTION NO 13
// const devices = ["Keyboard","Mouse","Printer","Monitor"];
// const array = []

// //add one by one
// for (let i=0; i<devices.length; i++){
//     array.push(devices[i]);
// }
// document.write(`Devices: ${array}`)

// //remove one by one in begining
// while(devices.length>0){
//     document.write(`<br> 0UT: ${devices.shift()}`)
// }





// QUESTION NO 14
// const devices = ["Keyboard","Mouse","Printer","Monitor"];
// const array = []

// //add one by one
// for (let i=0; i<devices.length; i++){
//     array.push(devices[i]);
// }
// document.write(`Devices: ${array}`)

// //remove one by one in last
// while(devices.length>0){
//     document.write(`<br> 0UT: ${devices.pop()}`)
// }





// QUESTION NO 15
// Array of phone manufacturers
// const phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// // Start creating the dropdown menu
// let dropdown = '<select>';

// // Add each manufacturer as an option in the dropdown
// for (let manufacturer of phoneManufacturers) {
//     dropdown += `<option value="${manufacturer}">${manufacturer}</option>`;
// }

// // Close the dropdown menu
// dropdown += '</select>';

// // Display the dropdown in the browser
// document.write(dropdown);


// ch 
//======================= ARRAY AND LOOPS ============================


// QUESTION NO 01
// const multiDimensionalArray = [[], [], []];
// document.write(multiDimensionalArray);




// QUESTION NO 02
// const multiDimensionalMatrix = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];
// document.write(`${multiDimensionalMatrix[0]} <br> ${multiDimensionalMatrix[1]} <br> ${multiDimensionalMatrix[2]}`)



// QUESTION NO 03
// for (let i=0; i<=10; i++){
//     console.log(i);
// }





// QUESTION NO 04
// const tableInput = prompt("Enter number to show its multiplication table");
// const lengthOfTable = prompt("Enter length multiplication table");
// document.write(`Multiplication table of ${tableInput} <br> Length ${lengthOfTable} <br>`)

// for(let i=1; i<=lengthOfTable; i++){
//     document.write(`${tableInput} X ${i} = ${tableInput * i} <br>`)
// }





// QUESTION NO 05
// const fruits = ["apple", "banana","mango", "orange","strawberry"]
// for(let i=0; i<=fruits.length; i++){
//     document.write(`Element at ${i} index is ${fruits[i]} <br>`)
// }






// QUESTION NO 06 (a)
// let counting = [];
// for (let i = 1; i <= 15; i++) {
//   counting.push(i) 
// }
// document.write(`Counting ${counting.join(",")} \n`);





// QUESTION NO 06 (b)
// let counting = [];
// for (let i = 1; i <= 15; i++) {
//   counting.push(i) 
// }
// document.write(`Reverse ${counting.reverse().join(",")} \n`);





// QUESTION NO 06 (c)
// const evenNumbers = [];
// for (let i = 1; i <= 15; i++) {
//     if(i % 2 === 0){
//         evenNumbers.push([i])
//     }
// }
// document.write(`Even ${evenNumbers.join(",")} \n`);





// QUESTION NO 06 (d)
// const oddNumbers = [];
// for (let i = 1; i <= 15; i++) {
//     if(i % 2 !== 0){
//         oddNumbers.push([i])
//     }
// }
// document.write(`Odd ${oddNumbers.join(",")} \n`);





// QUESTION NO 06 (e)
// const series = [];
// for (let i = 2; i <= 20; i += 2) { 
//     series.push(`${i}k`); 
// }
// document.write(`Series: ${series.join(", ")} \n`);





// QUESTION NO 07 
// const A = ["cake","applepie","cookie","chips", "patties"];
// const searchPrompt = prompt("Welcome to ABC Bakery.What do you order sir/ma'am");
// if(A.includes(searchPrompt)){
//     alert(`${searchPrompt} is available at index ${A.indexOf(searchPrompt)} in our bakery`);
// }else{
//     alert(`We are sorry ${searchPrompt} is not available in our bakery`);
// }






// QUESTION NO 08
// const largestNumber = [24, 53, 78, 91, 12]
// document.write(`The largest number is ${Math.max(...largestNumber)}`);





// QUESTION NO 09
// const smallestNumber = [24, 53, 78, 91, 12]
// document.write(`The smallest number is ${Math.min(...smallestNumber)}`);




// QUESTION NO 10
// for (let i = 1; i <= 100; i++) {
//     if (i % 5 === 0) { 
//         console.log(i);
// }
// }