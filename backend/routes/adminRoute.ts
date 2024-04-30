import  express  from "express";
import {getAllUser,updateOneAdmin, getOneUser, getAllUserFromName} from '../controller/adminController'
import {protect} from '../controller/authController'
const router  =express.Router()

router.route('/admin/users').get(protect,getAllUser).patch(updateOneAdmin)
 router.route('/admin/user/id/:id').get(getOneUser)
router.get('/admin/search',getAllUserFromName)
export default router