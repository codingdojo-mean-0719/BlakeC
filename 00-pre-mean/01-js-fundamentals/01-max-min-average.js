Having issues? Report here.
MandatoryDeadline: Monday of Week 1Difficulty Level: BasicEstimated Time: < 30 min
Max, min, and average
Objectives:

Iterate over an array
Construct a string
Use the return statement
Write a function that takes an array of numbers as a parameter. Find the maximum number, the minimum number, and the average of all the numbers in the array. Return these values in a nicely formatted string.

Example: maxMinAvg([1, -2, 9, 4]) returns "The minimum is -2, the maximum is 9, and the average is 3."

Solutions (1)


 
Max min avg
maxMinAverage
2720-solution-1
README.md
maxminaverage.js
function min(array) {
  var smallest = Number.POSITIVE_INFINITY;

  for (var index = 0; index < array.length; index++) {
    var current = array[index];
    if (current < smallest) {
      smallest = current;
    }
  }

  return smallest;
}

function max(array) {
  var largest = Number.NEGATIVE_INFINITY;

  for (var index = 0; index < array.length; index++) {
    var current = array[index];
    if (current > largest) {
      largest = current;
    }
  }

  return largest;
}

function sum(array) {
  var total = 0;

  for (var index = 0; index < array.length; index++) {
    total += array[index];
  }

  return total;
}

function average(array) {
  return sum(array) / array.length;
}


function maxMinAverage(array) {
  var largest = max(array);
  var smallest = min(array);
  var avg = average(array);
  return 'The minimum is ' + smallest + ', the maximum is ' + largest + ', and the average is ' + avg + '.';
}

console.log(maxMinAverage([1, -2, 9, 4]));