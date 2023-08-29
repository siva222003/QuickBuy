import Navbar from './components/Navbar'
import Home from './components/Home'
import Product from './components/ProductPage'
import Cart from './components/Cart'
import Login from './components/Login'
import SignIn from './components/SignIn'
import Protected from './components/Protected'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar/>
       <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/product/:id" element={<Product/>}></Route>
          <Route exact path="/cart" element={<Protected><Cart/></Protected>}></Route>
          <Route exact path="/login" element={<Login/>}></Route>
          <Route exact path="/signin" element={<SignIn/>}></Route>
       </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
