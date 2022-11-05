import logo from "./logo.svg";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/mainRouter";
import Layout from "./containers/Layout/Layout";
function App() {
  return (
    <Layout>
      <RouterProvider router={router}></RouterProvider>
    </Layout>
  );
}

export default App;
