// Se crean dos variables con sus respectivos valores

var numero1 = prompt("ingresa numero: ", 0);
var numero2 = prompt("ingresa otro numero: ", 0);


// Se calcula con las formulas de kelvin y fahrenheit ambas variables y el resultado se guarda en una nueva

const calculo1 = parseInt(numero1) + 273.15;
const calculo2 = (parseInt(numero1) * 9 / 5) + 32;

//mostamos resultado en la pantalla
document.write("Los grados kelvin son: " + calculo1 + " Los grados fahrenheit son: " + calculo2);