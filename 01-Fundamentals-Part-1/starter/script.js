// let js = 'amazing';
// console.log(40 + 8 + 23 - 10)


// let firstName = 'Armand';
// console.log(firstName);

//exercise 1

// let massMark = 78;
// let heightMark = 1.69;
// let massJohn = 92;
// let heightJohn = 1.95;

// let bmiMark = massMark / (heightMark * heightMark);
// let bmiJohn = massJohn / (heightJohn * heightJohn);
// let markHigherBMI = bmiMark > bmiJohn;
// console.log("Marks BMI is " + bmiMark + " and John BMI is " + bmiJohn);
// console.log("Is Marks BMI higher than Johns BMI: " + markHigherBMI);

// massMark = 95;
// heightMark = 1.88;
// massJohn = 85;
// heightJohn = 1.76;

// bmiMark = massMark / (heightMark * heightMark);
// bmiJohn = massJohn / (heightJohn * heightJohn);
// markHigherBMI = bmiMark > bmiJohn;
// console.log("Marks BMI is " + bmiMark + " and John BMI is " + bmiJohn);
// console.log("Is Marks BMI higher than Johns BMI: " + markHigherBMI);

// exercise 2

// let massMark = 78;
// let heightMark = 1.69;
// let massJohn = 92;
// let heightJohn = 1.95;

// let bmiMark = massMark / (heightMark * heightMark);
// let bmiJohn = massJohn / (heightJohn * heightJohn);

// console.log(`Marks BMI is  ${bmiMark}  and John BMI is ${bmiJohn}`);
// if (bmiMark > bmiJohn) {
//     console.log(`Marks BMI (${bmiMark }) is higher than Johns BMI (${bmiJohn})`);
// } else {
//     console.log(`Johns BMI (${bmiJohn}) is higher than Marks BMI (${bmiMark })`);
// }


// massMark = 95;
// heightMark = 1.88;
// massJohn = 85;
// heightJohn = 1.76;

// bmiMark = massMark / (heightMark * heightMark);
// bmiJohn = massJohn / (heightJohn * heightJohn);

// console.log(`Marks BMI is  ${bmiMark}  and John BMI is ${bmiJohn}`);
// if (bmiMark > bmiJohn) {
//     console.log(`Marks BMI (${bmiMark }) is higher than Johns BMI (${bmiJohn})`);
// } else {
//     console.log(`Johns BMI (${bmiJohn}) is higher than Marks BMI (${bmiMark })`);
// }

//converting types when is with + between a string and a number is convertet to string but when we have - or * or / between a number and a string is convertet to numbers
// converting to booleans there are 5 falsy values that mean that are not false now but if they are converted to boolean will be false and are : 0 , " " , undefined , null, NaN. everything else will be converted to true when converted to boolean

// the difference between == and === is that in == it is allowed to automaticly convert types and then compare but not in === . ex "18" == 18 is true because the string is converted to number but "18"=== 18 is flase.

//exercise 3

// let dolphins1 = 96;
// let dolphins2 = 108;
// let dolphins3 = 89;
// let koalas1 = 88;
// let koalas2 = 91;
// let koalas3 = 110;

// let averageDolphins = (dolphins1 + dolphins2 + dolphins3) / 3;
// let averageKoalas = (koalas1 + koalas2 + koalas3) / 3;

// if (averageDolphins > averageKoalas) {
//     console.log(`The team Dolphins  with an average of ${averageDolphins} won the competition agains team Koalas with an averge of ${averageKoalas}`);
// } else if (averageDolphins === averageKoalas) {
//     console.log(`Both teams have the same results with an average of ${averageDolphins} `);
// } else {
//     console.log(`The team Koalas with an averge of ${averageKoalas}  won the competition agains team Dolphins  with an average of ${averageDolphins} `);
// }

// dolphins1 = 97;
// dolphins2 = 112;
// dolphins3 = 101;
// koalas1 = 109;
// koalas2 = 95;
// koalas3 = 123;
// let minimumScore = 100;

// averageDolphins = (dolphins1 + dolphins2 + dolphins3) / 3;
// averageKoalas = (koalas1 + koalas2 + koalas3) / 3;

// if (averageDolphins > averageKoalas && averageDolphins >= minimumScore) {
//     console.log(`The team Dolphins  with an average of ${averageDolphins} won the competition agains team Koalas with an averge of ${averageKoalas}`);
// } else if (averageDolphins > averageKoalas && averageDolphins <= minimumScore) {
//     console.log(`The team Dolphins  with an average of ${averageDolphins} scored more agains team Koalas with an averge of ${averageKoalas} but did not reach the nessesary requirements to win`);
// } else if (averageDolphins === averageKoalas) {
//     console.log(`Both teams have the same results with an average of ${averageDolphins} `);
// } else if (averageKoalas > averageDolphins && averageKoalas >= minimumScore) {
//     console.log(`The team Koalas with an averge of ${averageKoalas}  won the competition agains team Dolphins  with an average of ${averageDolphins} `);
// } else {
//     console.log(`The team Koalas with an averge of ${averageKoalas} scored more agains team Dolphins  with an average of ${averageDolphins} but did not reach the nessesary requirements to win`);
// }

// dolphins1 = 97;
// dolphins2 = 112;
// dolphins3 = 101;
// koalas1 = 109;
// koalas2 = 95;
// koalas3 = 106;
// minimumScore = 100;

// averageDolphins = (dolphins1 + dolphins2 + dolphins3) / 3;
// averageKoalas = (koalas1 + koalas2 + koalas3) / 3;

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

// chalenge

// let day = 'Friday';

// if (day === 'Monday') {
//     console.log('It is Monday');
// } else if (day === 'Tuesday') {
//     console.log('It is Tuesday');
// } else if (day === 'Wednesday') {
//     console.log('It is Wednesday');
// } else if (day === 'Thurday') {
//     console.log('It is Thursday');
// } else if (day === 'Friday') {
//     console.log('It is Friday');
// } else if (day === 'Saturday') {
//     console.log('It is Saturday');
// } else if (day === 'Sunday') {
//     console.log('It is Sunday');
// } else {
//     console.log('It is not a day');
// }

// expression is what produces an value ex. 4+3. declarations are a full sentence.

//chalenge 4 

// let restaurantValue = 275;
// let tip = restaurantValue >= 50 && restaurantValue <= 300 ? restaurantValue * 0.15 : restaurantValue * 0.2;
// console.log(`The tip that should be is ${tip} dollars, the restaurant value is ${restaurantValue} dollars and the total amount to be paid is  ${tip + restaurantValue} dollars`);

// restaurantValue = 40;
// tip = restaurantValue >= 50 && restaurantValue <= 300 ? restaurantValue * 0.15 : restaurantValue * 0.2;
// console.log(`The tip that should be is ${tip} dollars, the restaurant value is ${restaurantValue} dollars and the total amount to be paid is  ${tip + restaurantValue} dollars`);

// restaurantValue = 430;
// tip = restaurantValue >= 50 && restaurantValue <= 300 ? restaurantValue * 0.15 : restaurantValue * 0.2;
// console.log(`The tip that should be is ${tip} dollars, the restaurant value is ${restaurantValue} dollars and the total amount to be paid is  ${tip + restaurantValue} dollars`);