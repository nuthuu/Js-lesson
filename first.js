 //My JavaScript lessons
 
 
 /*var myDecimal = 5.2 * 2.1 ;
 console.log(myDecimal);*/

/* var myStr = "i come first" + "i come second";
 console.log(myStr);*/

 //concatenating with shortcut
 /*var myStr = "i come first"
myStr += "i come second";
console.log(myStr); */



/*var ourStr = "This is my first sentence."
ourStr += "This is my second sentence.";
console.log(ourStr);*/

//concatenate with variable
/*var myName = "Eric Nuthu";
var myStr = "My name is " + myName + " how are you";
console.log(myStr);*/

//appending strings to variables
/*var myName = "Erick Nuthu";
var ourStr = "is awesome!";
myName += ourStr ;*/

//finding length of string
/*var firstNameLength = 0;
var firstName = "Erick";
firstNameLength = firstName.length;
console.log(firstNameLength);*/

//bracket notation 
/*var firstLetterOfName = "";
var firstName = "Erick";
firstLetterOfName = firstName[0];
console.log(firstLetterOfName);*/

//string are immutable meaning they cant be altered when created
/*var myStr = "Hello World";
myStr[0] = "J"; //fix me    
console.log(myStr);*/
//error

//finding length with no knowledge of length of string
/*var lastName = "Nuthu";
var lastLetterOfLastName = lastName[lastName.length -1];
console.log(lastLetterOfLastName);*/

/*var lastName = "Nuthu";
var secondToLastLetterOfLastName = lastName[lastName.length -2];
console.log(secondToLastLetterOfLastName);*/


//wordblanks

// function wordblanks(myNoun, myAdjective, myVerb, myAdverb){
//     var result ="";
//     result += "The " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb ;
//     return result
// }
// console.log(wordblanks("dog", "black","barks", "loudly." ));
// console.log(wordblanks("cat", "shy", "meows", "quietly."));


//arrays

// var myArray = ["Erick", 19];
// console.log(myArray);

//nested arrays

// var myArray = [["Erick", 19] , ["Cherryl", 20]];
// console.log(myArray);


//finding indexes in arrays

// var myArray = [25, 38, 86, 76, 34, 55]
// var ourData = myArray[1];
// console.log(ourData);


//modify array with bracket notation

// var myArray = [47, 84, 82, 39, 47, 64];
// myArray [3] = 10;
// console.log(myArray);


//accessing multidimensional array

// var myArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// var myData = myArray [1] [1];
// console.log(myData);


//manupilating data in an array

// var myArray = [["erick", 19], ["cherryl", 20], ["rachel", 53]];
// myArray.push(["merryl", 15]);
// console.log(myArray);


// manipulate array using pop()
// var myArray = [["erick", 19], ["cherryl", 20], ["rachel", 53]];
// var removeFromArray = myArray.pop();
// console.log(myArray);


//manipulate using shift()
//  var myArray = [["erick", 19], ["cherryl", 20], ["rachel", 53]];
//  var removeFromArray = myArray.shift();
//  console.log(myArray);


 //using unshift

//  var myArray = [["erick", 19], ["cherryl", 20], ["rachel", 53]];
//   myArray.shift();
//   myArray.unshift(["jackson", 12]);
//   console.log(myArray);


//array list

// var myList = [["onions",5], ["cabbage",2], ["lettuce",10], ["tomatoes",10], ["milk",3], ["sugar",2]];
// console.log(myList);


//passing in values to functions

// function myFunction(a, b){
//     console.log(a-b);
// }
// myFunction(20, 4);//output 16

// function myFunction(a, b){
//     console.log(a+b);
// }
// myFunction(20, 4);//output 24


//global scope and functions

// var myGlobal = 15;

// function try1(){
//     tryGlobal = 10;
  
// }
// function try2(){
//     var output  ="";
//     if (typeof myGlobal != "undefined"){
//         output += "myGlobal:" + myGlobal;
//     }
//     if(typeof tryGlobal!="undefined"){
//         output += "tryglobal:" + tryGlobal;
//     }
//     console.log(output);
// }
// try1();
// try2();


//local scope and functions

// function myScope(){
//     var myVar = "eric";
//     console.log(myVar);
// }
// myScope();


// accessing global scope in function

// var lunchFood = "chicken and fries"
// function myFood(){
//     var lunchFood = "rice and peas";
//     return lunchFood;
// }
// console.log(myFood());//output rice and peas
// console.log(lunchFood);//output rice and peas ,chicken and fries


//return a value from a function with return

// function minusFive(num){
//     return num -5;
// }
// console.log(minusFive(15));

// function timesFive(num){
//     return num *5;
// }
// console.log(timesFive(20));


//assign return value to variable
//  var changed = 0;

//  function change(num){
//     return (num+5)/3;   
//  }
//  changed=change(7);
//  console.log(changed); //returned 4


 //booleans with conditional statements

//  function ourTrueOrFalse(isItTrue){
//     if(isItTrue){
//         return "yes, its true";
//     }
//     return "No its not true";
//  }

//  function TrueOrFalse(wasThatFalse){
//     if(wasThatFalse){
//         return "Yes ITS TRUE";
//     }
//     return "No ITS NOT TRUE";
//  }
// console.log(ourTrueOrFalse(false));
// console.log(TrueOrFalse(true));


//comparison with equality operators

// function testEqual(val){
//     if(val==20){
//         return "YES it is equal";
//     }
//     return "NO its not equal";
// }
// console.log(testEqual(20));

// function compareEquality(a, b){
//     if(a==b){
//         return "yes it is equal";
//     }
//     return "no its not equal";
// }
// console.log(compareEquality(11,11));



//comparison with strict equality operators

// function testStrict(val){
//     if(val===20){
//         return "YES it is equal";
//     }
//     return "NO its not equal";
// }
// console.log(testStrict(20));

// function compareStrictEquality(a,b){
//     if(a===b){
//         return "yes its equal";
//     }
//     return "no its not equal";
// }
// console.log(compareStrictEquality(15, 5));


//inequality operator
// function testInequality(a,b){
//     if(a!=b){
//         return "yes its not equal";
//     }
//     return "no its equal";
// }
// console.log(testInequality(35,36));

// function testStrictInequality(a,b){
//     if(a!==b){
//         return "yes its not equal";
//     }
//     return "no its equal";
// }
// console.log(testStrictInequality(35,36));


//if,else and else if statements

// function orderMyLogic(val){
//     if(val<5){
//         return "less than 5";
//     }elseif(val<10);{
//         return "less than 10";
//     }else{
//         return "Greater or equal to 10";
//     }
// }
// console.log(orderMyLogic(7));


//switch loop

// function caseInSwitched(val){
//     var answer = "";
//     switch (val){
//     case 1:
//         answer="Alpha";
//         break;
//     case 2:
//         answer="beta";
//         break;
//     case 3:
//         answer="gamma";
//         break;
//     case 4:
//         answer="delta";
//         break;
//     }
//     return answer;
// }
// console.log(caseInSwitched(3));


//else if chain to switch

// function chainToSwitch(val){
//     var answer="";

//     switch(val){
//         case "eric":
//             answer="Nuthu";
//             break;
//         case 42:
//             answer="The answer";
//             break;
//         case 1:
//             answer="There is no #1";
//             break;
//         case 99:
//             answer="Missed me by this much";
//             break;
//         case 7:
//             answer="Ate Nine";
//             break;
//     }
//     console.log(chainToSwitch(eric));
// }


//returning boolean values from functions

// function isLess(a, b){
//     return a < b;
// }
// console.log(isLess(10, 20));


//building objects

// var myDog = {
//     "name": "Kelly",
//     "legs": "4",
//     "tails": "1",
//     "friends": []
// }
// console.log(myDog);


//dot notation

// var myDog = {
//     "name": "Kelly",
//     "legs": "4",
//     "tails": "1",
//     "friends": []
// }
// var nameValue = myDog.name;
// var legsValue = myDog.legs;
// var tailsValue = myDog.tails;

// console.log(nameValue, legsValue, tailsValue);

 
//using bracket notation

// var testObj = {
//     "an entree" : "hamburger",
//     "my side" : "veggies",
//     "the drink" : "soda"
// };
// var entreeValue = testObj["an entree"];
// var drinkValue = testObj["the drink"];
// console.log(entreeValue, drinkValue);


//using variables

// var testObj = {
//     "19" : "Eric",
//     "20" : "Cherryl",
//     "14" : "merryl",
//     "12" : "jackson"
// };
// var childAge = 12;
// var child =testObj[childAge];
// console.log(child);


//updating object properties

// var mySister = {
//     "name" : "Cherryl",
//     "Age" : "20",
//     "friends" : "3",
//     "boyfriend" : "john"
// };
// mySister.boyfriend = "Enoch";
// console.log(mySister); //updated to enoch.

// //adding properties to object
// var mySister = {
//     "name" : "Cherryl",
//     "Age" : "20",
//     "friends" : "3",
//     "boyfriend" : "Enoch"
// };
// mySister.phones = "samsung";
// console.log(mySister);
// //using bracket notation
// var mySister = {
//     "name" : "Cherryl",
//     "Age" : "20",
//     "friends" : "3",
//     "boyfriend" : "Enoch"
// };
// mySister["phones"] = "samsung";
// console.log(mySister);


//deleting properties from objects
// var mySister = {
//     "name" : "Cherryl",
//     "Age" : "20",
//     "friends" : "3",
//     "boyfriend" : "Enoch"
// };
// delete mySister.friends;
// console.log(mySister);


// objects for lookups

// function contactLookup(val){
//     var result = "";

//     var lookup = {
//         "Alpha" : "Adams",
//         "Bravo" : "Boston",
//         "Charlie" : "Chicago",
//         "delta" : "Denver",
//         "echo" : "easy",
//         "foxtrot" : "frank"
//     };
//     result = lookup[val];
//     return result;
// }
// console.log(contactLookup("Bravo"));


//testing objects for properties

// var lookup = {
//     "Alpha" : "Adams",
//     "Bravo" : "Boston",
//     "Charlie" : "Chicago",
//     "delta" : "Denver",
//     "echo" : "easy",
//     "foxtrot" : "frank"
// };
// function checkObj(checkProp){
//     if (lookup.hasOwnProperty(checkProp)){
//         return lookup[checkProp];
//     }
//     else{
//         return "Not found";
//     }
// }
// console.log(checkObj("Charlie"));


//manipulating complex objects
// var mySiblings = [ 
//     {
//         "name" : "Cherryl",
//          "Age" : "20",
//          "friends" : "3",
//          "boyfriend" : "Enoch"
//     },
//     {
//         "name" : "jackson",
//          "Age" : "12",
//          "friends" : "5",
//          "girlfriend" : ""
//     }
// ];
// console.log(mySiblings);
     

//nested objects

// var myStorage = {
//     "car" : {
//         "inside" : {
//             "glove box" : "bottles and map",
//             "passenger seat" : "bag"
//         },
//         "outside" : {
//             "trunk" : "more bags"
//         }
//     }
// };

// var gloveBoxContents = myStorage.car.inside["glove box"];
// console.log(gloveBoxContents);
// var passengerSeatContents = myStorage.car.inside["passenger seat"];
// console.log(passengerSeatContents);
// var trunkContents = myStorage.car.outside["trunk"];
// console.log(trunkContents);


//nested arrays
var myPlants = [
    {
        type:"flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type:"trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];
var firstFlower = myPlants[0].list[0];
console.log(firstFlower);
var secondFlower = myPlants[0].list[1];
console.log(secondFlower);
var thirdFlower = myPlants[0].list[2];
console.log(thirdFlower);


// var thirdTree = myPlants[1].list[2];
// console.log(thirdTree);
// var secondTree = myPlants[1].list[1];
// console.log(secondTree);
// var firstTree = myPlants[1].list[0];
// console.log(firstTree);



