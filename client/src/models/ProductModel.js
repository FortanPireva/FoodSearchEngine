export class ProductModel {
    constructor(data = {}) {
        this.image = null;
        this.title = null;
        this.description = null;
        this.priceOrig = null;
        this.priceDisc = null;
        this.expDate = null;
        Object.assign(this, data);
    }

}