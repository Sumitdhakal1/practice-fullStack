import User from "../models/userModel";
import {getAll, createOne} from './factoryHandler'
export const getAllUser = getAll(User)
export const createOneUser = createOne(User)