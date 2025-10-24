import { NextFunction, Request, Response } from 'express'
import { Cart } from '../models/cart'
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

export const getProduct = (req: Request, res: Response, next: NextFunction) => {
  const productId = req.params.productId
  const product = Product.findById(productId)

  if (!product) {
    return res.status(404).render('404', { pageTitle: 'Product Not Found' })
  }

  res.render('shop/product-detail', {
    product,
    pageTitle: product.title,
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

export const postCart = (req: Request, res: Response, next: NextFunction) => {
  const productId = req.body.productId
  const product = Product.findById(productId)
  Cart.addProduct(productId, product ? product.price : 0)

  if (!product) {
    return res.status(404).render('404', { pageTitle: 'Product Not Found' })
  }

  res.redirect('/cart')
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
