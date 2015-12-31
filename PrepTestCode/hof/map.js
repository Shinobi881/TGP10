var numbersArray = [20, 30, 12, 56, 35];
var stringObj = {prop1: 'hello', prop2: 'greetings', prop3: 'salutations', prop4: 'Hola'};
// Recieve a list or collection to iterate through
// Recieve a callback to apply to 'each' item in the collection

function addFive(val) {
  console.log(val + 5);
};



function newEach(collection, callback) {
  // Check if the collection is an array
  if (typeof collection !== 'object') {
    console.log('Please give me a data structure!');
    return; 
  }

  if (Array.isArray(collection)) {
    // Yes
    // Loop through the collection
    for (var i = 0; i < collection.length; i++) {
    // Apply the callback to each item
      // Apply a side efect to something outside the function 
      callback(collection[i], i);
    }
  } else {
    for (var key in collection) {
      callback(collection[key], key);
    }
  }
}

// newEach(numbersArray, function(num, index){
//   console.log('num time 2: ', num * 2, ' at index: ', index);
// });

// newEach(stringObj, function(greeting, key) {
//   console.log('Greeting : ', greeting + '?!?!', ' at index: ', key);
// });

function newMap(collection, callback) {
  var returnedArray = [];
  
  newEach(collection, function(val){
    returnedArray.push(callback(val));
  });
  
 return returnedArray; // [6, 7, 8, 9, 10]


}


console.log('Your new blah: ', newMap(stringObj, function(str){

  return str + '!!!';

}));


console.log('Your new Array of numbers: ', newMap(numbersArray, function(num){

  return num + 5;

}));

