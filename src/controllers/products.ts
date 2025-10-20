import { Request, Response } from 'express'
import { Product } from '../models/product'

export const getAddProduct = (req: Request, res: Response) => {
  res.render('admin/add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
  })
}

export const postAddProduct = (req: Request, res: Response) => {
  const title = req.body.title
  const imageUrl = req.body.imageUrl
  const price = req.body.price
  const description = req.body.description
  const product = new Product(title, imageUrl, description, price)
  product.save()
  res.redirect('/')
}

export const getProducts = (req: Request, res: Response) => {
  const products = Product.fetchAll()
  res.render('admin/products', {
    prods: products,
    pageTitle: 'Admin Products',
    path: '/admin/products',
  })
}
