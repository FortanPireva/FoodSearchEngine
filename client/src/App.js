import logo from "./logo.svg";
import "./App.css";
import { RouterProvider, Routes, Route } from "react-router-dom";
import Layout from "./containers/Layout/Layout";
import Home from "./pages/Home/Home";
import ErrorPage from "./pages/Error/ErrorPage";
import router from "./Routes/mainRouter";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {router.map((route, i) => {
          return (
            <Route index={i == 0} path={route.path} element={route.element} />
          );
        })}
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default App;
