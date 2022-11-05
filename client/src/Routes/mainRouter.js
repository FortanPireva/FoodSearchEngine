import { createBrowserRouter } from "react-router-dom";
import Home from "../containers/Home/Home";
import Login from "../containers/Login/Login";
import Register from "../containers/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
