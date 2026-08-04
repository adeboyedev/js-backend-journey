//if/else
const age = 17;

if (age >= 18) {
    console.log("Access granted");
} else {
    console.log("Access denied");
}

// else if
const score = 72;

if (score >= 90) {
    console.log("A");
} else if (score >= 80) {
    console.log("B");
} else if (score >= 70) {
    console.log("C");
} else if (score >= 60) {
    console.log("D");
} else {
    console.log("F");
}

//Ternary Operator
// if/else version
if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}
// ternary version
console.log(age >= 18 ? "Adult" : "Minor");

//Switch
const day = "Monday";

switch (day) {
    case "Saturday":
    case "Sunday":
        console.log("Weekend");
        break;
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
        console.log("Weekday");
        break;
    default:
        console.log("Invalid day");
}

//TASK
// ===== PART 1: if / else =====
const userAge = 17;

if (userAge >= 18) {
    console.log("Access granted");
} else {
    console.log("Access denied - must be 18 or older");
}

// ===== PART 2: else if - grade calculator =====
const scoree = 72;

if (scoree >= 90) {
    console.log("Grade: A");
} else if (scoree >= 80) {
    console.log("Grade: B");
} else if (scoree >= 70) {
    console.log("Grade: C");
} else if (scoree >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}

// ===== PART 3: Ternary =====
const balance = 0;
const balanceDisplay = balance > 0 ? `Balance: ${balance}` : "Balance: Not available";
console.log(balanceDisplay);

const isLoggedIn = true;
console.log(isLoggedIn ? "Welcome back" : "Please log in");

// ===== PART 4: switch =====
const Day = "Monday";

switch (Day) {
    case "Saturday":
    case "Sunday":
        console.log(`${Day} is a weekend`);
        break;
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
        console.log(`${Day} is a weekday`);
        break;
    default:
        console.log("Invalid Day");

}

// ===== PART 5: yours =====
//1. 
const hour = 12;

if (hour >= 5 && hour <= 11 ) {
    console.log("Good morning");
} else if (hour >= 12 && hour <= 16) {
    console.log("Good afternoon");
} else if (hour >= 17 && hour <= 20) {
    console.log("good evening")
} else {
    console.log("Good night");
}

//2. 
const userRole = "editor";

switch (userRole) {
    case "admin":
        console.log("Can read, write and delete");
        break;
    case "editor":
        console.log("Can read and write");
        break;
    case "guest":
        console.log("Can read only");
        break;
    default:
        console.log("Unknown role");
}

//3.
const productPrice = 5000;
const discountCode = "SAVE10";
let finalPrice;

if (discountCode === "SAVE10") {
    finalPrice = productPrice - (productPrice * 0.1);
} else {
    finalPrice = productPrice;
}

console.log(`Final Price: ${finalPrice}`);

