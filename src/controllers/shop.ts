import { Request, Response } from 'express'
import { products } from './products'

export const getProducts = (req: Request, res: Response) => {
  res.render('shop', {
    prods: products,
    pageTitle: 'Shop',
    path: '/',
  })
}
