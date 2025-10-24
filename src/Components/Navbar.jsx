import React, { useState, useEffect, use } from "react";
import { Link } from "react-router";
import logo from "../../public/logo.png";
import { AuthContext } from "../Provider/AuthContex";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  const authData = use(AuthContext);
  const { user: contextUser, logOut } = authData;

  const [user, setUser] = useState(contextUser);

  useEffect(() => {
    setUser(contextUser);
  }, [contextUser]);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.error("Logged out successfully!");
      })
      .catch((err) => console.log(err));
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Plants", path: "/plants" },
    { name: "My Profile", path: "/profile" },
  ];

  const [activePath, setActivePath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => setActivePath(window.location.pathname);
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const renderLinks = () =>
    navItems.map((item) => (
      <li key={item.path}>
        <Link
          to={item.path}
          onClick={() => setActivePath(item.path)}
          className={`block px-3 mx-1 py-2 rounded ${
            activePath === item.path ? "bg-primary text-white" : ""
          }`}
        >
          {item.name}
        </Link>
      </li>
    ));

  return (
    <div className="navbar bg-base-100 shadow-sm px-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow-lg"
          >
            {renderLinks()}
          </ul>
        </div>
        <Link to="/">
          <img src={logo} className="w-15" alt="Logo" />
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{renderLinks()}</ul>
      </div>

      <div className="navbar-end relative">
        {user ? (
          <div className="relative dropdown">
            <div tabIndex={0} role="button" className="cursor-pointer">
              <div className="avatar">
                <div className="w-10 rounded-full ring ring-primary ring-offset-base-100">
                  <img
                    src={user.photoURL || "/default-avatar.png"}
                    alt={user.displayName || "User"}
                  />
                </div>
              </div>
            </div>

            <div className="dropdown-content   absolute right-0 top-12 bg-base-100 shadow-lg rounded-lg w-48 p-3 flex flex-col z-50">
              <span className="font-semibold mb-2 truncate">
                {user.displayName || "User"}
              </span>
              <button
                onClick={handleLogOut}
                className="btn btn-outline btn-primary w-full"
              >
                Log Out
              </button>
            </div>
          </div>
        ) : (
          <>
            <Link
              to="/auth/login"
              className="btn btn-outline btn-secondary mx-2"
            >
              Login
            </Link>
            <Link to="/auth/register" className="btn btn-outline btn-primary">
              Register
            </Link>
          </>
        )}
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default Navbar;
