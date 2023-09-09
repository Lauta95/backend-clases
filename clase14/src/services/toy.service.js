
import ToyModel from "../models/toy.model.js";

class ToyService {

    constructor() {
        this.ToyModel = new ToyModel()
    }

    getAll = () => {
        return this.ToyModel.getAll()
    }

    getCheapest = () => {
        const data = this.ToyModel.getAll()
            .sort(t1, t2 => t.price > t2.price)
        return data
    }

    create = data => {
        return this.ToyModel.create(data)
    }

}

export default ToyService