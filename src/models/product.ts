const products: {
  title: string
  id: string
  imageUrl: string
  description: string
  price: number
}[] = []

export class Product {
  id: string

  constructor(
    public title: string,
    public imageUrl: string,
    public description: string,
    public price: number
  ) {
    this.id = Date.now().toString()
  }

  save() {
    products.push(this)
  }

  static fetchAll() {
    return products
  }

  static findById(id: string) {
    return products.find((p) => p.id === id)
  }
}
