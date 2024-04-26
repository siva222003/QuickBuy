import React, { useEffect } from "react";
import Products from "../components/Products";
import Pagination from "../components/Pagination";
import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  fetchProducts,
  fetchProductCategories,
  fetchProductbyFilter,
} from "../app/Slices/productSlice";
import MobileFilter from "../components/Home/MobileFilter";
import HomeHeader from "../components/Home/HomeHeader";
import DesktopFilters from "../components/Home/DesktopFilters";
import Spinner from "../layout/Spinner";

const sortOptions = [
  { name: "Most Popular", href: "#", current: true },
  { name: "Best Rating", href: "#", current: false },
  { name: "Newest", href: "#", current: false },
  { name: "Price: Low to High", href: "#", current: false },
  { name: "Price: High to Low", href: "#", current: false },
];

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo({top : 0,behavior : 'smooth'})
    dispatch(fetchProducts());
    dispatch(fetchProductCategories());
  }, []);

  const state = useSelector((state) => state.product);
  const { categories,loading } = state;

  const options = categories.map((e) => {
    return {
      value: e,
      label: e.charAt(0).toUpperCase() + e.slice(1),
      checked: false,
    };
  });
  const filters = [
    {
      id: "category",
      name: "Category",
      options,
    },
  ];


  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const handleClick = (e) => {
    if (selectedOption !== e.target.value) {
      setSelectedOption(e.target.value);
      dispatch(fetchProductbyFilter(e.target.value));
    } else {
      setSelectedOption("");
      dispatch(fetchProducts());
    }
  };
  return (
    <div className="bg-white">

      <div>
        {/* Mobile filter dialog */}
        <MobileFilter
          mobileFiltersOpen={mobileFiltersOpen}
          setMobileFiltersOpen={setMobileFiltersOpen}
          filters={filters}
          selectedOption={selectedOption}
          handleClick={handleClick}
        />

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header for Home */}
          <HomeHeader
            sortOptions={sortOptions}
            setMobileFiltersOpen={setMobileFiltersOpen}
          />

          <section aria-labelledby="products-heading" className="pb-16 pt-6">
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/*Desktop Filters */}
              <DesktopFilters
                filters={filters}
                selectedOption={selectedOption}
                handleClick={handleClick}
              />

              {/* Product grid */}
              <div className="lg:col-span-3">
                {loading ? <Spinner/> :<Products />} 
                
              </div>
            </div>
          </section>

          <Pagination category={selectedOption}></Pagination>
        </main>
      </div>
    </div>
  );
};

export default Home;
