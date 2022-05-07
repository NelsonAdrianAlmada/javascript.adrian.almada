let nombre= prompt("Queres saber tu promedio de la carrera full stack? presiona enter");

let curso1 = prompt("Cual fue tu nota en desarrollo web?");
let curso2 = prompt("En Javascript?");
let curso3 = prompt("En React js?");
let curso4 = prompt("En programacion Backend?");
let promedio = (parseFloat(curso1)+parseFloat(curso2)+parseFloat(curso3)+parseFloat(curso4))/4
;
alert("Su promedio es: "+promedio)