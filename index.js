import express from 'express'
import cors from 'cors'
import { Connection } from './db.js'
import dotenv from 'dotenv'
import { route } from './Routes/UserRutes.js'
dotenv.config()
const app = express()
app.use(express.json())
app.use(cors())
app.use(route)



app.listen(process.env.port,()=>{
    console.log('Server Connected')
})
Connection()