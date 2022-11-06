export class ProductModel {
  constructor(data = {}) {
    this.id = null;
    this.image = null;
    this.title = null;
    this.description = null;
    this.category = null;
    this.price = null;
    this.expDate = null;
    this.userId = data.userId || null;
    Object.assign(this, data);
  }
}
