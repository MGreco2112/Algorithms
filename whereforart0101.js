/**
Wherefore art thou

Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.

*/

// function whatIsInAName(collection, source) {
//   var arr = [];

//     const sourceKeys = Object.keys(source)
    
//     for (let i = 0; i < collection.length; i++) {
//         Object.keys(collection[i]).forEach(key => {
//             if (collection[i].hasOwnProperty(sourceKeys[0]) && collection[i][key] == source[sourceKeys[0]]) {
//                 arr.push(collection[i])
    
//             }

//         })
        
//     }


//     console.log(arr);
//   // Only change code above this line
//   return arr;
// }

//revisited 10/7/2022

function whatIsInAName(collection, source) {
  const arr = [];
  // Only change code below this line
  const sourceKeys = Object.keys(source);

  for (let i = 0; i < collection.length; i++) {
    let same = true;

    for (let j = 0; j < sourceKeys.length; j++) {
        if (collection[i][sourceKeys[j]] != source[sourceKeys[j]]) {
          same = false;
        }
    }

    if (same) {
      arr.push(collection[i]);
    }
  }

  // Only change code above this line
  return arr;
}


console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }));


/**
whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }) should return [{ "apple": 1, "bat": 2, "cookie": 2 }].

whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 }) should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }].

whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3}) should return []
*/