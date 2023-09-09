export default class Contacts {
    constructor() {
        this.db = []
    }

    get = () =>{
        return this.db
    }

    insert = data => {
        this.db.push(data)
        return data
    }
}

