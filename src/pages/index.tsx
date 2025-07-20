import { useRoutes } from "react-router-dom";
import Auth from "./auth/Auth";
import Layout from "./components/Layout";
import Home from "./Home";
import About from "./About";
import Login from "./Login";


const MainRoute = () => {
  return useRoutes([
    {
      path: "/",
      element: <Auth />,
      children: [
        {
          path: "/",
          element: <Layout />,
          children: [
            { index: true, element: <Home /> },
            { path: "statistic", element: <About /> },
          ],
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);
};

export default MainRoute;
