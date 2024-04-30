import {getAll, createOne, updateOne, getOne} from './factoryHandler'
import Admin from '../models/adminModel'
import User from '../models/userModel';
import { NextFunction, Request,Response } from 'express';
import AppError from '../utils/appError';

export const getAllUser = getAll(User)
export const getOneUser = getOne(User)
export const createOneUser = createOne(Admin)
export const updateOneAdmin = updateOne(Admin)




export const getAllUserFromName = async(req:Request,res:Response)=>{
    try{
          const users = await User.find(req.query)
            res.status(200).json({users})
    }catch(error){
      console.log('error', error)
    }
  }



