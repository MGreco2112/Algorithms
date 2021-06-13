/*
Sum All Numbers in a Range

We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
*/

function sumAll(arr) {
    let sum = 0

    arr.sort((a,b) => {
        if (a < b) {
            return -1
        } else if (a > b) {
            return 1
        }

        return 0
    })

    for (let i = arr[0]; i <= arr[arr.length - 1]; i++) {
        sum += i
    }

    console.log(sum);

  return sum;
}

sumAll([5, 10]);

/*
sumAll([1, 4]) should return a number.

sumAll([1, 4]) should return 10.

sumAll([4, 1]) should return 10.

sumAll([5, 10]) should return 45.

sumAll([10, 5]) should return 45.
*/