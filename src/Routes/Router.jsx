import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Profile from "../Pages/Profile/Profile";
import Home from "../Pages/Home/Home";
import Plants from "../Pages/Plants/Plants";
import PlantDetails from "../Pages/Plants/PlantDetails";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import AuthLayout from "../Layouts/AuthLayout";

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
        element: <Plants></Plants>,
      },
      {
        path: "/plantDetails/:id",
        element: <PlantDetails></PlantDetails>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
