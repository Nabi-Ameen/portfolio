import React from 'react'
import { FaShoppingBag } from 'react-icons/fa'
import { useGlobalContext } from './context';


const Navbar = () => {
  const {amount} = useGlobalContext()
  return (
    <nav className='bg-blue-600 px-4 py-4'>
      <div className='flex justify-between text-white'>
        <h3 className='text-lg font-bold tracking-[3px]'>useReducer</h3>
        <div className='flex relative'>
          <i className='text-3xl'><FaShoppingBag /></i>
          <div className='w-5 h-5 rounded-full bg-blue-300 flex justify-center items-center absolute -top-2 left-4'>
            <p className='text-sm'>{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
