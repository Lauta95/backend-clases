const sumar = (num1, num2) => num1 + num2;
const restar = (num1, num2) => num1 - num2;
const multiplicar = (num1, num2) => num1 * num2;
const dividir = (num1, num2) => num1 / num2;

const realizarOperacion = (num1, num2, callback) => {
    console.log('voy a realizar una operacion');
    const result = callback(num1, num2);
    console.log('el resultado es: ', result);
}

realizarOperacion(2, 5, sumar)
realizarOperacion(2, 5, restar)
realizarOperacion(2, 5, multiplicar)
realizarOperacion(2, 5, dividir)