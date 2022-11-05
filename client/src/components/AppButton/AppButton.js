import React from "react";
import { Button } from "@mui/material";
import PropTypes from "prop-types";
const AppButton = (props) => {
  const { variant = "contained", children, onClick, color = "success" } = props;
  return (
    <Button variant={variant} onClick={onClick} color={color} {...props}>
      {children}
    </Button>
  );
};

AppButton.propTypes = {
  text: PropTypes.string,
  variant: PropTypes.string,
  onClick: PropTypes.func,
  color: PropTypes.string,
};
export default AppButton;
