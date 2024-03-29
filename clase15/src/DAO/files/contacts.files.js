import fs from 'fs'

export default class Contacts {

    constructor(filename = 'db.json') {
        this.filename = filename
        if (!fs.existsSync(this.filename)) {
            fs.writeFileSync(this.filename, '[]')
        }
    }

    get = async () => {
        return fs.promises.readFile(this.filename, { encoding: 'utf-8' })
            .then(r => JSON.parse())
    }

    insert = async data => {
        const db = await this.get()
        db.push(data)
        const dbStr = JSON.stringify(db)

        return fs.promises.writeFile(this.filename, dbStr)
    }
}