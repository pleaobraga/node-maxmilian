import express from 'express'

const router = express.Router()

const products: { title: string }[] = []

router.get('/add-product', (req, res, next) => {
  res.render('add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
  })
})

router.post('/add-product', (req, res, next) => {
  products.push({ title: req.body.title })
  console.log(req.body)
  res.redirect('/')
})

export { router as adminRouter, products }
