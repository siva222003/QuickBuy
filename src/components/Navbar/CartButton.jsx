import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const CartButton = ({ data }) => {
  const [active, setActive] = useState(true);
  return (
    <Link to="/cart">
      {" "}
      <motion.button
        animate={{
          rotate: active ? 0 : 360,
        }}
        onHoverStart={()=>setActive(!active)}
        type="button"
        className="relative rounded-full text-black p-1 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
      >
        <span className="absolute -inset-1.5"></span>
        <span className=" absolute bottom-4 inline-flex items-center rounded-3xl bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
          {data.length}
        </span>
        <span className="sr-only">View notifications</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="file: mt-2 h-5 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
          />
        </svg>
      </motion.button>
    </Link>
  );
};

export default CartButton;
