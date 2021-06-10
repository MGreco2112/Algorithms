/*
Diff Two Arrays

Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Note: You can return the array with its elements in any order.
*/

/*
0) sort both arrays
1) iterate through both arrays
2) locate any differences between the arrays
3) push arr1[i] to newArr
4) return newArr
*/




function diffArray(arr1, arr2) {
    arr1.sort((a,b) => {
        if (a < b) {
            return -1
        } else if (a > b) {
            return 1
        }
        return 0
    })

    arr2.sort((a,b) => {
        if (a < b) {
            return -1
        } else if (a > b) {
            return 1
        }
        return 0
    })

  const newArr = [];

  console.log(arr1);
  console.log(arr2);

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] == arr2[j]) {
                newArr.push(arr1.splice(i,1)[0])
                newArr.push(arr2.splice(j,1)[0])
                i--
                j--
            }
        }
    }

    console.log(newArr);
    

    const remaining = [...arr1, ...arr2]



  return remaining
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

/*
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) should return an array.

["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["pink wool"].

["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return an array with one item.

["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["diorite", "pink wool"].

["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return an array with two items.

["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"] should return [].

["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"] should return an empty array.

[1, 2, 3, 5], [1, 2, 3, 4, 5] should return [4].

[1, 2, 3, 5], [1, 2, 3, 4, 5] should return an array with one item.

[1, "calf", 3, "piglet"], [1, "calf", 3, 4] should return ["piglet", 4].

[1, "calf", 3, "piglet"], [1, "calf", 3, 4] should return an array with two items.

[], ["snuffleupagus", "cookie monster", "elmo"] should return ["snuffleupagus", "cookie monster", "elmo"].

[], ["snuffleupagus", "cookie monster", "elmo"] should return an array with three items.

[1, "calf", 3, "piglet"], [7, "filly"] should return [1, "calf", 3, "piglet", 7, "filly"].

[1, "calf", 3, "piglet"], [7, "filly"] should return an array with six items.
*/