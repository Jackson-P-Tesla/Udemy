console.log('hello World');

const country = 'Canada';
const continent = 'North America';
let population = 15;

console.log(country, continent, population);

const isIsland = false;
let language = 'English';

console.log(isIsland, population, country, language);

let halfPopulation = population / 2;

console.log(population+1);

let finlandPop = 60;

if (population > finlandPop){
    console.log(`My country of ${country} has more population than Finland`);
}

if (population < 33){
    console.log(true);
} else {
    console.log(`${country}'s population is ${population - 33} million above average`);
}

let description = `${country} is in ${continent}, and its ${population} people speak ${language}`;

console.log(description);

console.log('9' - '5'); // -> error
console.log('19' - '13' + '17'); // -> error
console.log('19' - '13' + 17); // -> 17
console.log('123' < 57); // -> false
console.log(5 + 6 + '4' + 9 - 4 - 2); // -> 14

// let numNeighbors = Number(prompt('How many neighbour countries does your country have?'));
//
//
//
// if (numNeighbors === 1){
//     console.log('Only 1 border!');
// } else if(numNeighbors > 1){
//     console.log('More than 1 border.');
// } else {
//     console.log('No borders')
// }

if (!isIsland && language == 'English' && population < 50 ){
    console.log(`You should live in ${country} :).`)
}

switch (language){
    case 'Chinese':
    case 'Mandarin':
        console.log('Most number of native speakers!');
        break;
    case 'Spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'English':
        console.log('3rd place');
        break;
    case'Hindi':
        console.log('Number 4');
        break;
    case 'Arabic':
        console.log('5th most spoken language');
        break;
}

console.log(
    `${country}'s population is ${population > 33 ? 'above' : 'below'} average.`
)

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('jonas'));
console.log(Boolean({}));

const money = 100;
if (money > 0){
    console.log('you have money');
} else {
    console.log('you are broke');
}

let height;
if(height){
    console.log("this is there");
} else{
    console.log('no height exists');
}

const age = 18;
if (age === 18){
    console.log('The person has become an adult');
} else {
    console.log('')
}

// const favourite = prompt("what's your favourite number?");
// console.log(favourite);
// console.log(typeof favourite);

const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision;

// if (shouldDrive){
//     console.log('Sarah is able to drive!');
// } else{
//     console.log('Someone else should drive...');
// }

const isTired = false;

console.log(hasDriversLicense || hasGoodVision || isTired);
console.log(hasDriversLicense && hasGoodVision && isTired);

const shouldDrive = hasDriversLicense && hasGoodVision && !isTired;

if (shouldDrive){
    console.log('Sarah is able to drive!');
} else{
    console.log('Someone else should drive...');
}

const day = 'thursday';

switch(day) {
    case 'monday':
        console.log('Today is Monday');
        console.log('Go to work');
        break;
    case 'tuesday' :
        console.log('Today is Tuesday');
        break;
    case 'wednesday' :
    case 'thursday' :
        console.log('Today is Wednesday or Thursday');
        break;
    case 'friday':
        console.log('Today is Friday');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Today is saturday or sunday');
        break;
    default:
        console.log('Not a valid day!');
}

if (day === 'monday'){
    console.log('Today is Monday');
    console.log('Go to work');
} else if (day === 'tuesday'){
    console.log('Today is Tuesday');
}else if (day === 'wednesday' || 'thursday'){
    console.log('Today is Wednesday or Thursday');
}else if (day === 'friday'){
    console.log('Today is Friday');
}else if (day === 'saturday' || 'sunday'){
    console.log('Today is saturday or sunday');
} else {
    console.log('Not a valid day!');
}


const newAge = 23;
newAge >= 18 ? console.log('I like to drink wine') : console.log('I like to drink water');


const drink = newAge >= 18 ? 'wine' : 'water';
console.log(drink);


console.log(`I linke to drink ${drink}`);