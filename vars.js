// ==== PART 1: const ====
const myName = "Adeboye";
const myGoal = "Backend Developer";
const country = "Nigeria";

console.log("Name:", myName);
console.log("Goal:", myGoal);
console.log("Country:", country);

// ===== PART 2: let - reassigning values =====
let score = 0;
console.log("Score start:", score);

score = 10;
console.log("Score after update:", score);

score = score + 5;
console.log("Score after second update:", score);

// ===== PART 3: var vs let - block behaviour =====
if (true) {
    var leakyVar = "I am var";
    let safeVar = "I am let";
}

//Just log leakyVar here - var escapes the block so this works
console.log("leakyVar outside block:", leakyVar);

// ===== PART 4: YOURS =====
//Declare 3 const variables about yourself
const shoe = "nike";
console.log("Shoe:", shoe);
const tv = "hisense";
console.log("TV:", tv);
const fan = "lontor";
console.log("Fan:", fan);

//Declare 2 let variables, log them, reassign them, log again
let network = "mtn";
console.log("Network:", network);
network = "airtel";
console.log("Network:", network);
let pen = "vista";
console.log("Pen:", pen);
pen = "bic";
console.log("Pen:", pen);




