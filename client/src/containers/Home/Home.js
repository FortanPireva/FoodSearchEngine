import { Grid } from "@mui/material";
import React from "react";
import ProductList from "../../components/ProductList/ProductList";
import Search from "../../components/Search/Search";

const Home = () => {
  return (
    <Grid
      container
      sx={{ height: "100vh" }}
      alignItems="center"
      justifyContent="center"
      direction="column"
    >
      <Search />
      <ProductList />
    </Grid>
  );
};

export default Home;
