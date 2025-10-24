export class Cart {
  static readonly items: { id: string; price: number; quantity: number }[] = []
  static totalPrice: number = 0

  static addProduct(id: string, price: number) {
    const existingProduct = this.items.find((p) => p.id === id)

    if (existingProduct) {
      existingProduct.quantity += 1
    } else {
      this.items.push({ id, price, quantity: 1 })
    }

    this.totalPrice += price
  }

  static deleteProduct(id: string, price: number) {
    const productIndex = this.items.findIndex((p) => p.id === id)
    if (productIndex === -1) return

    const product = this.items[productIndex]
    if (product.quantity > 1) {
      product.quantity -= 1
    } else {
      this.items.splice(productIndex, 1)
    }

    this.totalPrice -= price
  }

  static getCart() {
    return {
      items: this.items,
      totalPrice: this.totalPrice,
    }
  }
}
