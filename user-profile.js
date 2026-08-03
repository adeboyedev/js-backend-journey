const userName = "adeboye";
const userEmail = "adeboye@gmail.com";
const userAge = 17;
const userCountry = "Nigeria";
const userBalance = 0;
const userPhone = "";

//1. Profile display
console.log("===== USER PROFILE =====");
console.log(`Name: ${userName.trim().toUpperCase()}`);
console.log(`Email: ${userEmail}`);
console.log(`Age: ${userAge}`);
console.log(`Country: ${userCountry}`);
console.log("======================");

//2.
console.log(userName.length > 2);
console.log(userEmail.includes("@"));
console.log(userAge >= 18);
console.log(userCountry === "Nigeria");
console.log(userBalance > 0);
console.log(userPhone != 0);

//3.
console.log(userBalance || "Balance: Not available");
console.log(userPhone || "Phone: Not provided");

//4.
console.log(3);



