import React, { useState, useRef, useEffect } from 'react';
import { FaBars, FaTwitter } from 'react-icons/fa';
import { links, social } from './Data';
const Navbar = () => {
    const [showLink, setShowLink] = useState(false);
    return (
        <div>
            <nav className='bg-purple-200 shadow-md py-2 lg:py-0'>
                <div className='px-4 lg:px-12 lg:flex justify-between items-center'>
                    <div className='flex justify-between py-2'>
                        <img src="./images/logo.jpg" alt="logo" className='w-14 lg:w-20 rounded-full' />
                        <button
                            onClick={() => setShowLink(!showLink)}
                            className='lg:hidden text-sky-600 hover:text-sky-800 text-xl'>
                            <FaBars /></button>
                    </div>

                    <div className={`${showLink ? 'h-40 overflow-hidden transition-all duration-500 ease-in-out' : 'h-0 lg:h-6 overflow-hidden transition-all duration-500 ease-in-out'}`}>
                        <ul className='lg:flex list-none lg:space-x-4 space-y-2 lg:space-y-0 font-semibold'>
                            {links.map((link) => {
                                const { id, url, text } = link;
                                return (
                                    <li key={id}>
                                        <a href={url}>{text}</a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>

                    <div>
                        <ul className='hidden lg:flex text-sky-500 space-x-4'>
                            {social.map((socialIcon) => {
                                const { id, url, icon } = socialIcon;
                                return (
                                    <li key={id}>
                                        <a href={url} className="text-lg">{icon}</a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>

            </nav>
            <p className='p-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto eius neque molestias dolores accusantium quod architecto ullam voluptatum dolorem, consequatur reprehenderit dolore deleniti illo eaque veniam doloribus impedit officiis. Nam!</p>
        </div>
    )
}

export default Navbar
