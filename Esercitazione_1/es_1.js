"use strict";

var voti = [26, 27, 27, 27, 28];
var copy_voti = Array.from(voti);
var duali = [];

copy_voti.sort();
duali = copy_voti.slice(0, 2);
copy_voti.shift();
copy_voti.shift();

for (var i of duali) copy_voti.push(30 - i + 18);

console.log("Voti iniziali: " + voti);
console.log("Voti finali: " + copy_voti);

var avg_start = 0;
var avg_end = 0;

for (var sum of voti) avg_start += sum;
avg_start /= voti.length;
console.log("Media iniziale: " + avg_start);

for (var sum of copy_voti) avg_end += sum;
avg_end /= copy_voti.length;
console.log("Media finale: " + avg_end);
