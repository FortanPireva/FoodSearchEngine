import React from "react";
import { Grid } from "@mui/material";
import logo from "../../assets/logo.png";

export const Logo = () => {
  return (
    <Grid justifyContent="center" container>
      <img src={logo} width="32px" height="32px" />
    </Grid>
  );
};
