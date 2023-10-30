import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
const Products = () => {
  const state = useSelector((state) => state.product);
  const { data } = state;
  return (
    <motion.div
      className="bg-white"
      initial={{ y : 10 }}
      animate={{ y : -10 }}
      exit={{ y: 10 }}
    >
      <div className="mx-auto max-w-2xl px-4 py-2 sm:px-6 sm:py-0 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {data.map((product) => (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              className="z-0"
            >
              <div className="overflow-hidden group  p-2 relative border-2 border-gray-200 rounded-xl">
                <div className=" aspect-h-1 aspect-w-1  overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-72">
                  <img
                    src={product.thumbnail}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-base text-gray-900">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.title}
                    </h3>
                    <p className=" text-sm text-gray-500 ">
                      {product.description.slice(0, 44)}...
                    </p>
                  </div>
                  <div className="py-2">
                    <p className="text-sm ml-1.5 font-medium text-gray-900">
                      {product.price}$
                    </p>
                    <p className="text-sm ml-1.5 mt-0.5 font-medium text-gray-500 line-through  ">
                      {product.price}$
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Products;
