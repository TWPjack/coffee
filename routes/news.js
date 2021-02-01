import express from 'express'
import { create, edit, deletee, newsfront, admin, file } from '../controllers/news.js'

const router = express.Router()

router.post('/', create)
router.patch('/:id', edit)
router.delete('/:id', deletee)
router.get('/newsfront', newsfront)
router.get('/admin/:admin', admin)
router.get('/file/:file', file)

export default router
