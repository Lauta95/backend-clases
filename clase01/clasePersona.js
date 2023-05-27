class Persona {
    constructor(nombre) {
        this.nombre = nombre
        this.age = 30
    }

    speak() {
        console.log('My name is', this.nombre);
    }

    cumplirAge() {
        this.age++
    }
}

let javier = new Persona('Javier');
let lautaro = new Persona('Lautaro');

lautaro.cumplirAge();
console.log(javier);
console.log(lautaro);
javier.speak();
lautaro.speak();
