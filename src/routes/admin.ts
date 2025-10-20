import express from 'express'
import { getAddProduct, postAddProduct } from '../controllers/products'

const router = express.Router()

router.get('/add-product', getAddProduct)

router.post('/add-product', postAddProduct)

export { router as adminRouter }
