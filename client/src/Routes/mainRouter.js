import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../containers/Login/Login";
import Register from "../containers/Register/Register";
import { element } from "prop-types";

import Routes from "../Utils/routes";
import AboutUs from "../pages/AboutUs/AboutUs";
import OurMission from "../pages/OurMission/OurMission";
import { CreateProduct } from "../containers/CreateProductFrom/CreateProduct";
const router = [
  {
    path: Routes.HOME,
    element: <Home />,
  },
  {
    path: Routes.LOGIN,
    element: <Login />,
  },
  {
    path: Routes.REGISTER,
    element: <Register />,
  },
  {
    path: Routes.ABOUTUS,
    element: <AboutUs />,
  },
  {
    path: Routes.OURMISSION,
    element: <OurMission />,
  },
  {
    path: Routes.CREATEPRODUCT,
    element: <CreateProduct />,
  },
];

export default router;
