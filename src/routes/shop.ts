import express from 'express'

import { products } from './admin'

const router = express.Router()

router.get('/', (req, res) => {
  console.log(products)
  res.render('shop', {
    prods: products,
    pageTitle: 'Shop',
    path: '/',
  })
})

export { router as shopRouter }
