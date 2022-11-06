import { Grid } from "@mui/material";
import React from "react";
import ProductList from "../../components/ProductList/ProductList";
import Search from "../../components/Search/Search";
import { ProductModelTemplate } from "../../components/templates/ProductModelTemplate";
import Box from "@mui/material/Box";
import { useProducts } from "../../hooks/useProducts";
import { useState, useEffect } from "react";
import { ProductModel } from "../../models/ProductModel";
const Home = () => {
  const { getLatestProducts } = useProducts();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    let tempProducts = [];
    getLatestProducts().then((products) => {
      tempProducts = products.map((p) => new ProductModel(p));
      setProducts(tempProducts);
    });
  }, []);
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      direction="column"
    >
      <Search />

      <Grid
        container
        alignItems="center"
        justifyContent="center"
        direction="column"
      >
        <ProductList productListData={products} />
      </Grid>
    </Grid>
  );
};

export default Home;
