import {ProductModel} from "../../models/ProductModel";

export const ProductModelTemplate = new ProductModel({
    title: "title",
    description: "This is a particularly long description that should not fit into the quick description field. It is a good thing that there are not so many women here, since I accidentally went into the female bathroom the other time, but luckily, there was no one else inside",
    price: 9.99,
    expDate: Date(),
})