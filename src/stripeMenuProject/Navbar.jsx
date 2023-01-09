import React from 'react'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './Context'


const Navbar = () => {
  const { openSidebar, openSubmenu, CloseSubmenu } = useGlobalContext();
  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect()
    const center = (tempBtn.left + tempBtn.right) / 2
    const bottom = tempBtn.bottom - 3
    openSubmenu(page, {center, bottom })
  }

  return (
    <nav className='bg-transparent z-50'>
      <div className='w-[90vw] h-[5rem] flex items-center mx-auto justify-between'>

        <div className='flex items-center justify-between w-full sm:w-auto'>
          <h1 className='text-2xl font-bold text-blue-800'>Stripe</h1>
          <button className='text:md md:text-xl p-1 sm:hidden bg-black text-white rounded-sm' onClick={openSidebar}><FaBars /></button>
        </div>

        <ul className='hidden sm:flex space-x-4'>
          <li>
            <button onMouseOver={displaySubmenu} className='px-4 py-2 font-semibold cursor-pointer text-white h-full'>Products</button>
          </li>
          <li>
            <button onMouseOver={displaySubmenu} className='px-4 py-2 font-semibold cursor-pointer text-white h-full'>Developers</button>
          </li>
          <li>
            <button onMouseOver={displaySubmenu} className='px-4 py-2 font-semibold cursor-pointer text-white h-full'>Company</button>
          </li>
        </ul>

        <button className='hidden sm:flex bg-black px-4 py-1 rounded-sm text-white font-semibold cursor-pointer'>Sign in</button>
      </div>
    </nav>
  )
}

export default Navbar