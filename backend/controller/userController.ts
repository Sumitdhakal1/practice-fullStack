import User from "../models/userModel";
import {getOne, createOne, updateOne} from './factoryHandler'
export const getOneUser = getOne(User)
export const createOneUser = createOne(User)
export const updateOneUser= updateOne(User)