import express from "express";
import cors from 'cors'
import userRoute from './routes/userRoute'
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(cors({
    origin:'*',
    methods:['GET,POST,PUT,PATCH,DELETE'],
    allowedHeaders:[''],
    credentials:true,
}))


app.use('/api',userRoute)

export default app