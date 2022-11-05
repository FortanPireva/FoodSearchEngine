import React from "react";
import Container from "@mui/material/Container";
import Navigation from "../Navigation/Navigation";
import { Outlet } from "react-router-dom";

const Layout = (props) => {
  console.log(props.children);
  return (
    <Container>
      <Navigation />
      <div className="main">
        <Outlet />
      </div>
    </Container>
  );
};

Layout.propTypes = {};

export default Layout;
