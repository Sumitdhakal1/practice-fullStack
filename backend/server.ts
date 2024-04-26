import app from './index'
import mongoose from 'mongoose'
import {config as dotenvConfig} from 'dotenv'
dotenvConfig({path:'./config.env'})
const port = process.env.PORT || 3006

const DB = (process.env.DATABASE as string)

mongoose.connect(DB,{

}).then(()=>console.log("Database connected successfully"))

app.listen(port,()=>{
    console.log(`app is running in port ${port}`)
}
)