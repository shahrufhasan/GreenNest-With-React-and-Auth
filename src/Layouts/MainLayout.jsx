import React from "react";
import { Outlet, useNavigation } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Loading from "../Pages/Loading/Loading";

const MainLayout = () => {
  const { state } = useNavigation();
  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <main className="min-h-screen max-w-10/12 mx-auto">
        {state === "loading" ? <Loading></Loading> : <Outlet></Outlet>}
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayout;
