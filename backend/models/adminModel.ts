import mongoose from 'mongoose'
import  Validator from 'validator'
interface IAdmin{
    username:string,
    fullName:string,
    email:string
    phoneNumber:Number
    password:any
};

const adminSchema = new mongoose.Schema<IAdmin>({
   username:{
     type:String,
     unique:true
   },
   password:{
   type:String,
   minlength:[8,'password must be minimum of 8 characters'],
   maxlength:[20,'password must be maxLength of 20 characters']
   },
   fullName:{
    type:String,
   },
   email:{
    type:String,
    unique:true
   },
   phoneNumber:{
    type:Number,
    unique:true
   }
});

const User = mongoose.model('admin', adminSchema);

export default User;