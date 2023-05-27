const modo = 'calculos';

async function exampleImport() {
    if (modo == 'calculos') {
        const { default: Calculadora } = await import('./lib.js')
        let calc = new Calculadora();
        console.log(calc.sumar(12, 18));
    }
}

exampleImport()