import  express from 'express'
import {signup,login, protect, logout, removeCookie} from '../controller/authController'
import {getOneUser, updateOneUser} from '../controller/userController'
const router = express.Router()

router.route('/signup').post(signup)
router.route('/login').post(login)
router.get('/logout', logout)
 router.route('/user/:id').get(protect,removeCookie,getOneUser)
router.patch('/user/:id', protect,updateOneUser)
export default router