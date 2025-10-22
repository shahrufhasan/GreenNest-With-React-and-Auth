import React, { useState, useEffect, use } from "react";
import { Link } from "react-router";
import logo from "../../public/logo.png";
import { AuthContext } from "../Provider/AuthContex";

const Navbar = () => {
  const { user } = use(AuthContext);
  const handleLogOut = () => {
    console.log("trying log out");
  };

  // Naviagatins system starts from here
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
    <div className="navbar bg-base-100 shadow-sm">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
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

      <div className="navbar-end">
        <div>{user && user.email}</div>
        {user ? (
          <div className="dropdown dropdown-hover mr-2">
            <div tabIndex={0} role="button">
              <div className="avatar">
                <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
                  <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
                </div>
              </div>
            </div>
            <ul
              tabIndex="-1"
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/auth/login" className="btn btn-outline btn-secondary mx-2">
            Login
          </Link>
        )}
        {user ? (
          <button onClick={handleLogOut} className="btn">
            LogOut
          </button>
        ) : (
          <Link to="/auth/register" className="btn btn-outline btn-primary">
            Register
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
