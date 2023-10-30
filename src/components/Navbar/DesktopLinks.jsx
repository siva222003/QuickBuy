import React from "react";
import { Link, useLocation } from "react-router-dom";
const DesktopLinks = () => {
  const location = useLocation();
  return (
    <div className="hidden sm:ml-6 sm:block">
      <div className="flex space-x-4">
        {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
        <Link
          to="/home"
          className={`${
            location.pathname === "/home" ? "bg-gray-300" : ""
          } text-black rounded-md px-3 py-2 text-sm font-medium`}
          aria-current="page"
        >
          Home
        </Link>
        <Link
          to="/about"
          className={`${
            location.pathname === "/about" ? "bg-gray-300" : ""
          } text-black rounded-md px-3 py-2 text-sm font-medium`}
          aria-current="page"
        >
          About
        </Link>
        <Link
          to="/orders"
          className={`${
            location.pathname === "/orders" ? "bg-gray-300" : ""
          } text-black rounded-md px-3 py-2 text-sm font-medium`}
          aria-current="page"
        >
          Orders
        </Link>
        <Link
          to="/contact"
          className={`${
            location.pathname === "/contact" ? "bg-gray-300" : ""
          } text-black rounded-md px-3 py-2 text-sm font-medium`}
          aria-current="page"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default DesktopLinks;
