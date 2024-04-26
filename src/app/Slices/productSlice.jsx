import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  count: 0,
  categories: [],
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.data = action.payload.products;
      state.count = action.payload.total;
    },
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

//API CALLS

//***FETCHING PRODUCTS
const fetchProducts = () => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await fetch("https://dummyjson.com/products?limit=10");
      const result = await response.json();
      dispatch(setProducts(result));
    } catch (err) {
      dispatch(setError(err));
    } finally {
      dispatch(setLoading(false));
    }
  };
};

//***FETCHING PRODUCT CATEGORIES
const fetchProductCategories = () => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await fetch("https://dummyjson.com/products/categories");
      const result = await response.json();
      dispatch(setCategories(result));
    } catch (err) {
      dispatch(setError(err));
    } finally {
      dispatch(setLoading(false));
    }
  };
};

//***FETCHING PRODUCTS BASED ON CATEGORY
const fetchProductbyFilter = (category) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await fetch(
        `https://dummyjson.com/products/category/${category}?limit=10`
      );
      const result = await response.json();
      dispatch(setProducts(result));
    } catch (err) {
      dispatch(setError(err));
    } finally {
      dispatch(setLoading(false));
    }
  };
};

//***FETCHING PRODUCTS BASED PAGINATION
const fetchProductbyPage = (page, category) => {
  return async (dispatch) => {
    try {
      const baseUrl = "https://dummyjson.com/products";
      const queryParams = `limit=10&skip=${page * 10}`;
      const categoryUrl = category ? `category/${category}` : "";
      const URL = `${baseUrl}/${categoryUrl}?${queryParams}`;
      dispatch(setLoading(true));

      const response = await fetch(URL);
      console.log(URL);
      const result = await response.json();
      dispatch(setProducts(result));
    } catch (err) {
      dispatch(setError(err));
    } finally {
      dispatch(setLoading(false));
    }
  };
};
export const { setProducts, setLoading, setError, setCategories } =
  productSlice.actions;
export {
  fetchProducts,
  fetchProductCategories,
  fetchProductbyFilter,
  fetchProductbyPage,
};
export default productSlice.reducer;
