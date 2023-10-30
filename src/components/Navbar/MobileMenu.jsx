import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
const MobileMenu = ({mobileMenu}) => {
  const location = useLocation();
  return (
    <motion.div
      className={`${mobileMenu ? '' : 'hidden'}`}
      id="mobile-menu"
    >
      <div className="space-y-1 px-2 pb-3 pt-2">
        {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}

        <Link
          to="/home"
          className={`${
            location.pathname === "/home" ? "bg-gray-300" : ""
          } text-black block rounded-md px-3 py-2 text-base font-medium`}
          aria-current="page"
        >
          Home
        </Link>
        <Link
          to="/about"
          className={`${
            location.pathname === "/about" ? "bg-gray-300" : ""
          } text-black block rounded-md px-3 py-2 text-base font-medium`}
          aria-current="page"
        >
          About
        </Link>
        <Link
          to="/orders"
          className={`${
            location.pathname === "/orders" ? "bg-gray-300" : ""
          } text-black block rounded-md px-3 py-2 text-base font-medium`}
          aria-current="page"
        >
          Orders
        </Link>
        <Link
          to="/contact"
          className={`${
            location.pathname === "/contact" ? "bg-gray-300" : ""
          } text-black block rounded-md px-3 py-2 text-base font-medium`}
          aria-current="page"
        >
          Contact
        </Link>
      </div>
    </motion.div>
  );
};

export default MobileMenu;
