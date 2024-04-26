import  express from 'express'
import {signup,login, protect, logout, removeCookie} from '../controller/authController'
import {getAllUser} from '../controller/userController'
const router = express.Router()

router.route('/signup').post(signup)
router.route('/login').post(login)
router.get('/logout', logout)
router.route('/user').get(protect,removeCookie,getAllUser)
export default router