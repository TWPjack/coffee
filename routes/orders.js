import express from 'express'
import { usercreate, userpresent, adminpresent, adminedit, admindel } from '../controllers/orders.js'

const router = express.Router()

router.post('/', usercreate)
router.get('/userpresent', userpresent)
router.get('/adminpresent', adminpresent)
router.patch('/adminedit/:id', adminedit)
router.delete('/admindel/:id', admindel)

export default router
