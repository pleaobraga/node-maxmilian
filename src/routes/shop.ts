import express from 'express'
import { getPath } from '../utils/path'

const router = express.Router()

router.get('/', (req, res) => {
  res.sendFile(getPath('views', 'shop.html'))
})

export { router as shopRouter }
