import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Profile from "../Pages/Profile/Profile";
import Home from "../Pages/Home/Home";
import Plants from "../Pages/Plants/Plants";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/plants",
        loader: () => fetch("/plantsData.json"),
        element: <Plants></Plants>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
    ],
  },
]);

export default router;
