// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const temp = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
// const array = [17, 20, 5, 7, 'error', -6, -9, -14, -25, 5, 7, 'error', 14];
// let max;
// let min;
// const calcTempAmplitude = function (temps) {
//   max = temp[0];
//   min = temp[0];
//   for (let i = 0; i < temp.length; i++) {
//     let currTemp = temp[i];
//     if (typeof temp[i] !== 'number') {
//       continue;
//     } else if (temp[i] >= max) {
//       max = temp[i];
//     }
//     //   max = Math.max(temp[i]);
//     if (typeof temp[i] !== 'number') {
//       continue;
//     } else if (temp[i] <= min) {
//       min = temp[i];
//     }
//     //   Math.min(temp[i]);
//   }
// };

// calcTempAmplitude(temp);

// const amplitude = max - min;
// console.log(max, min);
// console.log(amplitude);
/*
let max;
let min;
let concat;
const calcTempAmplitude = function (temps, array) {
  concat = temps.concat(array);
  max = temp[0];
  min = temp[0];
  for (let i = 0; i < concat.length; i++) {
    let currTemp = concat[i];
    if (typeof concat[i] !== 'number') {
      continue;
    } else if (concat[i] >= max) {
      max = concat[i];
    }
    //   max = Math.max(concat[i]);
    if (typeof concat[i] !== 'number') {
      continue;
    } else if (concat[i] <= min) {
      min = concat[i];
    }
    //   Math.min(temp[i]);
  }
  const amplitude = max - min;
  return amplitude;
};

const amp = calcTempAmplitude(temp, array);

console.log(max, min);
console.log(amp);*/
/*
const arr1 = [17, 21, 23];
const arr2 = [12, 5, -5, 0, 4];

const printForcats = function (array) {
  let arr1ToString = ' ';
  for (let i = 0; i < array.length; i++) {
    arr1ToString += `${array[i]} Degree Celcius in ${i + 1} days ... `;
  }
  console.log(` ... ` + arr1ToString);
};

printForcats(arr1);*/
