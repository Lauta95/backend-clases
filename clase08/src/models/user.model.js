import mongoose from 'mongoose';

const userCollection = 'users';

const userSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: {
        type: String,
        // atributo unico para la collection:
        unique: true
    }
})

// para evitar un warning en la terminal lleva false:
mongoose.set('strictQuery', false)
// para hacer algo desde la base de datos necesitamos la conexion del esquema con la base de datos de mongo:
const userModel = mongoose.model(userCollection, userSchema)

export default userModel