import { NextFunction, Request, Response } from 'express'
import { Product } from '../models/product'

export const getProducts = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const products = Product.fetchAll()

  res.render('shop/product-list', {
    prods: products,
    pageTitle: 'All Products',
    path: '/products',
  })
}

export const getIndex = (req: Request, res: Response, next: NextFunction) => {
  const products = Product.fetchAll()

  res.render('shop/index', {
    prods: products,
    pageTitle: 'Shop',
    path: '/',
  })
}

export const getCart = (req: Request, res: Response, next: NextFunction) => {
  res.render('shop/cart', {
    path: '/cart',
    pageTitle: 'Your Cart',
  })
}

export const getOrders = (req: Request, res: Response, next: NextFunction) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders',
  })
}

export const getCheckout = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout',
  })
}
