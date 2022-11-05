import React from "react";
import { Grid, TextField } from "@mui/material";
import css from "./Search.module.css";
import logo from "../../assets/logo.png";
import { Logo } from "../Logo/Logo";
const Search = () => {
  return (
    <div className={css.searchContainer}>
      <Grid container justifyContent="center" alignItems="center">
        <Logo />
      </Grid>
      <TextField id="search" label="Search" variant="standard" fullWidth />
    </div>
  );
};

export default Search;
