// ===== PART 1: Declare one of each type =====
const myNumber = 25;
const myString = "Adeboye";
const myBoolean = true;
const myNull = null;
let myUndefined;
const myArray = [1, 2, 3];
const myObject = { name: "Adeboye" };

// ===== PART 2: Log each value AND its type =====
console.log("Number value:", myNumber, "| type:", typeof myNumber);
console.log("String value:", myString, "| type:", typeof myString);
console.log("Boolean value:", myBoolean, "| type:", typeof myBoolean);
console.log("Null value:", myNull, "| type:", typeof myNull);
console.log("Undefined value:", myUndefined, "| type:", typeof myUndefined);
console.log("Array value:", myArray, "| type:", typeof myArray);
console.log("Object value:", myObject, "| type:", typeof myObject);

// ===== PART 3: The null quirk =====
// null is not an object but typeof says it is, it is a bug from 1995 that was breaking too much of the existing code and was never fixed

// ===== PART 4: yours =====
const myAge = 26;
const myName = "Adeboye";
const Nigerian = true;
const alien = null;
let Undefined;
const myFavNumbers = [7, 9, 10];
const myLastName = { lastname: "Fabanwo"};

console.log("My Age:", myAge, "| type:", typeof myAge);
console.log("My Name:", myName, "| type:", typeof myName);
console.log("Nigerian:", Nigerian, "| type:", typeof Nigerian);
console.log("Null Value:", alien, "| type:", typeof alien);
console.log("Undefined Value:", Undefined, "| type:", typeof Undefined);
console.log("My Fav Numbers:", myFavNumbers, "| type:", typeof myFavNumbers);
console.log("My Last Name:", myLastName, "| type:", typeof myLastName);


