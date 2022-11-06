import React from "react";
import Product from "../Product/Product";
import { Grid } from "@mui/material";

const ProductList = (props) => {
  return (
    <div>
      <Grid container rowSpacing={1} columnSpacing={1} maxWidth="7  00px">
        {props.productListData.map((productData) => (
          <Grid xs={12} md={6} lg={4}>
            <Product productData={productData} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ProductList;
