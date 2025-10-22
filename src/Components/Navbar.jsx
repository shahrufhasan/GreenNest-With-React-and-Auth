import React, { useState } from "react";
import { Link } from "react-router";
import logo from "../../public/logo.png";

const Navbar = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Plants", path: "/plants" },
    { name: "My Profile", path: "/profile" },
  ];

  const [activePath, setActivePath] = useState("/");

  const handleClick = (path) => {
    setActivePath(path);
  };

  const renderLinks = () =>
    navItems.map((item) => (
      <li key={item.path}>
        <Link
          to={item.path}
          onClick={() => handleClick(item.path)}
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
        <a className="btn btn-outline btn-secondary">Login</a>
      </div>
    </div>
  );
};

export default Navbar;
