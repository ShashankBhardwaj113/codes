// Fill your code here
var circle = require('./Circle.js');

let radius = process.argv;
radius[2] = 5;

console.log('Area of the circle is ' + circle.computeArea(radius[2]).toFixed(2));
console.log('Circumference of the circle is ' + circle.computeCircumference(radius[2]).toFixed(2));