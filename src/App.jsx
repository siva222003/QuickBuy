import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import Product from "./components/ProductPage";
import Cart from "./pages/Cart";
import Login from "./components/Login";
import SignIn from "./components/SignIn";
import Protected from "./components/Protected";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Landing />}></Route>
          <Route exact path="/home" element={<Home />}></Route>
          <Route exact path="/product/:id" element={<Product />}></Route>
          <Route
            exact
            path="/cart"
            element={
              <Protected>
                <Cart />
              </Protected>
            }
          ></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/signin" element={<SignIn />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
