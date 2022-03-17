import express from "express";
import connDB from "./db/conn.js";
import webRoute from "./routes/webRoute.js"
import cors from 'cors'

const app = express()
const port = process.env.PORT || '8000'
const DATABASE_URL = process.env. DATABASE_URL || 'mongodb://localhost:27017';

// cors policy error handling.
app.use(cors())

// Data base connection.
connDB(DATABASE_URL)

// JSON (Module)
app.use(express.json())

// Load Route.
app.use('/api', webRoute)

app.listen(port, () => {
    console.log(`Server listen at http://localhost:${port}`)
})