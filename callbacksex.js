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


