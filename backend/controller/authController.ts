

import User from "../models/userModel";
import { NextFunction, Request, Response } from 'express'
import bcrypt from 'bcrypt'
import {createSendToken ,decodeToken} from "../utils/jwtToken";
import AppError from '../utils/AppError'
import dotenv from 'dotenv';
import cookie from 'cookie'
dotenv.config();

interface ownRequest extends Request {
  user?: any
}
  
export const signup = async (req: Request, res: Response, next:NextFunction) => {
  try {
    const { email, password } = req.body
    if (!email || !password) {
     return next (new AppError('please enter your email or password', 401))

    }
    const newUser = await User.create({ email, password })
    res.status(201).json({
      status: 'success',
      data: {
        user: newUser
      }
    })
  } catch (error) {
    console.log(error)
  }
}

export const login = async (req: Request, res: Response, next:NextFunction) => {
  try {
    const { email, password } = req.body
    if (!email || !password) {
      return next(new AppError('please provide your email or password', 401))

    }
    const user = await User.findOne({ email }).select('+password')
    if(!user || !(await bcrypt.compare(password, user.password)) ){
      return next(new AppError('incorrect email or password', 401))
  }
     const token = await createSendToken(user._id);

     res.setHeader('set-Cookie',cookie.serialize('name', token as string, {
      httpOnly:true,
      maxAge: 1*1000*40,
      secure:true
     }))
     return res.status(201).json({
      message:"Logged In SuccessFully",
      accessToken:token
     })
  } catch (error) {
    console.log(error)
  }
}


export const protect = async (req: ownRequest, res: Response, next: NextFunction) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer ')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }
  

  if (!token) {
   return next(new AppError('You are not logged in! Please log in to get access.',404))
  }

 const data = process.env.JWT_SECRET as string
  decodeToken(token,data,next)
}


 
export const logout = async(req:Request, res:Response, next:NextFunction)=>{

 res.setHeader('set-Cookie',cookie.serialize('name', 'loggedOut', {
     httpOnly:true,
     maxAge: 0,
     secure:true
    }))
    const cookieName =res.clearCookie('name')
    console.log(cookieName)
    res.status(200).json({
     message:'success'
    })
  
 }

export const removeCookie = async(req:Request, res:Response, next:NextFunction)=>{
const cookieName =res.clearCookie('name')

if(!cookieName){
return next(new AppError('You are not logged in!.',404))
}else{
  next()
}

}
  