import { fileURLToPath } from 'url'
import { dirname } from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


const PRIVATE_KEY = 'coderkeyfromLautaDASWE4314123'
// con hash(bcrypt) no podemos recuperar la info
export const createHash = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10))
}
export const isValidPassword = (user, password) => {
    return bcrypt.compareSync(password, user.password) //true or false
}
// jwt generar token
export const generateToken = (user) => {
    const token = jwt.sign({ user }, PRIVATE_KEY, { expiresIn: '24h' })
    return token
}
// jwt extraer token del header
export const authToken = (req, res, next) => {
    let authHeader = req.headers.auth
    if (!authHeader) {
        authHeader = req.cookies['Tokenn']
        if (!authHeader) {
            return res.status(401).send({
                error: 'not auth'
            })
        }
    }
    const token = authHeader
    jwt.verify(token, PRIVATE_KEY, (error, credentials) => {
        if (error) return res.status(403).send({ error: 'not authorized' })
        req.user = credentials.user
        next()
    })
}

export default __dirname