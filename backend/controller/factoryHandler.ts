
import {NextFunction, Request, Response} from 'express'
import AppError from '../utils/appError'



export const getAll = (Model:any) =>{
  return async(req:Request,res:Response)=>{
      const doc =await Model.find({})

      res.status(200).json({
        status:'success',
        data:{
            doc
        }
      })
   }
}

export const getOne = (Model:any)=>{
 return async(req:Request, res:Response)=>{
  try{
  const doc = await Model.findById(req.params.id);
  res.status(200).json({
    status:'success',
    data:{
      doc
    }
  })
}catch(error){
  console.log("error",error)
}
 }
}

export const createOne = (Model:any)=>{
  return async(req:Request, res:Response)=>{
    try{
    const newDoc =  await Model.create(req.body)
          res.status(200).json({
        status:'success',
        data:{
            doc:newDoc
        }
      })
    }catch(error){
      console.log('error',error)
    }

  }
}

export const updateOne =(Model:any)=>{
  return async (req:Request, res:Response, next:NextFunction)=>{
    const doc = await Model.findByIdAndUpdate(req.params.id, req.body,{
       new:true,
       runValidators:true
    })

    if(!doc){
    return next(new AppError('No document found with that ID', 404))
    }

    res.status(200).json({
      status:'success',
      data:{
        doc
      }
    })
  }
}