import express from 'express'
import {
  fetchAllUsersAdmin,
  deleteJobByAdmin,
} from "../Controller/user.controller.js";



const router = express.Router();

router.get('/admin/fetch/jobs', fetchAllUsersAdmin)

router.delete("/admin/delete/jobs/:userId", deleteJobByAdmin);


export default router