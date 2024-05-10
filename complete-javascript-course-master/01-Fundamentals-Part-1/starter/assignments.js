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