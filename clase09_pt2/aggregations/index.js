import mongoose from "mongoose";
import orderModel from "./models/order.model.js";
const URL = "mongodb+srv://freecodecamp-user:fDlfjlzTXxxBhYva@cluster0.vw59urg.mongodb.net/?retryWrites=true&w=majority"
const run = async () => {
    console.log('db connected');
    // const result = await orderModel.insertMany(
    //     [
    //         { name: 'Pepperoni', size: 'small', price: 19, quantity: 10, date: "2022-01-11T18:50:30Z" },
    //         { name: 'Pepperoni', size: 'medium', price: 20, quantity: 20, date: "2022-01-15T18:50:30Z" },
    //         { name: 'Pepperoni', size: 'medium', price: 20, quantity: 20, date: "2022-01-15T18:50:30Z" },
    //         { name: 'Pepperoni', size: 'large', price: 21, quantity: 30, date: "2022-01-17T18:50:30Z" },
    //         { name: 'Cheese', size: 'small', price: 12, quantity: 15, date: "2022-01-11T18:50:30Z" },
    //         { name: 'Cheese', size: 'medium', price: 13, quantity: 50, date: "2022-01-11T18:50:30Z" },
    //         { name: 'Cheese', size: 'large', price: 14, quantity: 10, date: "2022-01-11T18:50:30Z" },
    //         { name: 'Hawaina', size: 'small', price: 17, quantity: 10, date: "2022-01-11T18:50:30Z" },
    //         { name: 'Hawaina', size: 'medium', price: 18, quantity: 10, date: "2022-01-11T18:50:30Z" }
    //     ]
    // )
    // console.log(result);

    const orders = await orderModel.aggregate([
        // filtrar ordenes por criterio:
        { $match: { size: 'medium' } },
        // filtrar por sabores y cantidades:
        {
            $group: {
                _id: "$name",
                totalQuantity: { $sum: "$quantity" }
            }
        },
        // ordenar por cantidad de mayor a menor:
        { $sort: { totalQuantity: -1 } },
        // guardar el resultado en un documento nuevo:
        {
            $group: {
                _id: 1,
                // toma toda la estructura anterior y la guarda con push en el atributo de order
                orders: { $push: '$$ROOT' }
            }
        },
        // generar un nuevo object id:
        {
            $project: {
                "_id": 0,
                orders: "$orders"
            }
        },
        // agregamos los elementos a la coleccion
        {
            $merge: {
                into: 'report'
            }
        }
    ])

    console.log(JSON.stringify(orders, null, 2, '/t'));
}
mongoose.connect(URL, { dbName: 'clase09_PT2' }).then(run)
