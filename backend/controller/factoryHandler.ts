
import {Request, Response} from 'express'



export const getAll = (Model:any) =>{
  return async(req:Request,res:Response)=>{
      const doc =await Model.find(req.params)
      res.status(200).json({
        status:'success',
        data:{
            doc
        }
      })
   }
}

export const createOne = (Model:any)=>{
  return async(req:Request, res:Response)=>{
    const newDoc =  await Model.create(req.body)
          res.status(200).json({
        status:'success',
        data:{
            doc:newDoc
        }
      })

  }
}