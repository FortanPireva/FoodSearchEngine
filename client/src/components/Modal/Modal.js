import React from "react";
import {
  Modal,
  Typography,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  ListItemText,
  OutlinedInput,
} from "@mui/material";
import { useState } from "react";
import AppButton from "../AppButton/AppButton";
import productCategories from "../../Utils/productCategories";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const CustomModal = ({ open, onClose }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedCategories(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{ justifyContent: "center", alignItems: "center", display: "flex" }}
    >
      <Box
        sx={{
          bgcolor: "#eee",
          justifyContent: "space-around",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          width: "50%",
          height: "50vh",
        }}
      >
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Get Product Categories to Get Notified For
        </Typography>
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
          <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            value={selectedCategories}
            onChange={handleChange}
            input={<OutlinedInput label="Tag" />}
            renderValue={(selected) => selected.join(", ")}
            MenuProps={MenuProps}
          >
            {productCategories.map((name) => (
              <MenuItem key={name} value={name}>
                <Checkbox checked={selectedCategories.includes(name)} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <AppButton variant="contained" color="primary">
          Save Changes
        </AppButton>
      </Box>
    </Modal>
  );
};

export default CustomModal;
