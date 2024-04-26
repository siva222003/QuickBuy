import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action) => {
      state.data = action.payload[0].products;
    },
    updateCart : (state, action)=> {
      (state.data).push(action.payload);
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

const fetchCart = () => {
    return async (dispatch) => {
      try {
        dispatch(setLoading(true));
        const id = localStorage.getItem('userId');
        const response = await fetch(`https://dummyjson.com/carts/user/${id}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch cart: ${response.statusText}`);
        }
        const result = await response.json();
        dispatch(setCart(result.carts));
      } catch (err) {
        dispatch(setError(err.message));
      } finally {
        dispatch(setLoading(false));
      }
    };
  };
  

export const { setCart, setError, setLoading,updateCart} = cartSlice.actions;
export { fetchCart };
export default cartSlice.reducer;
