import React, { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import { fetchCart } from '../Store/Slices/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
const Cart = () => {
  const dispatch = useDispatch();
  useEffect(()=>
  {
     dispatch(fetchCart());
  },[])
  const [open, setOpen] = useState(true)
  const state = useSelector((state)=>state.cart)
  const {data} = state
  const products = data;
  const totalPrice = products.reduce((sum, product) => sum + (product.price*product.quantity), 0);
  console.log(data)
  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

<div className="border-t border-gray-200 px-4 py-6 sm:px-6">
    <div className="flow-root">
      <ul role="list" className="-my-6 divide-y divide-gray-200">
        {products.map((product) => (
          <li key={product.id} className="flex py-6">
            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
              <img
                src={product.imageSrc}
                className="h-full w-full object-cover object-center"
              />
            </div>

            <div className="ml-4 flex flex-1 flex-col">
              <div>
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <h3>
                    <Link >{product.title}</Link>
                  </h3>
                  <p className="ml-4">${product.price}</p>
                </div>
                {/* <p className="mt-1 text-sm text-gray-500">{product.color}</p> */}
              </div>
              <div className="flex flex-1 items-end justify-between text-sm">
                <p className="text-gray-500">Qty {product.quantity}</p>

                <div className="flex">
                  <button
                    type="button"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </div>


  <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>${totalPrice}</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                      <div className="mt-6">
                        <Link
                          className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                        >
                          Checkout
                        </Link>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          or{`  `}
                         <Link to='/'><button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                            onClick={() => setOpen(false)}
                          >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </button></Link> 
                        </p>
                      </div>
                    </div>
    </main>
    
  )
}

export default Cart
