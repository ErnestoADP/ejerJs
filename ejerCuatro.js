/** Solicitud de Números */
const dias = "409";

/** Parseo */
const dias_int = parseInt(dias);

/** Validacion */
if (typeof dias_int === "NaN" || isNaN(dias_int)) {
    console.log("Porfavor, Ingrese Número de Días Enteros.");
}

/** Operaciones */
const calcularAñosSemanasDias = function(dias_parametro) {
    const años = Math.floor(dias_parametro / 365);
    const diasRestantesMenosDiasDeAños = dias_parametro - 365 * años;
    const semanas = Math.floor(
        (diasRestantesMenosDiasDeAños >= 0 ?
            diasRestantesMenosDiasDeAños / 7 :
            dias_parametro / 7)
    );
    const dias =
        (diasRestantesMenosDiasDeAños >= 0 ?
            diasRestantesMenosDiasDeAños % 7 :
            dias_parametro % 7);
    return `${años} Años con ${semanas} Semanas con ${dias} dias`
};

/** Resultados */
const resultado = calcularAñosSemanasDias(dias_int);

console.log(resultado);