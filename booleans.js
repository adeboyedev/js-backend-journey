// ===== PART 1: Comparison operators =====
console.log(10 > 5);
console.log(10 < 5);
console.log(10 >= 10);
console.log(10 <= 9);
console.log(10 === 10);
console.log(10 === "10"); //Returns false because 10 isnt the same type with "10" which is a string
console.log(10 !== 5);

// ===== PART 2: Truthy and Falsy =====
// Log Boolean() of all 6 falsy values 
console.log(Boolean(false));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));

//Now log Boolean() of these - predict first, then run
console.log(Boolean("0")); // true
console.log(Boolean([])); //  true
console.log(Boolean(-1)); //  true

// ===== PART 3: Logical Operators =====
console.log(true && true);
console.log(true && false);
console.log(false || true);
console.log(false || false);
console.log(!true);
console.log(!false);

// ===== PART 4: Short-circuit default values =====
const username = null;
const displayName = username || "Guest";
console.log("Display name:", displayName);

const userCity = "Lagos";
const city = userCity || "Unknown";
console.log("City:", city);

// ===== PART 5: YOURS =====
//1.
const userAge = 17;
console.log(userAge >= 18);

//2.
const productPrice = 0;
console.log(Boolean(productPrice));
//The block wont run because 0 is falsy. 


//3.
let usermail;
const email = usermail || "no email provided";
console.log(email);

//4.
const age1 = 19;
const age2 = 26;
console.log(age1 >= age2);
//This checks for whether my age 7 years ago is greater or equal to my current age

const firstName = "Adeboye";
const lastName = "Fabanwo";
console.log(firstName === lastName);
//This compares my names; my first and last name

const height1 = "6";
const height2 = 6;
console.log(height1 === height2);
//This checks my height in ft, one is a string and the other a number



