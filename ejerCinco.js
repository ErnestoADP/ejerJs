// Se crean dos variables con sus respectivos valores

var numero1 = prompt("ingresa numero: ", 0);
var numero2 = prompt("ingresa otro numero: ", 0);
var numero3 = prompt("ingresa otro numero: ", 0);
var numero4 = prompt("ingresa otro numero: ", 0);
var numero5 = prompt("ingresa otro numero: ", 0);


// Se calcula con las formulas de kelvin y fahrenheit ambas variables y el resultado se guarda en una nueva

const calculo1 = parseInt(numero1) + parseInt(numero2) + parseInt(numero3) + parseInt(numero4) + parseInt(numero5);
const calculo2 = calculo1 / 5;

//mostamos resultado en la pantalla
document.write("La suma es : " + calculo1 + " El promedio es: " + calculo2);