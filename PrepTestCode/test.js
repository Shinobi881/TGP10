// Recieve a list or collection to iterate through
// Recieve a callback to apply to 'each' item in the collection
// Check if the colletion is an object or an array
// Apply the callback to each item
  // Apply a side efect to something outside the function 
// Iterate collecetion[index + 1] 


// Take in a collection 
// Apply a callback to each element in the collection 
// return a new array of each modiffied element

// Input: Collection | sapmle: [1, 2, 3, 4, 5];
// Output: New array | sample: [6, 7, 8, 9, 10];
// Edge casses: 
// User: 
// Time complexity 
// Space complexity

// Declare a function called newMap

// Output: [6, 7, 8, 9, 10];

// Create a collection to iterate through
// [1, 2, 3, 4, 5] add 5 to each element 
var numbersArray = [20, 30, 12, 56, 35];
var stringObj = {prop1: 'hello', prop2: 'greetings', prop3: 'salutations', prop4: 'Hola'};
// Add !!! to each element

// Sample output: ['hello!!!', 'greetings!!!'...]
// Other sample output: [{prop1: 'hello!!!'},  {prop2: 'greetings!!!'}...];




function newMap(collection, callback) {
  // Create an empty array to store the modified values
  var returnedArray = [];
  
  // Check if collection type is an Array
  if (Array.isArray(collection)) {
    // yes
    console.log('collection is: ',  collection);

     // Loop to iterate through the collection
    for (var i = 0; i < collection.length; i++) {
      // Callback to apply to the elements
      // Recieve results from callback
      returnedArray.push(callback(collection[i]));
    }
    // otherwise 
  } else {
    // Loop to iterate through the collection
    for (var key in collection) {
      // Callback to apply to the elements
      // Recieve results from callback
      returnedArray.push(callback(collection[key]));
    }
  }
  
  // Return modified array
    return returnedArray; // [6, 7, 8, 9, 10]


}


console.log('Your new blah: ', newMap(stringObj, function(str){

  return str + '!!!';

}));


console.log('Your new Array of numbers: ', newMap(numbersArray, function(num){

  return num + 5;

}));

newMap.prop1 = 'our new map prop';
console.log(newMap);
