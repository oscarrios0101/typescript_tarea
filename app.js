"use strict";
function calcularEdad(fechaNacimiento) {
    // Primero verificamos el formato con una expresión regular
    const formatoRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!formatoRegex.test(fechaNacimiento)) {
        return `Formato de fecha incorrecto: ${fechaNacimiento}`;
    }
    // Creamos un objeto Date
    const fechaNac = new Date(fechaNacimiento);
    // Verificamos si la fecha es valida, siendo fechaNac un objeto Date
    if (!(fechaNac instanceof Date)) {
        return `Formato de fecha incorrecto: ${fechaNacimiento}`;
    }
    // Fecha actual
    const fechaActual = new Date();
    // Calculamos la edad
    let edad = fechaActual.getFullYear() - fechaNac.getFullYear();
    const mesActual = fechaActual.getMonth();
    const diaActual = fechaActual.getDate();
    const mesNacimiento = fechaNac.getMonth();
    const diaNacimiento = fechaNac.getDate();
    // Ajustamos la edad si aún no ha cumplido años este año
    if (mesActual < mesNacimiento ||
        (mesActual === mesNacimiento && diaActual < diaNacimiento)) {
        edad--;
    }
    if (isNaN(edad)) {
        return `Error al calcular la edad para la fecha de nacimiento: ${fechaNacimiento}`;
    }
    return edad;
}
// Ejemplos de uso
console.log(calcularEdad("1990-05-15")); // Edad actual
console.log(calcularEdad("2000-12-31")); // Edad actual
console.log(calcularEdad("1987-99-99")); // Formato de fecha incorrecto
