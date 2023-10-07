import dotenv from 'dotenv'

dotenv.config()
export default {
    persistence: process.env.PERSISTENCE || 'FILE',
    mongoURI: process.env.MONGO_URI,
    mongoDBname: process.env.MONGO_DB_NAME,
    pathFile: './db/',
    port: process.env.PORT || 8080
}