import React, { useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductbyPage } from "../app/Slices/productSlice";
const Pagination = ({ category }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.product);
  const { count } = state;
  const [pages, setPages] = useState(1);
  const [currentPage, setcurrentPage] = useState(0);
  useEffect(() => {
    setPages(Math.ceil(count / 10));
  }, [count]);
  const handleClick = (value) => {
    setcurrentPage(value);
    dispatch(fetchProductbyPage(value, category));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <button
          onClick={() => handleClick(currentPage - 1)}
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Previous
        </button>
        <button
          onClick={() => handleClick(currentPage + 1)}
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Next
        </button>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">{currentPage * 10 + 1}</span>{" "}
            to <span className="font-medium">{(currentPage + 1) * 10}</span> of{" "}
            <span className="font-medium">{count}</span> results
          </p>
        </div>
        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <a
              href="#"
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon
                onClick={() => handleClick(currentPage - 1)}
                className="h-5 w-5"
                aria-hidden="true"
              />
            </a>

            {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}

            {Array.from({ length: pages }, (e, index) => (
              <button
                onClick={() => handleClick(index)}
                key={index}
                aria-current="page"
                className={`relative z-10 inline-flex items-center ${
                  currentPage === index
                    ? "bg-indigo-600 text-white"
                    : "text-black-400"
                } px-4 py-2 text-sm font-semibold  focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
              >
                {index + 1}
              </button>
            ))}

            <a
              href="#"
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon
                onClick={() => handleClick(currentPage + 1)}
                className="h-5 w-5"
                aria-hidden="true"
              />
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
