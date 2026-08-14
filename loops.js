//The for Loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// The while loop
let count = 0;

while (count < 5) {
    console.log(count);
    count++;
}

// The do-while loop
let countt = 10;

do {
    console.log("This runs at least once:", countt);
    countt++;
} while (countt< 5);

//Nested Loops
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <=3; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
}

// ===== PART 1: for loop =====
//log numbers 1 to 10
for (i = 1; i <= 11; i++) {
    console.log(i);
}

// ===== PART 2: break and continue =====
//Log numbers 1 to 10 but skip 5 and stop at 8
for (let i = 1; i <= 10; i++) {
    if (i === 5) continue;
    if(i === 8) break;
    console.log(i);
}

// ===== PART 3: while loop =====
// Count down from 5 to 1 using a while loop
let countdown = 5;

while (countdown >= 1) {
    console.log("Countdown:", countdown);
    countdown--;
}

// ===== PART 4: do-while =====
//Simulate a login attempt - try once even if credentials are wrong
let attempts = 0;
const maxAttempts = 3;

do {
    attempts++;
    console.log(`Login attempt ${attempts}`);
} while (attempts < maxAttempts);

// ===== PART 5: Nested loop - multiplication table =====
//Print the multiplication table for 1 to 5
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
}

// ===== PART 6: yours =====
//1.
for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) continue;
    console.log(i);
}

//2.
let num = 2;

while (!(num > 1 && num % 3 === 0 && num % 7 === 0)) {
    num++;
}
console.log(num);

//3.
let sum = 0;

for (let i = 1; i <= 100; i++) {
    sum = sum + i;
}
console.log("Sum:", sum);

//Extra Loop Problems
for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

let number = 1;

while (number <= 1000) {
    number = number * 2;
    console.log(number);
}

for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let k = 1; k <= i; k++) {
        row = row + k + " ";
    }
    console.log(row.trim());
}














