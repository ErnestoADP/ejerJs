// Se crean dos variables con sus respectivos valores

var numero1 = prompt("ingresa numero: ", 0);
var numero2 = prompt("ingresa otro numero: ", 0);


// Se suman/resta/multiplica/divide/y saca el modulo ambas variables y el resultado se guarda en una nueva

const suma = parseInt(numero1) + parseInt(numero2);
const resta = parseInt(numero1) - parseInt(numero2);
const multi = parseInt(numero1) * parseInt(numero2);
const div = parseInt(numero1) / parseInt(numero2);
const modulo = parseInt(numero1) % parseInt(numero2);




// Se muestra el resultado en la consola
document.write("La suma es: " + suma + " La resta es: " + resta + " La multiplicacion es: " + multi + " La division es: " + div + " El modulo es: " + modulo);