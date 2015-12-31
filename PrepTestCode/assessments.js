// ###String: 'Javascript is super duper awesome'
// ####1. Print to the Javascript console the 5 letter in a string (no variables allowed)
console.log('Javascript is super duper awesome'.slice(0,5));


// ####2. Loop through a string and print each character to the Javascript console (the only variable allowed is the iterator)
for (var i=0; i<'Javascript is super duper awesome'.length; i++){

  console.log('Javascript is super duper awesome'.slice(i, i+1));
}


// ####3. Copy and refactor problem 2 using a `while` loop
// j as a counter variable.
var j=0;

while(j<'Javascript is super duper awesome'.length){

  console.log('Javascript is super duper awesome'.slice(j, j+1));
  j++;

}


// ###Object: myProfileObject = {};
// ####4. Add to `myProfileObject` the properties and values ('key, value pairs'): 
//   1. 'school' set to 'Telegraph Prep'
//   2. 'location' set to 'Berkeley, California'
//   3. 'name' set to your name
//   **NOTE: Explain the method you are using to do this (hint: '_____, notation')**

// create an empty opject named myProfileObject
myProfileObject = {};

// add new properties and values to the object myProfileObject. 
myProfileObject.school = 'Telegraph Prep';
myProfileObject.location = 'Berkeley, California';
myProfileObject.name = 'Eiko Mitani';


// ####5. Create a function that takes, an object and a name as parameters. It will return a new object with ONLY these properties:
//   1. Your first and last name ex: **`name`: `'Bobby Tables'`**
//   2. Your `place of birth`: city, state (or equivalent), country
//   3. Your `hobby` or favorite activity
//   4. A method that prints: 'My first name is [first name]' and my last name is '[last name]'
//     - This method must use the 
// **NOTE: test your function by passing in the 'myProfileObject' as a parameter and console.log the result**

function printProfile (obj, name){
  // creat a new empty object named newObject
  var newObject ={};
  
  // add specific properties from passed object to new emptry object newObject.
  newObject.fullName = obj.name;
  newObject.placeOfBirth = 'Japan';
  newObject.hobby = 'Hot tubbing';
  
  // split a fullname string into an array of first name and last name.
  var splitName = newObject.fullName.split(' ');

  // a method that prints first name and last name
  newObject.printMyName = function() {
    console.log('My first name is ' + splitName[0] + ' and my last name is ' + splitName[1]); 
  };
  // call a method to print my first and last name.
  newObject.printMyName();

  //return a new object with 3 specific properties and values.
  return newObject;
}
//log new object with 3 specific properties and values.
console.log (printProfile(myProfileObject)); 


// ####6. Create a function that takes a name as an parameter and returns 'true' if it is equivalent to the 'name' property returned from the function call above.

// assign the returned object to a variable 'printObj'
var printedObj = printProfile(myProfileObject);

var evalName = function (name){
  //check passed name is same as the one from the returned object.
  if(printedObj.fullName === name){
    // return true b/c the names are the same
    return true;  
  }
  else
    return false;
}
// call the function to evaluate the name entered here.
console.log ('Is the name same? :', evalName('Eiko Mitani'));


//####7. Create a function that takes an object as a parameter and returns the 'length' of the object
var objLength = function(obj) {

  // 'count' stores the number of properties in an object.  
  var count = 0; 
  
  // check the number of properties in an object.
  for (var key in obj) {
    // check that particular property exists in the object
    if (obj.hasOwnProperty(key)){
      count ++; 
      }   
  }
  // return the number of length (the number of properties) in the object.
  return count;
};
// Get the length of an object
console.log ('Length of an object:', objLength(myProfileObject));


// ###Array: javaScriptArray = ['J', 'a', 'v', 'a'];
// ####8. Create a function that modifies the `javaScriptArray` to be filled with '['J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't']'

var modifyString = function (){
  // original array 
  var javaScriptArray = ['J', 'a', 'v', 'a'];

  // add the letters 'script' to the javaScriptArray array
  javaScriptArray.push('S','c','r','i','p','t');

  // log the new array  
  console.log ('javaScriptArray:', javaScriptArray); 
}
// call to modify the javaScriptArray
modifyString();


// ####9. Create a function that modifies the 'javaScriptArray' and returns a NEW array with '['JavaScript']''
var modifyArray = function (){
  // original array
  var javaScriptArray = ['J', 'a', 'v', 'a'];  
  var result ='';
  var newArray = [];

  // add the letters 'script' to the javaScriptArray array
  javaScriptArray.push('S','c','r','i','p','t');  

  // Joins the letters of an array into a string, and returns the string 'result'
  result = javaScriptArray.join('');

  // add the string to an empty array 'newArray' as an element.
  newArray.push(result);
 
  // return the array 'newArray'
  return newArray;
}
// call modifyArray function and log returned newArray.
console.log('modifyArray():', modifyArray());



