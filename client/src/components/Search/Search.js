import React from "react";
import { TextField } from "@mui/material";
import css from "./Search.module.css";
const Search = () => {
  return (
    <div className={css.searchContainer}>
      <TextField id="search" label="Search" variant="standard" fullWidth />
    </div>
  );
};

export default Search;
