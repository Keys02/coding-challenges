// let age = 19
// let mood = "happy"
// switch (age){
//     case age<18:
//         console.log("You are a minor");
//         break
//     case age==18:
//         console.log("You are an eligible voter");
//         break
//     default:
//         console.log("You are more than enought to vote");
// }

// switch(mood){
//     case "sad":
//         console.log("You are sad read some books");
//         break
//     case "hungry":
//         console.log("You are hungry, there is a lot of food in the fridge")
//         break
//     case "angry":
//         console.log("leave the room and cool your temper")
//         break
//     default:
//         console.log("You are happy")
// }

function calculateSSNITIncomeTax(salary) {
    // SSNIT income tax rates
    const taxRates = {
        tier1: 0.055,
        tier2: 0.02,
        tier3: 0.01
    };

    // Calculate SSNIT income tax based on salary
    if (salary <= 300) {
        return salary * taxRates.tier1;
    } else if (salary <= 600) {
        return 300 * taxRates.tier1 + (salary - 300) * taxRates.tier2;
    } else {
        return 300 * taxRates.tier1 + 300 * taxRates.tier2 + (salary - 600) * taxRates.tier3;
    }
}

// Example: Set the salary to 1000 (you can change this value)
const salary = 1000;
console.log(`SSNIT income tax for a salary of ${salary} is ${calculateSSNITIncomeTax(salary)}`);

