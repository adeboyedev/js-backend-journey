// ===== PART 1: Passing a function as an argument =====
function runTwice(fn) {
    fn();
    fn();
}

const sayHi = () => console.log("Hi");
runTwice(sayHi);

// ===== PART 2: Higher-order function =====
function calculate(a, b, operation) {
    return operation(a, b);
}

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;

console.log(calculate(10, 5, add));
console.log(calculate(10, 5, subtract));
console.log(calculate(10, 5, multiply));

// ===== PART 3: Incline anonymous callback =====
console.log(calculate(10, 5, (a, b) => a / b));

// ===== PART 4: Callback with data =====
function processUser(user, callback) {
    console.log("Processing user:", user.name);
    callback(user);
}

const user = { name: "Adeboye", role: "admin"};

processUser(user, (u) => {
    console.log(`${u.name} has role: ${u.role}`);
});

// ===== PART 5:YOURS =====
//1.
function applyToNumber(num, fn) {
    return fn(num);
}

const double = (num) => num * 2;
const square = (num) => num * num;
const even = (num) => num % 2;

console.log(applyToNumber(90, double));
console.log(applyToNumber(6, square));
console.log(applyToNumber(15, even));

//2.
function greetUser(namee, formatter) {
    const formattedName = formatter(namee);
    return `Hello, ${formattedName}!`;
}

const upperCase = (namee) => namee.toUpperCase();
const reverse = (namee) => namee.split("").reverse().join("");

console.log(greetUser("adeboye", upperCase));
console.log(greetUser("boluwatife", reverse));

//3.
function repeat(fn, times) {
    for (let i = 1; i <= times; i++) {
        fn();
    }
}

repeat(() => console.log("Training!"), 5);


