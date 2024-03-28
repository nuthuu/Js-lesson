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

// var myPlants = [
//     {
//         type:"flowers",
//         list: [
//             "rose",
//             "tulip",
//             "dandelion"
//         ]
//     },
//     {
//         type:"trees",
//         list: [
//             "fir",
//             "pine",
//             "birch"
//         ]
//     }
// ];
// var firstFlower = myPlants[0].list[0];
// console.log(firstFlower);
// var secondFlower = myPlants[0].list[1];
// console.log(secondFlower);
// var thirdFlower = myPlants[0].list[2];
// console.log(thirdFlower);


// var thirdTree = myPlants[1].list[2];
// console.log(thirdTree);
// var secondTree = myPlants[1].list[1];
// console.log(secondTree);
// var firstTree = myPlants[1].list[0];
// console.log(firstTree);

// var collection = {
//     "2548" :{
//         "album" : "Slippery when wet",
//         "artist" : "Bon Jovi",
//         "tracks": [
//             "Let It Rock",
//             "You Give Love a Bad Name"
//         ]
//     },
//     "2468": {
//         "album": "1999",
//         "artist": "prince",
//         "tracks": [
//             "1999",
//             "Little Red Corvette"
//         ]
//     },
//     "1245": {
//         "artist" : "Robert Palmer",
//         "tracks" : [ ] 
//     },
//     "5439": {
//         "album": "ABBA Gold"
//     }
// };

// var collectionCopy = JSON.parse(JSON.stringify(collection));

// function updateRecords(id, prop, value){
//     if (value === ""){
//         delete collection [id][prop];
//     }else if(prop==="tracks"){
//         collection [id][prop] = collection [id][prop] || [];
//         collection [id][prop].push(value);
//     }else{
//         collection[id][prop]=value;
//     }

//     return collection;
// }

// updateRecords(2468, "track", "test");
// console.log(updateRecords(5439, "artist", "ABBA"));


//while loops
// myArray= [];

// var i = 0;
// while(i < 50){
//     myArray.push(i);
//     i++;
// }
// console.log(myArray);

//for loops
// ourArray= [];

// for(var i = 1; i < 10; i++ ){
//     ourArray.push(i);
// }
// console.log(ourArray);

//odd numbers incrementation
// ourArray= [];

// for(var i = 1; i < 10; i+=2){
//     ourArray.push(i);
// }
// console.log(ourArray);

//even numbers incrementation
// ourArray= [];

// for(var i = 0; i < 10; i+=2){
//     ourArray.push(i);
// }
// console.log(ourArray);


//count backwards with for loops

// var ourArray= [];
// for (var i = 10; i > 0; i-=2){
//     ourArray.push(i);
// }
// console.log(ourArray);


//iterate thru an array with for loop

// var myArr = [2, 3, 4, 5, 6, 7, 8];
// var myTotal=0;

// for(var i = 0; i < myArr.length; i++){
//     myTotal+=myArr[i];
// }
// console.log(myTotal);


//nesting for loops

// function multiplyAll(arr){
//     var product = 1;
//     for(var i = 0; i < arr.length; i++){
//         for(var j=0; j < arr[i].length; j++){
//             product*=arr[i][j]
//         }
//     }
//     return product;
// }


// var product = multiplyAll ([[1, 2],[3, 4],[5, 6, 7]]);

// console.log(product);


//iterate with do..while loops
//  var myArr=[];
//  var i=10;

//  do{
//     myArr.push(i);
//     i++;
//  }
//  while(i<5);
//  console.log(i, myArr);


 //coding challenge profile lookup

//  var contacts=[
//     {
//         "firstName" : "Akira",
//         "lastName" : "Laine",
//         "number" : "7429427287",
//         "likes" : ["Pizza", "Coding", "Brownie Points"]
//     },
//     {
//         "firstName" : "Harry",
//         "lastName" : "Potter",
//         "number" : "2894247482",
//         "likes" : ["Hogwarts", "Magic", "Hagrid"]
//     },
//     {
//         "firstName" : "Sherlock",
//         "lastName" : "Homes",
//         "number" : "2839i209428",
//         "likes" : ["Intriguing Cases", "Violin"]
//     },
//     {
//         "firstName" : "Kristian",
//         "lastName" : "Vos",
//         "number" : "Unknown",
//         "likes" : ["JavaScript", "Gaming", "Foxes"]
//     }
//  ];

//  function lookUpProfile(name, prop){
//     for(var i=0; i<contacts.length; i++){
//         if(contacts[i].firstName===name){
//             return contacts[i][prop] || "No Such Property";
            
//         }
//     }
//     return "No Such Contact";
//  }
//  var data=lookUpProfile("Kristian", "likes");
//  console.log(data);


 //generate random fractions

//  function randomFunction(){
//     return Math.random();
//  }
//  console.log(randomFunction());

 //whole numbers
//  var randomNumberBetween0and19 = Math.floor(Math.random()*20);
//  function randomWholeNumber(){
//     return Math.floor(Math.random()*10);
//  }
//  console.log(randomWholeNumber);


//random number between a range

// function randomRange(myMin, myMax){
//     return Math.floor(Math.random()*(myMax-myMin+1))+myMin;
// }
// var myRandom=randomRange(1, 20);
// console.log(myRandom);


//parseINT function
// function convertToInteger(str){
//     return parseInt(str);
// }
// console.log("40");

// function convertToInteger(str){
//     return parseInt(str, 2);
// }
// console.log(10011);


//multiple ternary operator
// function checkSign(num){
//     return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
// }
// console.log(checkSign(-10));


// //mutate an array declared with const

// const s=[5, 7, 2];
// function editInPlace(){
//     "use strict";

//     s[0]=3;
//     s[1]=8;
//     s[2]=6;
// }
// editInPlace();
// console.log(s);


//prevent object mutation

// function freezeObj(){
//     "use strict";
//     const MATH_CONSTANTS = {
//         PI : 3.145
//     };

//     Object.freeze(MATH_CONSTANTS);

//     try {
//         MATH_CONSTANTS.PI = 4;
//     }catch(ex){
//         console.log(ex);
//     }
//     return MATH_CONSTANTS.PI;
// }
// const PI=freezeObj();


//arrow function    
// var magic = function(){
//     return new date();
// };
// //same as this
// const magic = () => new date(); 


//arrow function with parameters
//  var myConcat = function(arr1, arr2){
//     return arr1.concat(arr2);
//  };
//  console.log(myConcat([1, 2], [3, 4, 5]));
 //same as
//  const myConcat = (arr1, arr2) => arr1.concat(arr2);
//  console.log(myConcat([1, 2], [3, 4, 5]));


 //default parameters
//  const increment = (function(){
//     return function increment(number, value=1){
//         return number+value;
//     };
//  })();
//  console.log(increment(5, 8));
//  console.log(increment(6));


 //rest operators
//  const sum = (function(){
//     return function sum (...args){
//         return args.reduce((a, b) => a+b,);
//     };
//  })();
//  console.log(sum(1, 5, 7, 4));


 //spread operator
//  const arr1 = ["Jan", "Feb", "Mar", "Apr", "May"];
//  let arr2;
//  (function(){
//     arr2=[...arr1];
//     arr1[0]= "Fries"
//  })();
// console.log(arr2);
//using slice method
// const arr1 = ["Jan", "Feb", "Mar", "Apr", "May"];
// const arr2 = arr1.slice();
// arr2[0] = "fries";
// console.log(arr1);
// console.log(arr2);


//simple fields
// const createPerson = (name, age, gender) =>{
//     return{
//         name: "name",
//         age: "age",
//         gender : "gender"
//     };
// };
// console.log(createPerson("Erick Nuthu", 20, "male"));
// easier way
// const createPerson= (name, age, gender) => ({name, age, gender});
// console.log(createPerson("Eric Nuthu", 19, "Male"));


 //declarative functions
// const bicycle = {
//     gear:2,
//     setGear(newGear){
//         "use strict";
//         this.gear = newGear;
//     }
// };
// bicycle.setGear(3);
// console.log(bicycle.gear);


//class syntax
// class spaceShuttle {
//     constructor(targetPlanet){
//         this.targetPlanet=targetPlanet;
//     }
// }
//     var zues = new spaceShuttle("jupiter");
//     console.log(zues.targetPlanet)

//     function makeClass(){
//         class  vegetable{
//             constructor(name){
//                 this.name=name;
//             }
//         }
//         return vegetable;
//     }
//     const vegetable=makeClass();
//     const spinach = new vegetable("spinach");
//     console.log(spinach.name);


//getters and setters
//obtain temp in celsius
// function makeClass() {
//     class Thermostat{
//         constructor (temp){
//             this._temp=5/9 * (temp-32);
//         }
//         get temperature(){
//             return this._temp;
//         }
//         set temperature(updatedTemp){
//             this._temp=updatedTemp;
//         }
//     }
//     return Thermostat;
// }

// const Thermostat = makeClass();
// const thermos = new Thermostat(76);
// let temp = thermos.temperature;
// thermos.temperature=26;
// temp=thermos.temperature;
// console.log(temp);


//import and export
// import { capitalizeString } from "./string_function.mjs";
// const cap=capitalizeString("hello!");
// console.log(cap);



//getting the sum of numbers divisible by 3,5,7 within a range.

function sumOfMultiples(n){
    let sum = 0;
    for(i=1; i<=n; i++){
        if(i%3===0 || i%5===0 || i%7===0){
            sum += i;
        }
    }
    return sum;
};

const n = 10;
const result=sumOfMultiples(n);
 console.log("Sum of all numbers divisible by 3, 5, or 7 up to", n , "is:", result);
 //output is 40
