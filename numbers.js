// ===== PART 1: Arithmetic =====
console.log("Addition:", 10 + 3);
console.log("Subtraction:", 10 - 3);
console.log("Multiplication", 10 * 3);
console.log("Division", 10/3);
console.log("Remainder:", 10 % 3);
console.log("Exponentation", 10 ** 3);

//Even or odd check using %
console.log("Is 10 even?", 10 % 2 === 0);
console.log("Is 11 even?", 11 % 2 === 0);

// ===== PART 2: Math Methods =====
console.log("round(4.6):", Math.round(4.6));
console.log("floor(4.9):", Math.floor(4.9));
console.log("ceil(4.1):", Math.ceil(4.1));
console.log("abs(-10):", Math.abs(-10));
console.log("max(1,5,3):", Math.max(1, 5, 3));
console.log("min(1,5,3):", Math.min(1, 5, 3));
console.log("random:", Math.random());

// ===== PART 3: parseInt and parseFloat =====
console.log(parseInt("42px"));
console.log(parseInt("3.99"));
console.log(parseFloat("3.99"));
console.log(parseInt("hello"));

// ===== PART 4: NaN =====
console.log("typeof NaN:", typeof NaN);
console.log("isNaN('hello'):", isNaN("hello"));
console.log("isNaN(42):", isNaN(42));

// ===== PART 5: yours =====
const price = 5760.678;
console.log(price.toFixed(2));

console.log("Total Cost:", 1200 + 450 + 3300);
console.log("Most Expensive item:", Math.max(1200, 450, 3300));
console.log("Cheapest item:", Math.min(1200, 450, 3300));

const num = parseInt("26px");
console.log(num);
console.log(isNaN(num));

const random = Math.random() * 100;
console.log(Math.round(random));




