import React from "react";
import Container from "@mui/material/Container";

const Layout = (props) => {
  return <Container>{props.children}</Container>;
};

Layout.propTypes = {};

export default Layout;
