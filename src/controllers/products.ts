import { Request, Response } from 'express'

export const products: { title: string }[] = []

export const getAddProduct = (req: Request, res: Response) => {
  res.render('add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
  })
}

export const postAddProduct = (req: Request, res: Response) => {
  products.push({ title: req.body.title })
  console.log(req.body)
  res.redirect('/')
}
