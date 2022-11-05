import React from "react";

const Product = (props) => {
    return (
        <div>
            <img src={props.productData.image}  alt={""}/>
            <div>{props.productData.title}</div>
            <div>{props.productData.description}</div>
            <div>{props.productData.priceOrig}</div>
            <div>{props.productData.priceDisc}</div>
            <div>{props.productData.expDate}</div>
        </div>
    );
};

export default Product;
