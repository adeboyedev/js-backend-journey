const name = "   Adeboye Fabanwo   ";

//Length
console.log(name.length);

//Remove whitespace from both ends
console.log(name.trim());

//Uppercase / Lowercase
console.log(name.trim().toUpperCase());
console.log(name.trim().toLowerCase());

//Does it include a word?
console.log(name.includes("Fabanwo")); //true

//Does it start or end with something?
console.log(name.trim().startsWith("Adeboye"));
console.log(name.trim().endsWith("Fabanwo"));

//Cut out a section - slice (start, end)
const str = "Backend Developer";
console.log(str.slice(0, 7));
console.log(str.slice(8));

//Replace a word
console.log(str.replace("Developer", "Engineer"));

//Split into an array
const csv = "name, age, city";
console.log(csv.split(",")); // ["name", "age", "city"]

//Find position of a word
console.log(str.indexOf("Developer"));

// ===== PART 1: String Methods =====
const fullName = "  Adeboye Fabanwo  ";

console.log("Original:", fullName);
console.log("Length:", fullName.length);
console.log("Trimmed:", fullName.trim());
console.log("Uppercase:", fullName.trim().toUpperCase());
console.log("Lowercase:", fullName.trim().toLowerCase());
console.log("Includes 'Fabanwo':", fullName.includes("Fabanwo"));
console.log("Starts with 'Adeboye':", fullName.trim().startsWith("Adeboye"));

// ===== PART 2: slice and replace =====
const role = "Backend Developer";

console.log("First word:", role.slice(0, 7));
console.log("Second word:", role.slice(8));
console.log("Replaced:", role.replace("Developer", "Engineer"));

// ===== PART 3: split =====
const skills = "JavaScript, Node.js, Express, PostgreSQL";

const skillsArray = skills.split(",");
console.log("Skills array:", skillsArray);
console.log("First skill:", skillsArray[0]);
console.log("Last skill:", skillsArray[skillsArray.length - 1]);

// ===== PART 4: Template literals =====
const firstName = "Adeboye";
const country = "Nigeria";
const goal = "Backend Developer";
const monthsLeft = 4;

console.log(`My name is ${firstName}, I am from ${country}.`);
console.log(`My goal is to become a ${goal} in ${monthsLeft} months.`);

// ===== PART 5: Build Mine =====
function formatProfile(name, role, country) {
    return `Name: ${name} | Role: ${role} | Country: ${country}`;

}

console.log(formatProfile("Adeboye", "Backend Developer", "Nigeria"));


