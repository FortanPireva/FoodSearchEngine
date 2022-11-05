import React from "react";
import Product from "../Product/Product";
import {Grid} from "@mui/material";

const ProductList = (props) => {
    return (
        <div>
            <div>Product List</div>
            <Grid>
                {props.productListData.map((productData) => <Product productData={productData}/>)}
            </Grid>
        </div>
    );
};

export default ProductList;
