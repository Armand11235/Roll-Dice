'use strict';
/*
let dolphins1 = 97;
let dolphins2 = 112;
let dolphins3 = 101;
let koalas1 = 109;
let koalas2 = 95;
let koalas3 = 106;
let minimumScore = 100;

let averageDolphins = (dolphins1 + dolphins2 + dolphins3) / 3;
let averageKoalas = (koalas1 + koalas2 + koalas3) / 3;
*/

// if (averageDolphins > averageKoalas && averageDolphins >= minimumScore) {
//     console.log(`The team Dolphins  with an average of ${averageDolphins} won the competition agains team Koalas with an averge of ${averageKoalas}`);
// } else if (averageDolphins > averageKoalas && averageDolphins <= minimumScore) {
//     console.log(`The team Dolphins  with an average of ${averageDolphins} scored more agains team Koalas with an averge of ${averageKoalas} but did not reach the nessesary requirements to win`);
// } else if (averageDolphins === averageKoalas && averageDolphins >= minimumScore) {
//     console.log(`Both teams have the same results with an average of ${averageDolphins} `);
// } else if (averageDolphins === averageKoalas && averageDolphins <= minimumScore) {
//     console.log(`Both teams have the same results with an average of ${averageDolphins}but none of them reached the nessessary requirements`);
// } else if (averageKoalas > averageDolphins && averageKoalas >= minimumScore) {
//     console.log(`The team Koalas with an averge of ${averageKoalas}  won the competition agains team Dolphins  with an average of ${averageDolphins} `);
// } else {
//     console.log(`The team Koalas with an averge of ${averageKoalas} scored more agains team Dolphins  with an average of ${averageDolphins} but did not reach the nessesary requirements to win`);
// }
/*

let average = (a, b, c) => (a + b + c) / 3;

let scoreDolphins = average(44, 23, 71);
let scoreKoalas = average(65, 54, 49);
console.log(scoreDolphins);
console.log(scoreKoalas);

let checkWinner = function(scoreDolphins, scoreKoalas) {
    if (scoreDolphins >= 2 * scoreKoalas) {
        console.log(`The team Dolphins  with an average of ${scoreDolphins} won the competition agains team Koalas with an averge of ${scoreKoalas}`);
    } else if (scoreDolphins <= 2 * scoreKoalas) {
        console.log(`The team Dolphins  with an average of ${scoreDolphins} scored more agains team Koalas with an averge of ${scoreKoalas} but did not reach the nessesary requirements to win`);
    } else if (scoreKoalas >= 2 * scoreDolphins) {
        console.log(`The team Koalas with an averge of ${scoreKoalas}  won the competition agains team Dolphins  with an average of ${scoreDolphins} `);
    } else if (scoreKoalas <= 2 * scoreDolphins) {
        console.log(`The team Koalas with an averge of ${scoreKoalas} scored more agains team Dolphins  with an average of ${scoreDolphins} but did not reach the nessesary requirements to win`);
    } else {
        console.log(`Both teams have the same results with an average of ${scoreDolphins} `);
    }
};
checkWinner(scoreDolphins, scoreKoalas);

scoreDolphins = average(85, 54, 41);
scoreKoalas = average(23, 34, 27);
console.log(scoreDolphins);
console.log(scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);*/

//challenge

//let restaurantValue = 100;
//let tip = restaurantValue >= 50 && restaurantValue <= 300 ? restaurantValue * 0.15 : restaurantValue * 0.2;
//console.log(`The tip that should be is ${tip} dollars, the restaurant value is ${restaurantValue} dollars and the total amount to be paid is  ${tip + restaurantValue} dollars`);
//const calcTips = function bill(bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
//};
//const bills = [125, 555, 44];
/*const tips = [bills[0] >= 50 && bills[0] <= 300 ? bills[0] * 0.15 : bills[0] * 0.2, bills[1] >= 50 && bills[1] <= 300 ? bills[1] * 0.15 : bills[1] * 0.2, bills[2] >= 50 && bills[2] <= 300 ? bills[2] * 0.15 : bills[2] * 0.2]
console.log(bills, tips);*/
//const tips = [calcTips(bills[0]), calcTips(bills[1]), calcTips(bills[2])]
//const totals = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]]
//console.log(tips);
//console.log(`The tip that should be is ${tips} dollars, the restaurant value is ${bills} dollars and the total amount to be paid is  ${totals} dollars`)

/*

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYeah: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    // calcAge: function (birthYeah) {
    //   return 2037 - birthYeah;
    // }

    // calcAge: function () {
    //   // console.log(this);
    //   return 2037 - this.birthYeah;
    // }

    calcAge: function() {
        this.age = 2037 - this.birthYeah;
        return this.age;
    },
};
//jonas.calcAge();
//console.log(jonas);
console.log(`${jonas.firstName} is a ${jonas.calcAge()} year old ${jonas.job} and he ${jonas.hasDriversLicense ? "has"  : "has not"} a drivers license `);*/
/*
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBmi: function() {
        this.bmi = this.mass / (this.height * this.height)
        return this.bmi
    }
};

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBmi: function() {
        this.bmi = this.mass / (this.height * this.height)
        return this.bmi
    }
};
let result = john.calcBmi() > mark.calcBmi() ? `${ john.fullName } BMI (${ john.bmi }) is higher that ${ mark.fullName } Bmi (${ mark.bmi })` : `${ mark.fullName } Bmi ${ mark.bmi } is higher that ${ john.fullName } BMI ${ john.bmi }`;


console.log(result);

//${john.calcBmi()} > ${mark.calcBmi()} ? ${john.fullName} BMI (${john.bmi}) is higher that ${mark.fullName} Bmi (${mark.bmi}) : ${mark.fullName} Bmi ${mark.bmi} is higher that ${john.fullName} BMI ${john.bmi} */
/*
const armand = [
    'Armand',
    'Sinani',
    2023 - 1990,
    'Computer Engineer', ['User1', 'User2', 'User3']
];

const types = [];
for (let i = 0; i <= armand.length; i++) {
    console.log(armand[i], typeof armand[i]);

    types[i] = typeof armand[i];

}

console.log(types);*/


// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];
// const calcTip = function(bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
// }

// for (let i = 0; i < bills.length; i++) {
//     tips.push(calcTip(bills[i]));
//     totals.push(tips[i] + bills[i]);

// }
// console.log(bills);
// console.log(tips);
// console.log(totals);

// const calcAverage = function(arr) {
//     let average = 0;
//     for (let i = 0; i < arr.length; i++) {
//         average += arr[i];
//     }
//     return average / arr.length;
// }
// console.log(calcAverage(totals));
// console.log(calcAverage(tips));