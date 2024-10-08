/* Write a function that:
Takes in an array of numbers.
Doubles the value of each number in the array.
Prints out the new updated array.
Example: Given an array [1, 2, 4, 5]. The output should be [2, 4, 8, 10] 
*/

function doubleArrayValues(arr) {
    const doubledArray = arr.map(num => num * 2); 
    console.log(doubledArray); 
}

const numbers = [1, 2, 4, 5];
doubleArrayValues(numbers);