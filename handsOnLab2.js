class Counter {
    constructor(responsible) {
        this.responsible = responsible
        this.count_local = 0
    }
    // metodo para acceder a ese atributo sin usar la mala práctica de llamar directamente a count_local por ejemplo.
    getResponsible = () => { return this.responsible }
    getCountLocal = () => { return this.count_local }
    get = () => {
        console.log(`${this.responsible}: ${this.count_local}`);
    }

    count = () => {
        this.count_local++
    }
}

const dario = new Counter('dario')
const santiagoTutor = new Counter('santiagoTutor')
const lautaro = new Counter('lautaro')

dario.count();
dario.count();
lautaro.count();

dario.get();
santiagoTutor.get();
lautaro.get();
