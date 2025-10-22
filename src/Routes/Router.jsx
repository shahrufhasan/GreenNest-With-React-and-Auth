import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Profile from "../Pages/Profile/Profile";
import Home from "../Pages/Home/Home";
import Plants from "../Pages/Plants/Plants";
import PlantDetails from "../Pages/Plants/PlantDetails";

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
]);

export default router;
