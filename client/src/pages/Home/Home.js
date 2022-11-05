import {Grid} from "@mui/material";
import React from "react";
import ProductList from "../../components/ProductList/ProductList";
import Search from "../../components/Search/Search";
import {ProductModelTemplate} from "../../components/templates/ProductModelTemplate";
import Box from "@mui/material/Box";

const Home = () => {
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
                sx={{height: "100vh"}}
                alignItems="center"
                justifyContent="center"
                direction="column"
            >
                <ProductList productListData={[ProductModelTemplate, ProductModelTemplate]}/>
            </Grid>
        </Grid>
    );
};

export default Home;
