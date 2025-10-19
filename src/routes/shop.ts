import express from 'express'
import path from 'node:path'

const router = express.Router()

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'shop.html'))
})

export { router as shopRouter }
