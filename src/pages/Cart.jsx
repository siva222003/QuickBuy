import React, { useEffect, useState } from "react";
import { fetchCart } from "../app/Slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import CartProducts from "../components/Cart/CartProducts";
import CartFooter from "../components/Cart/CartFooter";
const Cart = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCart());
  }, []);
  const [open, setOpen] = useState(true);
  const state = useSelector((state) => state.cart);
  const { data } = state;
  const products = data;
  const totalPrice = products.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );
  console.log(data);
  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <CartProducts products={products} />

      <CartFooter totalPrice={totalPrice} setOpen={setOpen} />
    </main>
  );
};

export default Cart;
