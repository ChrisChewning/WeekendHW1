// console.log("hw1");
//
//
// SECTION 1
// //How do we assign a value to a variable?
// const or let, depending on if you want it to be able to change (let), like in loops OR not (const), like in global variables.
//
// 2. How do we change the value of a variable?
// with methods or updating it by reassigning.
//
// 3. How do we assign an existing variable to a new variable?
// let old = let new; ?
//
//
// SECTION 2
//
// Create a variable called firstVariable.
// assign it the value of a string => "Hello World"
// change the value of this variable to a number.
// store the value of firstVariable into a new variable called secondVariable
// change the value of secondVariable to a string.
// What is the value of firstVariable?
// Create a variable called yourName and set it equal to your name as a string.
// Write an expression that takes the string "Hello, my name is " and the variable yourName so that it returns a new string with them concatenated.
// ex: Hello, my name is Jean Valjean

// let firstVariable = "Hello World"; //assigns firstVariable to 1.
// firstVariable = 1; //reassigns to 1.
// let secondVariable = firstVariable; //secondVariable = 1
// secondVariable = 'quartet'; //if you put in let it keeps it at 1.
//
// console.log(firstVariable); //1
// console.log(secondVariable); //1
// console.log(firstVariable); //1 now firstVariable === secondVariable
//
//
// // Create a variable called yourName and set it equal to your name as a string.
// // Write an expression that takes the string "Hello, my name is " and the variable yourName so that it returns a new string with them concatenated.
// // ex: Hello, my name is Jean Valjean
//
// const yourName = 'Chris';
// const expressYoSelf = 'Hello, my name is ' + yourName;
// console.log(expressYoSelf);
//
//
//
// // SECTION 3: booleans
// // Using the provided variable definitions, replace the blanks with a mathematical or boolean operator that evaluates the expression to true. 👋
//   const a = 4;
//   const b = 53;
//   const c = 57;
//   const d = 16;
//   const e = 'Kevin';
// a != b;
// c != d;
// 'Name' === 'Name';
// a + b == c;
// a * a == d;
// e == 'Kevin';
// 48 !== '48'; //does not equal strict equality speaking
//
//
// //SECTION 4:
//
// // Write code that will print out "mooooo" if the variable animal is equal to cow.
// //
// // Change your code so that if the variable animal is anything other than a cow, your should print out "Hey! You're not a cow."
//
//
// const farm = (animal) => {
// if (animal == 'cow') {
//   return 'cow';
// } else {
//   return "Hey! You're not a cow."
// }
// };
// console.log(farm('pig'));
// //make sure the 'cow' and then farm('pig')) are in '' so they are strings.
//
//
// // Write a variable that will hold a person's age.
// //
// // Write code that will print out "Here are the keys", if the age is 16 years or older.
// //
// // Change your code so that if the age is younger than 16, a message will print "Sorry, you're too young."
//
//
//
//
//
// const driversEd = (age) => {
// if (age >= 16) {
//   return "Here are your keys.";
// } else {
//   return "Sorry you're too young.";
// }
// };
// console.log(driversEd(16));
//
//
// // ----------PROBLEM 1: if else if else statement doesnt work ----------
// //
// // const driversEd = (age) => {
// // if (age >= 16) {
// //   return "Here are your keys.";
// // } else if
// // {
// //   return "Sorry you're too young.";
// // } else {
// //   return "Not an age";
// // }
// // };
// // console.log(driversEd(16));
//
//
// //LOOPS
//
// // Write code that will print out all the numbers in the range 0 - 10.
// // for (let i = 1; i <=10; i++) {
// //   console.log(i);
//
//
// // // Write code that will print out all the numbers in the range 10 - 4000.
// // for (let i = 10; i <= 4000; i++) {
// //   console.log(i);
// // }
// // Write code that prints out every other number in the rang 10 - 4000.
// // for (let i = 10; i <=4000; i+=2) {
// //   console.log(i);
// // }
//
//
// //Print out the even numbers that are within the range of 1 - 100.
// //Adjust your code to add a message next to the even number that says: "is an even number".
//

//  for (let i = 2; i <=100; i++) {
//  if (i % 2 === 0) {
//    console.log('the numer ' + i + ' is even');
// //  } else {
// //    console.log('the number ' + i + ' is odd')
// //  }
// // };
// //
//
//
// // For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five.
// // Example Output:
// //
// // I found a 5. High five!
// // I found a 10. High five!
// //
// // for (let i = 0; i <= 100; i++) {
// //   if (i % 5 === 0) {
// //     console.log("I found a " + i + ". High five!")
// //   } else if (i % 3 === 0){
// //     console.log("I found a " + i + ". Three is a crowd.")
// //   }
// // };
//
//
// //----------------------------SAVINGS ACCOUNT----------------
//
// // Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
// // Check your work! Your banck_account should have $55 in it.
// //
// // You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
//
//
//
// // let nums = 0; //const won't work
// // for (let i = 0; i <= 10; i++) {
// //   nums += i;
// // }
// // console.log(nums);
//
//
//
// //-----------------------SUM IT UP----------------------
// // If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// //
// // Find the sum of all the multiples of 3 or 5 below 1000.
//
// // let numbers = 0;
// // for (let i = 1; i < 10; i++) {
// //   if (i % 5 === 0 || i % 3 === 0) {
// //     numbers += i;
// // //console.log(i); // i is now 3,5,6,9  it's in local scope.
// //   }
// // };
// // console.log(numbers); //23
// // console.log(i); i is undefined. you can't reach it in global scope.
//                //error message said: i is not defined.
//
//
// //numbers += numbers[i] would be accessing an array's index. You're not looping through an array's index numbers.
//
//
// //-------------------------EULER---------------------
//
// //Create an array that contains three quotes and store it in a variable called quotes.
//
// // const quotes = ['done is better than perfect', 'kermeyyyy', 'party pontensh'];
// //
// // const randomThings = [1, 10, "Hello", true];
// // randomThings[0];
// // randomThings[2] = "World";
// // console.log(randomThings);
// //
//
//
// //Given the following array const ourClass = ["Gizmo", "Zoom", "Github", "Slack"]
//
// // const ourClass = ["Gizmo", "Zoom", "Github", "Slack"];
// // ourClass[2]; //accesses 3rd element Github.
// // ourClass[2] = "Octocat";
// // ourClass.push("Cloud City"); //adds to the array at the last index.
// // ourClass.unshift("First City"); //adds to the array at the 1st index.
// // ourClass.shift("First City"); //deletes the first array index.
// // console.log(ourClass);
//
//
// // const myArray = [5 ,10 ,500, 20]
// // myArray.push("Egon"); //adds to the last index.
// // myArray.pop(); //deletes "Egon from the last index."
// // myArray.unshift("Bob Marley") //adds to the first index.
// // myArray.shift(); //The easiest way is using shift(). If you have an array, the shift function shifts everything to the left.
// // myArray.reverse();
// // console.log(myArray);
//
//
//
// // const tryItOut = (num) => {
// // if (num < 100) {
// //  alert('little number');
// // } else if {
// //   alert('big number');
// // } else {
// //   alert('monkey');
// // }
// // }
// // console.log(tryItOut(11));
//
// //
// // Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.
//
// const kristynsCloset = [
//   "left shoe",
//   "cowboy boots",
//   "right sock",
//   "GA hoodie",
//   "green pants",
//   "yellow knit hat",
//   "marshmallow peeps"
// ];
//
//
// // What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
// console.log('Kryistyn is rocking that ' + kristynsCloset[2] + ' today!');
//
//
// //
// // // Kristyn can't find her left shoe. Remove this item from her closet and save it to a variable named kristynShoe.
// //
// // let krystinShoe = kristynsCloset.shift(0);
// // console.log(krystinShoe);
// //
// // // Kristyn just bought some sweet shades! Add "raybans" to her closet after "yellow knit hat".
// // //
// //
// // kristynsCloset.splice(5,0, 'raybans'); //splice() starts at the 5th element and removes 0 elements, and inserts 'raybans' there.
// // console.log(kristynsCloset);
// //
// //
// // // Kristyn spilled coffee on her hat... modify this item to read "stained knit hat" instead of yellow.
// // //
// // kristynsCloset.splice(4,1,'stained knit hat'); //.splice starts at the 4th element, removes 1 element, and inserts 'stained knit hat' there.
// // //need to be [] not (). () is okay for methods but not for changing it straight up.
// // console.log(kristynsCloset);
// //
// // Thom's closet is more complicated. Check out this nested data structure!!
// const thomsCloset = [
//   [
//     // These are Thom's shirts
//     "grey button-up",
//     "dark grey button-up",
//     "light blue button-up",
//     "blue button-up",
//   ],[
//     // These are Thom's pants
//     "grey jeans",
//     "jeans",
//     "PJs"
//   ],[
//     // Thom's accessories
//     "wool mittens",
//     "wool scarf",
//     "raybans"
//   ]
// ];
//
// // Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirts array.
//
// console.log(thomsCloset[0][0]); //'grey button up'
//
// console.log(thomsCloset[1][2]); //PJs
//
// console.log(thomsCloset[2][1]); // 'wool scarf'
//
// // Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
// //
// // Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
// //
// console.log('Thom is look fierce in a ' + thomsCloset[0][0] + ', ' + thomsCloset[1][2] + ', and a ' + thomsCloset[2][1] + '.');
//


//
//
// printGreeting
// Write a function called printGreeting with a parameter name that returns a greeting with the argument interpolated into the greeting.
//
// console.log(printGreeting("Slimer"));
// => Hello there, Slimer!

//
// const printGreeting = (hi) => {
//   return "Hello there, " + hi + "!";
// }
//   console.log(printGreeting('Slimer'));

  //
  // Write a function reverseWordOrder that accepts a single argument, a string. The function should return a string with the order of the words reversed. Don't worry about punctuation.
//   //
//   // console.log(reverseWordOrder("Ishmael me Call"));
//   // => "Call me Ishmael"
//   //
//   // console.log(reverseWordOrder("I use Lâncome on my comb"));
//   // => "comb my on Lâncome use I"
//
//
// const reverseIt = (name) => {
// let name.toLowerCase() == name.split('').reverse().join('').toLowerCase();
// return longWord;
// }
// console.log(reverseIt('jar'));
// //unexpected token  . 343
//
//
//
//
// ---------------------------STUCK ON-------------------------------

// // Write a function called calculate.
// //
// // This function should take three arguments, two numbers and a string.
// //
// // Name the parameters num1, num2, and operation.
// //
// // If the function receives the string "add" for the operation parameter, it will return the sum of num1 and num2.
// //
// // If the function receives the string "sub" for the operation parameter, it will return num1 minus num2.
// //
// // Do the same thing for multiplication "mult", division "div", and exponent "exp" (where num2 is the exponent of num1).
// //
// // console.log(calculate(4, 3, "sub"));
//
// => 1
// console.log(calculate(4, 3, "exp"));
//
// => 64

//
// const calculate = (num1, num2, operation) => {
//
//
// }
//ask timothy to show his switch statement




//FUNCTION PRACTICE

// 1. Write a function printCool that accepts one parameter, name as an argument. The function should print the name and a message saying that that person is cool.
//
// console.log(printCool("Captain Reynolds"));
// // => "Captain Reynolds is cool";
// //
//
// const printCool = (name) => {
//   return (name + ' is cool.')
// }
// console.log(printCool('Chris'));
//
//
//
//
// // 2. Write a function calculateCube that takes a single number and prints the volume of a cube made from that number.
//
//   const calculateCube = (cube) => {
//     return cube * cube;
//   }
//   console.log(calculateCube(5));
//


// 3. Write a function isAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case.
//
// console.log(isAVowel("a"));
// => true
//
// const isAVowel = (vowel) => {
//   if (vowel == 'a' || vowel == 'e' || vowel == 'i' || vowel == 'o' || vowel == 'u') {
//   return true;
// } else {
//   return false;
// }
// };
// console.log(isAVowel('a'));
//
// //note: I tried if (vowel == 'a' || 'b' || 'c' || etc.) but whatever I put in was true. It need to check vowel each time. There is a more elegant way to do this, I'm sure.






// 4. Write a function getTwoLengths that accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.
//
// console.log(getTwoLengths("Hank", "Hippopopalous"));
// => [4, 13]

// const getTwoLengths = (string1, string2) => {
//
//   string1 = string1.split(''); //["H", "a", "n", "k"]
//   return string1.length;
//   string2 = string2.split(''); //["P", "e", "n", "c", "i", "l"]
//   return string2.length;
//   //If I just put strin1 = string1.split('')); it gets undefined.
//   // string2 = string2.split('');
//   //cannot say let string1 = strin1.split(''); b.c it'll say string1 has already been declared.
//
//   //If I put return string.length, string2.length;  = 13 b.c it read R to L.
//   //If I put return string.length + string2.length = 17
// }
// console.log(getTwoLengths("Hank", "Pencil"));
// //gets 13 not [4, 13]
//
// // an array simply holds data, all you need to do for that one is store the length of the strings into a new array [], and return it
//
//
// //
// // // 5 Write a function getMultipleLengths that accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.
// // //
// // // console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));
// // // => [5, 4, 2, 2, 4]
//
//
// const getMultipleLengths = (stringLength) => {
//   let results = stringLength.split(' '); //.split(' ') breaks at the space.
//   return results;
// };
// console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));
//
// //Uncaught TypeError: stringLength.split is not a function
//     // at getMultipleLengths (weekendHW1.js:455)
//     // at weekendHW1.js:457
//
//
// // // 6
// // // Define a function maxOfThree that takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned.
// // //
// // // console.log(maxOfThree(6, 9, 1));
// // // => 9
// //
// // //
// // // const myArray = 0;
// // // const maxOfThree = (nums) => {
// // //    if (nums[i] > myArray) {
// // //    return nums;
// // // } else {
// // //   return myArray;
// // // };
// // // console.log(maxOfThree(6, 9, 1));
// // //
// //
// //
// // // 7
// // // Write a function printLongestWord that accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.
// // //
// // // console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));
// // // => "Peanutbutter"
// // //
// //
// // const printLongetWord = () => {
// //
// // }
// // console.log(printLongestWord(['Bojack', 'Priness', 'Dian']));
// //
// // // 8
// // // Write a Javascript function called transmogrify. This function should accept three arguments, which you can assume will be numbers. Your function should return the "transmogrified" result.
// // //
// // // The transmogrified result of three numbers is the product of the first two numbers, raised to the power of the third number.
// // //
// // // For example, the transmogrified result of 5, 3, and 2 is (5 times 3) to the power of 2 is 225.
// // //
// // // console.log(transmogrify(5, 3, 2));
// // // => 225
// //



// // Objects
// // Syntax
// // List and describe each individual piece of syntax that we use to construct an object. Don't leave anything out! The list is finite.
//
// //1st you use const and a const name to declare a variable.
// //2nd you use = { to begin your object. This defines the object.
// //3rd  you use your key: value pairs, whcih add data to your object. Use a comma after each key: value pair.
// //4th you close your object. You can put a comma afterwards if you have mroe than one object. It's also best practice to put a comma at the end of each object?


// // // Me
//   const me = {
//     name: 'Chris',
//     age: 31,
//     email: 'chewning.cl@gmail.com',
//   };
// console.log(me);
//
// console.log(me.name);
// me.age = 32;
// console.log(me.age);
// me['place of residence'] = 'Austin';
// console.log(me['place of residence']); //Austin
//
//
//
//
// // Slimer
// const monster = {
//    name: "Slimer",
//    color: "greenish",
//    type: "plasm or ghost or something"
// }
//
// console.log(monster.name);
// monster.type = 'creature';
// monster.age = 6;
// console.log(monster);
//

// // Given the slimer object:
// // What would you write to access the name and console.log it?
// // What would you write to change the type to 'creature' (without changing it inside the object)
// // What would you write to add a key to the object called age, and set the age to 6?
// // console.log the object to make sure type is creature, and age is 6
// //

// // Ogres
// // Let's say you want to make an adventure game where you are an adventurer and you are going to fight ogres.
// //
// // Using objects, create models and have them interact.
// //
// // how would you model your adventurer? Your adventurer will want a name and hitpoints. What else would your adventurer need?
// //
// // how would you model an ogre? Your ogre will want hitpoints.
// //
// // // Write a very small program that will simulate a battle between your adventurer and an ogre.
// // //
// // When your adventurer's hitpoints reach 0 the game is over.
// // When your ogre's hitpoints reach 0 the game is over.
// // If you want to provide input to the game, you can run it in the Chrome console (but that isn't strictly necessary for now).
//
// const adventurer = {
// name: 'Yowza',
// startPoints: 100,
// // hitpointArm: 10,
// // hitpointLeg: 25,
// attack() {
//   return monster.startPoints -= 5;
// },
// };
//
// const monster = {
//  name: 'Yowzed',
//  startPoints: 100,
//  // hitpointArm: 5,
//  // hitpointLeg: 30,
// attack() {
//   return adventurer.startPoints -= 5;
// }
// };
//
// // console.log(adventurer.attack()); //90
// // console.log(ogre.attack()); //95
// //
// // console.log(adventurer.attack()); //90
// // console.log(ogre.attack()); //95
//
//
// for (let i = 0; adventurer.startPoints >= 0 && monster.startPoints >= 0; i++) {
// // if (Math.floor(Math.random() * 2)) {
//   //Math.floor takes out your decimals. Rounds it down.
//   //Math.random make a point b.w 0 to 1, but not 0 or 1 integers
//
// // if (Math.floor().Math.random() * 3) {}
// //  let one = chipotle.attack();
// //  let two = pterrys.attack();
// //how to randomize these two functions
//
// let rand = Math.floor(Math.random() * 2); //Math.floor() parameter is Math.random() * 3)
// console.log(rand);
// if (rand == 0) {
//   adventurer.attack();
// } else {
//   monster.attack();
// }
//
//  // Math.random().chipotle.attack(); //returns a floating p. 0 - 1
//  //used && bc both conditions need to be true or it'll keep running.
//
//  if (adventurer.startPoints == 0) {
//     console.log("Monster wins. Burrito tiempo!");
//  } else {
//    console.log("Adventurer wins. Get that veggie burger!!");
// }
//
// };
