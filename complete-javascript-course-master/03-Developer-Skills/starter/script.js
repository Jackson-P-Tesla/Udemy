// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const temperatures = [3, -1, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
//
// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 1; i < temps.length; ++i) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;
//     if (curTemp > max) {
//       max = curTemp;
//     } else if (curTemp < min) {
//       min = curTemp;
//     }
//   }
//   console.log(max, min);
//   return max - min;
// };
//
// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);
//
// //2 arrays
//
// const calcTempAmplitudeNew = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);
//
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 1; i < temps.length; ++i) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;
//     if (curTemp > max) {
//       max = curTemp;
//     } else if (curTemp < min) {
//       min = curTemp;
//     }
//   }
//   console.log(max, min);
//   return max - min;
// };
//
// const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
// console.log(amplitudeNew);

// const measureKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celsius',
//     value: Number(prompt('Degrees Celsius:')),
//   };
//   console.log(measurement);
//
//   const kelvin = measurement.value + 273;
//   return kelvin;
// };
//
// console.log(measureKelvin());

// const calcTempAmplitudeBug = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);
//
//   let max = 0;
//   let min = 0;
//   for (let i = 1; i < temps.length; ++i) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;
//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };
//
// const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
// console.log(amplitudeBug);

// const printForecast = function (arr) {
//   let forecast = [];
//   for (let i = 0; i < arr.length; i++) {
//     let dayWord = i === 0 ? 'day' : 'days';
//     forecast.push(`... ${arr[i]}ºC in ${i + 1} ${dayWord}`);
//   }
//   forecast = forecast.join(' ') + ' ...';
//   return forecast;
// };
//
// const array1 = [17, 21, 23];
// const array2 = [12, 5, -5, 0, 4];
//
// console.log(printForecast(array1));
// console.log(printForecast(array2));

function analyzeWorkWeek(dailyHours) {
  // Validate input: ensure it's an array of exactly 7 elements
  if (!Array.isArray(dailyHours) || dailyHours.length !== 7) {
    throw new Error('Input must be an array of exactly 7 daily work hours.');
  }

  const daysOfWeek = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  const totalHours = dailyHours.reduce((sum, hours) => sum + hours, 0);
  const averageHours = parseFloat((totalHours / 7).toFixed(1));
  const maxHours = Math.max(...dailyHours);
  const dayWithMostHours = daysOfWeek[dailyHours.indexOf(maxHours)];
  const daysWorked = dailyHours.filter(hours => hours > 0).length;
  const isFullTime = totalHours >= 35;

  return {
    totalHours,
    averageDailyHours: averageHours,
    dayWithMostHours,
    daysWorked,
    isFullTime,
  };
}

// Example usage:
try {
  const weekHours = [8, 6, 0, 7, 9, 4, 5];
  const analysis = analyzeWorkWeek(weekHours);
  console.log(analysis);
} catch (error) {
  console.error(error.message);
}

const weekHours2 = [8, 6, 0, 7, 9];
const analysis2 = analyzeWorkWeek(weekHours2);
console.log(analysis2);
