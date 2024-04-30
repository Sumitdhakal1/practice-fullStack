import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import { CallbackWithoutResultAndOptionalError } from "mongoose";
export interface IUser{
    email:String,
    password:string,
    userName:string,
    fullName:String,
    bio:String,
    createdAt:String
}

const UserSchema =new mongoose.Schema<IUser>({
userName:{
    type:String,
  
},
email:{
    type:String,
   
},
password:{
    type:String,
   
    select:false
},
fullName:{
    type:String,
},bio:{
 type:String,  
},
createdAt:{
    type:Date,
    default:Date.now()
}

})

UserSchema.pre('save',async function(next: CallbackWithoutResultAndOptionalError){
    const user = this
    if(!user.isModified('password'))return(next);
    try{
      const hashedPassword = await bcrypt.hash(user.password, 12)
      user.password = hashedPassword
      next()
    }catch(error:any){
        next(error)
    }

})


const User = mongoose.model('user', UserSchema)

export default User