'use strict';

// let hasDriversLicense = false;
// const passTest = true;
//
// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive');
//
// // const private = 534;
//
// function logger() {
//     console.log('My name is Jackson');
// }
//
// logger(12);
// logger(23);
// logger(34);
// logger(45);
//
// function fruitProcessor(apples, oranges){
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`
//     return juice;
// }
//
// const fruitJuice = fruitProcessor(3, 5);
// const appleJuice = fruitProcessor(5, 0)
// const orangeJuice = fruitProcessor(0, 5)
// console.log(fruitJuice, appleJuice, orangeJuice);


// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }
//
// const age1 = calcAge1(1994);
// console.log(age1);
//
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }
//
//
// const age2 = calcAge2(1994);
//
// console.log(age1, age2);
//
//
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 =calcAge3(1960);
// console.log(age3);
//
// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037-birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years`;
// }
//
// const untilIRetire = yearsUntilRetirement(1994, 'Jackson');
// const untilBobRetires = yearsUntilRetirement(1960, 'Bob');
// console.log(untilIRetire);
// console.log(untilBobRetires);


// function cutFruitPieces(fruit){
//     return fruit * 4;
// }
// function fruitProcessor(apples, oranges){
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);
//
//     const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`
//     return juice;
// }
//
// console.log(fruitProcessor(2,3));

// const calcAge = function(birthYear){
//     return 2037 - birthYear;
// }
//
// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;
//     if (retirement > 0){
//         return retirement;
//     } else {
//         return -1;
//     }
// }
//
// console.log(yearsUntilRetirement(1991, 'jonas'));
// console.log(yearsUntilRetirement(1970, 'Mike'));
//
// const years = [1991, 1992, 1993, 1994, 1995];
//
// console.log(calcAge(years[years.length - 1]));
//
// const friends = ['michael', 'steven', 'peter'];
// friends.push('jay');
// friends.unshift('john');
//
// console.log(friends);
//
// friends.pop();
// console.log(friends);

// const jackson = {
//     firstName: 'jackson',
//     lastName: 'parker',
//     birthYear: 1994,
//     job: 'web developer',
//     friends: ['ivan', 'kirill', 'stirling'],
//     hasDriversLicense: true,

    // calcAge: function(birthYear){
    //     return 2037 - birthYear;
    // }
    // calcAge: function(){
    //     console.log(this);
    //     return 2037 - this.birthYear;
    // }

//     calcAge: function(){
//      this.age = 2037 - this.birthYear;
//      return this.age;
//     },
//
//     getSummary: function() {
//
//         return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
//
//     }
// };
//
// console.log(jackson.getSummary());
// console.log(jackson.calcAge());
// console.log(jackson.age);
// console.log(jackson.age);
// console.log(jackson.age);
// console.log(jackson['calcAge']());
//
// console.log(`${jackson.firstName} has ${jackson.friends.length} friends, and his best friend is called ${jackson.friends[2]}`);

// for(let rep = 1; rep <= 10; rep++){
//     console.log(`Lifting weights repetition ${rep}`);
// }

const jacksonArray = [
    'Jackson',
    'Parker',
    1994,
    'Web Developer',
    ['Stirling', 'Peter', 'Ivan'],
    true
];

// const types = [];
//
// for(let i = 0; i < jacksonArray.length ; i++){
//     console.log(jacksonArray[i], typeof jacksonArray[i]);
//
//     // types[i] = typeof jacksonArray[i];
//
//     types.push(typeof jacksonArray[i]);
//
// }
//
// console.log(types);
//
// const years = [1991, 2007, 1969, 2020];
// const ages = []
// for(let i = 0; i < years.length; i++){
//     ages.push(2025 - years[i]);
// }
//
// console.log(ages);
//
// for(let i = 0; i < jacksonArray.length ; i++){
//     if(typeof jacksonArray[i] !== 'string') continue;
//     console.log(jacksonArray[i], typeof jacksonArray[i]);
//
// }
//
// for(let i = 0; i < jacksonArray.length ; i++){
//     if(typeof jacksonArray[i] === 'number') break;
//     console.log(jacksonArray[i], typeof jacksonArray[i]);
//
// }

// for(let i = jacksonArray.length - 1; i >= 0; i--){
//     console.log(i, jacksonArray[i]);
// }
//
// for(let exercise = 1; exercise < 4; exercise++){
//     console.log(`---------- Starting Exercise ${exercise}`);
//     for(let rep = 1; rep < 6; rep++){
//         console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
//     }
// }

// let rep = 1;
//
// while(rep <= 10){
//     console.log(`WHILE: Lifting weight repetition ${rep}`);
//     rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);
//
// while (dice !== 6){
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if (dice === 6) console.log('Loop is about to end...');
// }


const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

/* Write your code below. Good luck! 🙂 */

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

for(let i = 0; i < bills.length; i++){
    tips.push(calcTip(bills[i]));
}

for(let i = 0; i < tips.length; i++ ){
    totals.push(bills[i] + tips[i]);
}

console.log(tips);
console.log(totals);

const calcAverage = function (arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum / arr.length;
}

console.log(calcAverage(totals));