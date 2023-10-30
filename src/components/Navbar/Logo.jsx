import React from 'react'
import { Link } from 'react-router-dom'
const Logo = () => {
  return (
    <div className="flex flex-shrink-0 items-center">
    <Link to="/" className='flex  max-sm:-ml-12'>
      <img
        className="h-8 w-auto"
        src="https://t4.ftcdn.net/jpg/03/11/82/23/360_F_311822387_xkOba8YuEwivE086Sc0u1ozHGRPpE4h2.jpg"
        alt="Your Company"
      />
      <h1 className='text-2xl font-mono'>QuickBuy</h1>
    </Link>
  </div>
  )
}

export default Logo
