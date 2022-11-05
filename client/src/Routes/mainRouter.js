import { createBrowserRouter } from "react-router-dom";
import Home from "../containers/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

export default router;
