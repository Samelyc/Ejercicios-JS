
/* Write a program to compute the sum and product (multiplication) of an array of numbers. Print out the sum and the product.
Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24. */

function sumaYProducto(arr) {
    let sum = 0;
    let producto = 1;

    for (let num of arr) {
        sum += num;  
        producto *= num; 
    }

    // Print the results
    console.log(`The sum is ${sum}.`);
    console.log(`The product is ${producto}.`);
}

// Example usage
const numeros = [1, 2, 3, 4];
sumaYProducto(numeros); // Output: The sum is 10. The product is 24.
