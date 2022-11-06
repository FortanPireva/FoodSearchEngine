import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProducts } from "../../hooks/useProducts";
import Routes from "../../Utils/routes";
import { Grid, Box, Typography } from "@mui/material";
import ReactLoading from "react-loading";
export const ProductDetails = () => {
  let { productId } = useParams();
  let { getProduct } = useProducts();
  let navigate = useNavigate();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    console.log(productId);
    getProduct(productId)
      .then((product) => {
        if (!product) {
          navigate(Routes.NOTFOUND);
          return;
        }
        setProduct(product);
      })
      .catch((err) => console.error(err));
  }, []);
  return !product ? (
    <ReactLoading />
  ) : (
    <Grid container sx={{ padding: "10px" }}>
      <Grid item xs={12} lg={6}>
        <img
          src={product.image}
          alt={product.title}
          style={{ width: "100%", height: "100%" }}
        />
      </Grid>
      <Grid item xs={12} lg={6} direction="column">
        <Box>
          <Typography variant="h2" gutterBottom>
            {product.title}
          </Typography>
        </Box>
        <Box>
          <Typography variant="subtitle1" gutterBottom>
            {product.description}
          </Typography>
        </Box>

        <Box>
          <Typography variant="subtitle1" gutterBottom>
            Expiry date: {product.expDate}
          </Typography>
        </Box>
        <Box>
          <Typography variant="subtitle1" gutterBottom fontWeight="bold">
            Price: ${product.price}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};
