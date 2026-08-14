// ===== PART 1: Function declaration =====
function multiply(a, b) {
    return a * b;
}
console.log(multiply(3, 4));
console.log(multiply(10, 5));

// ===== PART 2: Default parameters =====
function greet(name = "stranger", greeting = "Hello") {
    return `${greeting}, ${name}!`;
}
console.log(greet("Adeboye", "Welcome"));
console.log(greet("Adeboye"));
console.log(greet());

// ===== PART 3: Function expression =====
const square = function(num) {
    return num * num;
};
console.log(square(4));
console.log(square(9));

// ===== PART 4: Arrow functions =====
const divide = (a, b) => a / b;
const cube = num => num * num * num;

console.log(divide(20, 4));
console.log(cube(3));

// ===== PART 5: return vs console.log =====
function badAdd(a, b) {
    console.log(a + b); // just prints
}

function goodAdd(a, b) {
    return a + b; //returns the value 
}

const result1 = badAdd(2, 3);
const result2 = goodAdd(2, 3);

console.log("badAdd result:", result1);
console.log("goodAdd result:", result2);

// ===== PART 6: yours =====
// 1.
//Function declaration
const isEven = num => num % 2 === 0;

console.log(isEven(4));
console.log(isEven(7));

//2. 
//Function expression
const celsiusToFahrenheit = function(celsius) {
    return celsius * 9 / 5 + 32;
};
console.log(celsiusToFahrenheit(0));
console.log(celsiusToFahrenheit(100));
console.log(celsiusToFahrenheit(37));

//3.
//Arrow Function
const describeNumber = num => {
    if (num > 0) {
        return "positive";
    } else if (num < 0) {
        return "negative";
    } else {
        return "zero";
    };
}
console.log(describeNumber(5));
console.log(describeNumber(-3));
console.log(describeNumber(0));

//4.
//Function declaration
function fullName(firstName, lastName) {
    return `${lastName}, ${firstName}`
};
console.log(fullName("Adeboye", "Fabanwo"));

//5.
//Function expression
const calculateTip = function(billAmount, tipPercent = 10) {
    return billAmount * tipPercent/100;
}
console.log(calculateTip(5000, 15));
console.log(calculateTip(5000));




