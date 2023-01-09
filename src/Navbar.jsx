import React, { useState } from 'react'
import { RxCrossCircled, RxHamburgerMenu } from 'react-icons/rx'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    return (
        <nav className='bg-gray-100 sticky top-0 left-0 right-0 z-30'>
            <div className='px-6 md:px-10 lg:px-24 lg:flex items-center justify-between shadow-md'>
                <div>
                    <div className='flex justify-between py-4'>
                        <h2 className='text-blue-600 text-xl md:text-3xl lg:text-5xl tracking-widest font-bold font-signature cursor-pointer'>Nabiameen</h2>
                        <i className='text-2xl hover:text-blue-600 lg:hidden cursor-pointer' onClick={() => setNavbar(!navbar)}>
                            {navbar ? <RxCrossCircled /> : <RxHamburgerMenu />}
                        </i>
                    </div>
                </div>
                <div>
                    <div className={` pb-3 mt-8 lg:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                        }`}>
                        <ul className='lg:flex items-center space-y-3 lg:space-y-0 lg:space-x-3'>
                            <li onClick={() => setNavbar(!navbar)} className='text-gray-600 hover:text-blue-600'>
                                <Link to="/">Home</Link>
                            </li>
                            <li className='text-gray-600 hover:text-blue-600' onClick={() => setNavbar(!navbar)}> <a href="#about">About</a></li>
                            <li className='text-gray-600 hover:text-blue-600' onClick={() => setNavbar(!navbar)}> <a href="#WhatIdo">What I do?</a></li>
                            <li className='text-gray-600 hover:text-blue-600' onClick={() => setNavbar(!navbar)}> <a href="#Skills">Skills</a></li>
                            <li className='text-gray-600 hover:text-blue-600' onClick={() => setNavbar(!navbar)}> <a href="#Projects">Projects</a></li>
                            <li className='text-gray-600 hover:text-blue-600' onClick={() => setNavbar(!navbar)}> <a href="">Portfolio</a></li>
                            <li className='text-gray-600 hover:text-blue-600' onClick={() => setNavbar(!navbar)}> <a href="#contacts">Contact</a></li>
                            <li onClick={() => setNavbar(!navbar)} className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-sm  text-white font-medium cursor-pointer text-center">
                                <a href='/resume.pdf' download > Resume</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
