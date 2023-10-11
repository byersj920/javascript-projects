// Write a function called 'divide' that takes two parameters: a numerator and a denominator.

// Your function should return the result of numerator / denominator.

// However, if the denominator is zero you should throw the error, "Attempted to divide by zero."

// Code your divide function here:

let autoDivider = function(numerator, denominator){
    if (numerator === 0){
        throw Error("You can't divide by zero!");
    }
    return (numerator/denominator);
};

console.log(autoDivider(0, 3));