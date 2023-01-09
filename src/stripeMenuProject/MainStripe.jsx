import React from 'react'
import Home from './Home'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Submenu from './Submenu'

const MainStripe = () => {
  return (
    <div>
        <Navbar/>
        <Sidebar/>
        <Home/>
        <Submenu/>
    </div>
  )
}

export default MainStripe