
const fs = require('fs')

class ManagerUser {
    constructor(filename) {
        this.filename = filename
        this.format = 'utf-8'
    }

    createUser = async (name, lastname, age, course) => {
        const user = { name, lastname, age, course }
        const list = await this.getUser()
        list.push(user)

        await fs.promises.writeFile(this.filename, JSON.stringify(list))
    }

    getUser = async () => {
        try {
            const data = await fs.promises.readFile(this.filename, this.format)
            const dataObj = JSON.parse(data)

            return dataObj
        } catch (error) {
            console.log('no se encontró el archivo, se devuelve vacio');
            return []
        }
    }
}

async function run() {
    const manager = new ManagerUser('users.json')
    await manager.createUser('Lautaro', 'Sanabria', 28, 'backend')

    console.log(await manager.getUser());
}

run()