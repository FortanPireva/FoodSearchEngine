import React from "react";
import { Grid, TextField } from "@mui/material";
import css from "./Search.module.css";
import logo from "../../assets/logo.png";
const Search = () => {
  return (
    <div className={css.searchContainer}>
      <Grid justifyContent="center" container>
        <img src={logo} width="32px" height="32px" />
      </Grid>
      <TextField id="search" label="Search" variant="standard" fullWidth />
    </div>
  );
};

export default Search;
