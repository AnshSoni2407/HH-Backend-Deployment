import express from 'express'
import {
  fetchAllUsersAdmin,
  deleteUserByAdmin,
  updateUserByAdmin,
} from "../Controller/user.controller.js";



const router = express.Router();

router.get('/admin/fetch/users', fetchAllUsersAdmin)

router.delete("/admin/delete/user/:userId", deleteUserByAdmin);

router.patch("/admin/update/user/:userId", updateUserByAdmin);



export default router