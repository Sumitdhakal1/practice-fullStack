import app from './index'
import mongoose from 'mongoose'
 import {connectToMongooseDB} from './database/database'
import {config as dotenvConfig} from 'dotenv'
dotenvConfig({path:'./config.env'})
const port = process.env.PORT || 3006

const DB = (process.env.DATABASE as string)

//connect database using mongoose
// mongoose.connect(DB,{

// }).then(()=>console.log("Mongoose Database connected successfully"))


// app.listen(port,()=>{
//     console.log(`app is running in port ${port}`)
// }
// )

//connect database using mongodb

async function startServer(){
    await  connectToMongooseDB()
    app.listen(port,()=>{
        console.log(`app is running in port ${port}`)
    }
    )

}

startServer()