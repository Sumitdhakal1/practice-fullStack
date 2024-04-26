import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import { CallbackWithoutResultAndOptionalError } from "mongoose";

export interface IUser{
    email:String,
    password:string,
    name:string
}

const UserSchema =new mongoose.Schema<IUser>({
name:{
    type:String,
  
},
email:{
    type:String,
    required:[true,"please enter your email"]
},
password:{
    type:String,
    required:[true,'please enter your password'],
    select:false
}
})

UserSchema.pre('save',async function(next: CallbackWithoutResultAndOptionalError){
    const user = this
    if(!user.isModified('password'))return(next);
    try{
    //   const saltRounds =12
    //   const salt =await bcrypt.genSalt(saltRounds)
      const hashedPassword = await bcrypt.hash(user.password, 12)
      user.password = hashedPassword
      next()
    }catch(error:any){
        next(error)
    }

})


const User = mongoose.model('user', UserSchema)

export default User