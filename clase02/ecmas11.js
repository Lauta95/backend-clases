const varTest = 0;
const varAsignable = varTest || 'sin valor'

console.log(varAsignable);

const varAsignable2= varTest ?? 'Sin valor'
console.log(varAsignable2);

// private attributes

class Persona {
    constructor(name, lastname) {
        this.name = name;
        this.lastname = lastname;
        this.#fullname = `${name} ${lastname}`
    }

    getFullname = () => {
        return this.#fullname
    }
}

const nicolas = new Persona ('nicolas', 'ayala');
nicolas.getFullname();