import { configureStore } from '@reduxjs/toolkit';
import productReducer from './Slices/productSlice'
import userReducer from './Slices/userSlice'
import cartReducer from './Slices/cartSlice'
const store = configureStore({
    reducer: {
      product : productReducer,
      user : userReducer,
      cart : cartReducer
    },
  });
  
  export default store;