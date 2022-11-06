import logo from "./logo.svg";
import "./App.css";
import { RouterProvider, Routes, Route } from "react-router-dom";
import Layout from "./containers/Layout/Layout";
import Home from "./pages/Home/Home";
import ErrorPage from "./pages/Error/ErrorPage";
import router from "./Routes/mainRouter";
import { useState, useEffect } from "react";
import Firebase from "./firebase/firebase";
import ReactLoading from "react-loading";
import { Grid } from "@mui/material";
import { useProducts } from "./hooks/useProducts";
import { ProductDetails } from "./containers/ProductDetails/ProductDetails";
function App() {
  const [initialized, setInitialized] = useState(false);
  useEffect(() => {
    if (!initialized) {
      const firebase = Firebase.instance;
      setTimeout(() => {
        setInitialized(true);
      }, 500);
    }
  }, []);
  return !initialized ? (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      height={"100vh"}
    >
      <ReactLoading color="#000" />
    </Grid>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        {router.map((route, i) => {
          return (
            <Route index={i == 0} path={route.path} element={route.element} />
          );
        })}
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default App;
