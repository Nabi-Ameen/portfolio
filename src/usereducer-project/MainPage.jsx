import React from 'react'
import { useGlobalContext } from "./context";

import Navbar from "./Navbar";
import CartContainer from './CartContainer';

const MainPage = () => {
  const { loading } = useGlobalContext();

  if (loading) {
    return (
      <div className='text-center flex items-center justify-center h-screen'>
        <h1 className='text-2xl font-bold tracking-wider'>Loading...</h1>
      </div>
    )
  }
  return (
    <div className="lg:w-1/2 bg-white mx-auto mt-6">
      <Navbar />
      <CartContainer />
    </div>
  )
}

export default MainPage
