import express from 'express'
import { getProducts } from '../controllers/shop'

const router = express.Router()

router.get('/', getProducts)

export { router as shopRouter }
