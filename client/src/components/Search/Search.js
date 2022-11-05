import React from "react";
import { Grid, TextField } from "@mui/material";
import css from "./Search.module.css";
import logo from "../../assets/logo.png";
const Search = () => {
  return (
    <div className={css.searchContainer}>
      <TextField id="search" label="Search" variant="standard" fullWidth />
    </div>
  );
};

export default Search;
