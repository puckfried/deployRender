import express from 'express'
import * as dotenv from 'dotenv'
dotenv.config()

const app = express()

app.use('/', (req,res) => res.send('Hallo'))


app.listen(process.env.PORT, () => console.log('Server runs', process.env.PORT))