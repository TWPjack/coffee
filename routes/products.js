import express from 'express'
import { create, edit, editcount, deletee, productsfront, productsdetail, admin, file } from '../controllers/products.js'

const router = express.Router()

router.post('/', create)
router.patch('/:id', edit)
router.patch('/editcount/:id', editcount)
router.delete('/:id', deletee)
router.get('/productsfront', productsfront)
router.get('/productsdetail/:id', productsdetail)
router.get('/admin/:admin', admin)
router.get('/file/:file', file)

export default router
