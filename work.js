///task 7///

let applicants = [
    {income: 400000, hasLoan: false, age: 25}, 
    {income: 300000, hasLoan: true, age: 22}, 
    {income: 500000, hasLoan: false, age: 19} 
];

function eligible(applicant) {
    if (
        applicant.income >= 350000 &&
        applicant.hasLoan === false &&
        applicant.age >= 21 && applicant.age <= 60
    ) {
        console.log("Eligible");
    } else {
        console.log("Not eligible");
    }
}

for (let i = 0; i < applicants.length; i++) {
    eligible(applicants[i]);
}


///// task 5///
let orders = ["Fish", "Chips", "Juice", "Chips", "Burger", "Chips"];

let counter = 0; 
for (let i = 0; i < orders.length; i++) {
    if (orders[i] === "Chips") {
        counter++; 
    }
}

console.log("Total Chips orders: " + counter);

