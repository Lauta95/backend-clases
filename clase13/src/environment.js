import { config } from 'dotenv';

config({ path: '.env' })

console.log(process.env.FLAG);