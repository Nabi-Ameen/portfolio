import { Tooltip } from 'flowbite-react';
import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { data, skills } from './data';
import { FaPhone } from 'react-icons/fa';
import { MdEmail, MdOutlineLocationOn } from 'react-icons/md';
import Typed from 'react-typed';


const Home = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_crluxor', 'template_v9epbq9', form.current, 'gazeVvwcQNne6InHs')
            .then((result) => {
                console.log(result.text)
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };
    return (
        <div className='px-6 md:px-10 lg:px-24'>
            <section className='grid lg:grid-cols-2 py-20 place-items-center border-b-2' id='/'>

                <div className='order-last lg:order-first pt-8 text-center lg:text-left lg:pt-0'>
                    <h1 className='text-xl md:text-3xl lg:text-4xl font-semibold'>Hi, I'm Nabi Ameen
                        <span className='animate-pulse duration-500'>👋</span></h1>
                    <div className='flex items-center text:md lg:text-2xl font-medium pt-1 text-gray-600'>
                        <h4 className='pr-1'>and I am </h4>
                        <Typed
                            strings={[
                                "Front End Web Developer.",
                                "UI Designer.",
                                "Reactjs Developer.",
                                "Team Person.",
                                "Open Source Contributor.",
                            ]}
                            typeSpeed={60}
                            backSpeed={50}
                            loop
                        />
                    </div>
                    <p className='py-8  text-gray-600 text-lg lg:text-xl'>A passionate front-end- web Developer 🚀 having a special interest in Frontend technologies and experience of building Web applications with <span className='font-medium'> " html, css, bootstrap, tailwind css, sass, JavaScript, Reactjs and Redux-toolkit "</span> and some other cool libraries and frameworks.</p>

                    <div className='space-x-0 md:space-x-4 space-y-4 md:space-y-0'>
                        <button className='ring-1 bg-blue-600 px-4 py-2 rounded-sm hover:bg-blue-500 text-white font-medium w-full md:w-auto'>
                            <a href="https://github.com/Nabi-Barki" target="_blank" className='flex items-center space-x-3'>
                                <i className='text-2xl '><BsGithub /></i>
                                <p>View on Github</p>
                            </a>
                        </button>
                        <button className='ring-1 bg-blue-600 px-4 py-2 rounded-sm hover:bg-blue-500 text-white font-medium w-full md:w-auto'>
                            <a href="https://www.linkedin.com/in/nabi-ameen-394baa168/" target="_blank" className='flex items-center space-x-3'>
                                <i className='text-2xl '><BsLinkedin /></i>
                                <p>View on LinkedIn</p>
                            </a>
                        </button>
                    </div>
                </div>

                <div className='rounded-full w-60 h-60 md:w-80 md:h-80 bg-blue-700 bg-gradient-to-b from-blue-700 to-blue-400'>
                    <img src="./images/Nabiamin.jpg" alt="name" className='rounded-full p-2 ' />
                </div>
            </section>

            <section className='grid lg:grid-cols-2 place-items-center lg:place-items-start py-16 space-y-8 lg:space-y-0 border-b-2' id='about'>
                <div>
                    <img src="./images/aboutme.jpg" alt="aboutme" className='w-60 h-60 md:w-80 md:h-80  rounded-full' />
                </div>
                <div className='text-center lg:text-left'>
                    <h1 className='text-xl md:text-2xl lg:text-4xl font-semibold underline decoration-4 decoration-blue-300 underline-offset-[10px]'>About Me 👨</h1>
                    <p className='pt-4 text-gray-600 text-sm lg:text-lg'>
                        I am a Computer Scientist who just completed post-graduation from the premier IT university Abasyn University Peshawar in Computer Science Majors. I am a highly skilled professional front-end web developer who loves to take on challenges and then solve them. I am an enthusiastic and passionate front-end web developer. my main specialization is doing Web Development. I pursue perfection in my projects. I put dedication into every project that I do. And I hope my dedication will help me to explore my expertise, and to boost my career plan.
                    </p>
                </div>
            </section>

            <section className='py-16 border-b-2' id='WhatIdo'>
                <div className='text-center'>
                    <h1 className='text-xl md:text-2xl lg:text-4xl font-semibold underline decoration-4 decoration-blue-300 underline-offset-[10px]'>What i do? 👩‍💻</h1>
                </div>

                <div className='grid  md:grid-cols-2 lg:grid-cols-3 gap-8 pt-10'>
                    {data.map((item) => {
                        const { id, icon, text } = item;
                        return (
                            <div key={id} className="grid place-items-center grid-cols-5 shadow-[0px_3px_15px_rgba(0,0,0,0.2)] place-items-center rounded-md text-gray-600 p-1 hover:bg-blue-500 hover:text-white cursor-pointer transition duration-200 ease-in-out ">
                                <div className='text-4xl'>{icon}</div>
                                <div className='col-span-4 text-[14px] lg:text-[16px]'>{text}</div>
                            </div>
                        )
                    })}
                </div>
            </section>

            <section className='py-16 border-b-2' id='Skills'>
                <div className='text-center'>
                    <h1 className='text-xl md:text-2xl lg:text-4xl font-semibold underline decoration-4 decoration-blue-300 underline-offset-[10px]'>Skills 🔥</h1>
                </div>

                <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 py-10 gap-6'>
                    {skills.map((skill) => {
                        const { id, Image, text } = skill;
                        return (
                            <div key={id} className="shadow-[0px_3px_15px_rgba(0,0,0,0.2)] " >
                                <Tooltip content={text} animation="duration-500 ">
                                    <img src={Image} alt="skill" className='p-8 transition duration-200 ease-in-out hover:scale-[110%]' />
                                </Tooltip>
                            </div>
                        )
                    })}
                </div>
            </section>

            <section className='py-8 border-b-2' id='Projects'>
                <div className='text-center'>
                    <h1 className='text-xl md:text-2xl lg:text-4xl font-semibold underline decoration-4 decoration-blue-300 underline-offset-[10px]'>Projects 💻</h1>
                </div>

                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4 py-16'>

                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <div className='h-40 overflow-hidden'>
                            <img className="rounded-t-lg" src="./images/addtocart.png" alt="" />
                        </div>
                        <div className="p-5">
                            <h5 className="mb-2 pt-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">shoping-cart app</h5>
                            <div className='h-36 overflow-hidden'>
                                <p className="mb-3 text-gray-700 dark:text-gray-400">A UI For shoping-cart app created using html css tailwindcss javascript and ReactJS using redux-toolkit.</p>
                            </div>
                            <div className='flex justify-between'>
                                <a href="https://add-to-cart-using-redux-toolkit.netlify.app/" target="_blank" className="px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Live Demo
                                </a>
                                <a href="https://github.com/Nabi-Barki/Add-to-Cart-using-redux/" target="_blank" className=" px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Source Code
                                </a>
                            </div>
                            <div className='grid grid-cols-6 gap-2 pt-6'>
                                <div className='border-[1px] p-2'>
                                    <Tooltip content="html" animation="duration-500 ">
                                        <img src="./images/html.png" alt="png" />
                                    </Tooltip>
                                </div>
                                <div className='border-[1px] p-2'>
                                    <Tooltip content="tailwindcss" animation="duration-500 ">
                                        <img src="./images/tailwind.jpg" alt="png" />
                                    </Tooltip >
                                </div>
                                <div className='border-[1px] p-2'>
                                    <Tooltip content="javascript" animation="duration-500 ">
                                        <img src="./images/js.png" alt="png" />
                                    </Tooltip >
                                </div>
                                <div className='border-[1px] p-2'>
                                    <Tooltip content="reactjs" animation="duration-500 ">
                                        <img src="./images/reactjs.png" alt="png" />
                                    </Tooltip >
                                </div>
                                <div className='border-[1px] p-2'>
                                    <Tooltip content="redux-toolkit" animation="duration-500 ">
                                        <img src="./images/redux.png" alt="png" />
                                    </Tooltip >
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <div className='h-40 overflow-hidden'>
                            <img className="rounded-t-lg" src="./images/cocktail.png" alt="" />
                        </div>
                        <div className="p-5">
                            <h5 className="mb-2 pt-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">cocktail app</h5>
                            <div className='h-36 overflow-hidden'>
                                <p className="mb-3 text-gray-700 dark:text-gray-400">A UI For cocktail app created using html css tailwindcss javascript and ReactJS using context api and custom hooks</p>
                            </div>
                            <div className='flex justify-between'>
                                <a href='https://cocktail-project-using-contextapi.netlify.app/' target="_blank" className=" px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disable">
                                    Live Demo
                                </a>
                                <a href="https://github.com/Nabi-Barki/cocktail-project" target="_blank" className=" px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Source Code
                                </a>
                            </div>
                            <div className='grid grid-cols-6 gap-2 pt-6'>
                                <div className='border-[1px] p-2'>
                                    <Tooltip content="html" animation="duration-500 ">
                                        <img src="./images/html.png" alt="png" />
                                    </Tooltip>
                                </div>
                                <div className='border-[1px] p-2'>
                                    <Tooltip content="tailwindcss" animation="duration-500 ">
                                        <img src="./images/tailwind.jpg" alt="png" />
                                    </Tooltip >
                                </div>
                                <div className='border-[1px] p-2'>
                                    <Tooltip content="javascript" animation="duration-500 ">
                                        <img src="./images/js.png" alt="png" />
                                    </Tooltip >
                                </div>
                                <div className='border-[1px] p-2'>
                                    <Tooltip content="reactjs" animation="duration-500 ">
                                        <img src="./images/reactjs.png" alt="png" />
                                    </Tooltip >
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <div className='h-40 overflow-hidden'>
                            <img className="rounded-t-lg" src="./images/ecommersite.png" alt="" />
                        </div>
                        <div className="p-5">
                            <h5 className="mb-2 pt-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">E-commerce app</h5>
                            <div className='h-36 overflow-hidden'>
                                <p className="mb-3 text-gray-700 dark:text-gray-400">A UI For e-commmerce app created using html css tailwindcss javascript and ReactJS using context api</p>
                            </div>
                            <div className='flex justify-between'>
                                <a href='https://ecommerce-app-tan-theta.vercel.app/' target="_blank" className=" px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disable">
                                    Live Demo
                                </a>
                                <a href="https://github.com/Nabi-Barki/ecommerce-app2" target="_blank" className=" px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Source Code
                                </a>
                            </div>
                            <div className='grid grid-cols-6 gap-2 pt-6'>
                                <div className='border-[1px] p-2'>
                                    <Tooltip content="html" animation="duration-500 ">
                                        <img src="./images/html.png" alt="png" />
                                    </Tooltip>
                                </div>
                                <div className='border-[1px] p-2'>
                                    <Tooltip content="tailwindcss" animation="duration-500 ">
                                        <img src="./images/tailwind.jpg" alt="png" />
                                    </Tooltip >
                                </div>
                                <div className='border-[1px] p-2'>
                                    <Tooltip content="javascript" animation="duration-500 ">
                                        <img src="./images/js.png" alt="png" />
                                    </Tooltip >
                                </div>
                                <div className='border-[1px] p-2'>
                                    <Tooltip content="reactjs" animation="duration-500 ">
                                        <img src="./images/reactjs.png" alt="png" />
                                    </Tooltip >
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <div className='h-40 overflow-hidden'>
                            <img className="rounded-t-lg" src="./images/crudapp.png" alt="" />
                        </div>
                        <div className="p-5">
                            <h5 className="mb-2 pt-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">CRUD Api app </h5>
                            <div className='h-36 overflow-hidden'>
                                <p className="mb-3 text-gray-700 dark:text-gray-400">A UI For crud app created using html css bootstrap javascript and ReactJS using axios library for fetching api. </p>
                            </div>
                            <div className='flex justify-between'>
                                <a href='https://crud-application-using-axios.vercel.app/' target="_blank" className=" px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disable">
                                    Live Demo
                                </a>
                                <a href="https://github.com/Nabi-Barki/CRUD-Application-using-axios" target="_blank" className=" px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Source Code
                                </a>
                            </div>
                            <div className='grid grid-cols-6 gap-2 pt-6'>
                                <div className='border-[1px] p-2'>
                                    <Tooltip content="html" animation="duration-500 ">
                                        <img src="./images/html.png" alt="png" />
                                    </Tooltip>
                                </div>
                                <div className='border-[1px] p-2'>
                                    <Tooltip content="bootstrap" animation="duration-500 ">
                                        <img src="./images/bootstrap.png" alt="png" />
                                    </Tooltip >
                                </div>
                                <div className='border-[1px] p-2'>
                                    <Tooltip content="javascript" animation="duration-500 ">
                                        <img src="./images/js.png" alt="png" />
                                    </Tooltip >
                                </div>
                                <div className='border-[1px] p-2'>
                                    <Tooltip content="reactjs" animation="duration-500 ">
                                        <img src="./images/reactjs.png" alt="png" />
                                    </Tooltip >
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <div className='h-40 overflow-hidden'>
                            <img className="rounded-t-lg" src="./images/todoapp.png" alt="" />
                        </div>
                        <div className="p-5">
                            <h5 className="mb-2 pt-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">todo app</h5>
                            <div className='h-36'>
                                <p className="mb-3 text-gray-700 dark:text-gray-400">A UI For todo app created using custom hooks context API and using html css tailwindcss javascript and ReactJS</p>
                            </div>
                            <Link to="todoapp">
                                <div className='flex justify-between'>
                                    <a href='#' className=" px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disable">
                                        Live Demo
                                    </a>
                                </div>
                            </Link>

                            {/* <a href="https://github.com/Nabi-Barki/cocktailproject" target="_blank" className=" px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Source Code
                                    </a>*/}
                            <div className='grid grid-cols-6 gap-2 pt-6'>
                                <div className='border-[1px] p-2'>
                                    <Tooltip content="html" animation="duration-500 ">
                                        <img src="./images/html.png" alt="png" />
                                    </Tooltip>
                                </div>
                                <div className='border-[1px] p-2'>
                                    <Tooltip content="tailwindcss" animation="duration-500 ">
                                        <img src="./images/tailwind.jpg" alt="png" />
                                    </Tooltip >
                                </div>
                                <div className='border-[1px] p-2'>
                                    <Tooltip content="javascript" animation="duration-500 ">
                                        <img src="./images/js.png" alt="png" />
                                    </Tooltip >
                                </div>
                                <div className='border-[1px] p-2'>
                                    <Tooltip content="reactjs" animation="duration-500 ">
                                        <img src="./images/reactjs.png" alt="png" />
                                    </Tooltip >
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <div className='h-40 overflow-hidden'>
                            <img className="rounded-t-lg" src="./images/accordian.png" alt="" />
                        </div>
                        <div className="p-5">
                            <h5 className="mb-2 pt-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">accordian app</h5>

                            <div className='h-36'>
                                <p className="mb-3 text-gray-700 dark:text-gray-400">A UI For accordian app created using html css tailwindcss javascript and ReactJS</p>
                            </div>
                            <Link to="accordian">
                                <div className='flex justify-between'>
                                    <a href='#' className=" px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disable">
                                        Live Demo
                                    </a>
                                </div>
                            </Link>
                            {/*<a href="https://github.com/Nabi-Barki/cocktailproject" target="_blank" className=" px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Source Code
                                    </a>*/}


                            <div className='grid grid-cols-6 gap-2 pt-6'>
                                <div className='border-[1px] p-2'>
                                    <Tooltip content="html" animation="duration-500 ">
                                        <img src="./images/html.png" alt="png" />
                                    </Tooltip>
                                </div>
                                <div className='border-[1px] p-2'>
                                    <Tooltip content="tailwindcss" animation="duration-500 ">
                                        <img src="./images/tailwind.jpg" alt="png" />
                                    </Tooltip >
                                </div>
                                <div className='border-[1px] p-2'>
                                    <Tooltip content="javascript" animation="duration-500 ">
                                        <img src="./images/js.png" alt="png" />
                                    </Tooltip >
                                </div>
                                <div className='border-[1px] p-2'>
                                    <Tooltip content="reactjs" animation="duration-500 ">
                                        <img src="./images/reactjs.png" alt="png" />
                                    </Tooltip >
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <div className='h-40 overflow-hidden'>
                            <img className="rounded-t-lg" src="./images/ourmenu.png" alt="" />
                        </div>
                        <div className="p-5">
                            <h5 className="mb-2 pt-4 text-xl font-bold tracking-tight text-gray-900 dark:text-white">accordian app</h5>
                            <div className='h-36'>
                                <p className="mb-3 text-gray-700 dark:text-gray-400">A UI For menu app created using html css tailwindcss javascript and ReactJS</p>
                            </div>
                            <Link to="menu">
                                <div className='flex justify-between'>
                                    <a href='#' className=" px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disable">
                                        Live Demo
                                    </a>
                                </div>
                            </Link>
                            {/* <a href="https://github.com/Nabi-Barki/cocktailproject" target="_blank" className=" px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Source Code
                                    </a>*/}
                            <div className='grid grid-cols-6 gap-2 pt-6'>
                                <div className='border-[1px] p-2'>
                                    <Tooltip content="html" animation="duration-500 ">
                                        <img src="./images/html.png" alt="png" />
                                    </Tooltip>
                                </div>
                                <div className='border-[1px] p-2'>
                                    <Tooltip content="tailwindcss" animation="duration-500 ">
                                        <img src="./images/tailwind.jpg" alt="png" />
                                    </Tooltip >
                                </div>
                                <div className='border-[1px] p-2'>
                                    <Tooltip content="javascript" animation="duration-500 ">
                                        <img src="./images/js.png" alt="png" />
                                    </Tooltip >
                                </div>
                                <div className='border-[1px] p-2'>
                                    <Tooltip content="reactjs" animation="duration-500 ">
                                        <img src="./images/reactjs.png" alt="png" />
                                    </Tooltip >
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <div className='h-40 overflow-hidden'>
                            <img className="rounded-t-lg" src="./images/ourreviews.png" alt="" />
                        </div>
                        <div className="p-5">
                            <h5 className="mb-2 pt-4 text-xl font-bold tracking-tight text-gray-900 dark:text-white">reviews app</h5>
                            <div className='h-36'>
                                <p className="mb-3 text-gray-700 dark:text-gray-400">A UI For reviews app created using html css tailwindcss javascript and ReactJS</p>
                            </div>
                            <Link to="reviews">
                                <div className='flex justify-between'>
                                    <a href='#' className=" px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disable">
                                        Live Demo
                                    </a>
                                </div>
                            </Link>
                            {/* <a href="https://github.com/Nabi-Barki/cocktailproject" target="_blank" className=" px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Source Code
                                    </a>*/}
                            <div className='grid grid-cols-6 gap-2 pt-6'>
                                <div className='border-[1px] p-2'>
                                    <Tooltip content="html" animation="duration-500 ">
                                        <img src="./images/html.png" alt="png" />
                                    </Tooltip>
                                </div>
                                <div className='border-[1px] p-2'>
                                    <Tooltip content="tailwindcss" animation="duration-500 ">
                                        <img src="./images/tailwind.jpg" alt="png" />
                                    </Tooltip >
                                </div>
                                <div className='border-[1px] p-2'>
                                    <Tooltip content="javascript" animation="duration-500 ">
                                        <img src="./images/js.png" alt="png" />
                                    </Tooltip >
                                </div>
                                <div className='border-[1px] p-2'>
                                    <Tooltip content="reactjs" animation="duration-500 ">
                                        <img src="./images/reactjs.png" alt="png" />
                                    </Tooltip >
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <div className='h-40 overflow-hidden'>
                            <img className="rounded-t-lg" src="./images/tabsproject.png" alt="" />
                        </div>
                        <div className="p-5">
                            <h5 className="mb-2 pt-4 text-xl font-bold tracking-tight text-gray-900 dark:text-white">tabsproject app</h5>
                            <div className='h-36'>
                                <p className="mb-3 text-gray-700 dark:text-gray-400">A UI For tabsproject app created using ReactJS</p>
                            </div>
                            <Link to="tabs">
                                <div className='flex justify-between'>
                                    <a href='#' className=" px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disable">
                                        Live Demo
                                    </a>
                                </div>
                            </Link>
                            {/* <a href="https://github.com/Nabi-Barki/cocktailproject" target="_blank" className=" px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Source Code
                                    </a>*/}
                            <div className='grid grid-cols-6 gap-2 pt-6'>
                                <div className='border-[1px] p-2'>
                                    <Tooltip content="html" animation="duration-500 ">
                                        <img src="./images/html.png" alt="png" />
                                    </Tooltip>
                                </div>
                                <div className='border-[1px] p-2'>
                                    <Tooltip content="tailwindcss" animation="duration-500 ">
                                        <img src="./images/tailwind.jpg" alt="png" />
                                    </Tooltip >
                                </div>
                                <div className='border-[1px] p-2'>
                                    <Tooltip content="javascript" animation="duration-500 ">
                                        <img src="./images/js.png" alt="png" />
                                    </Tooltip >
                                </div>
                                <div className='border-[1px] p-2'>
                                    <Tooltip content="reactjs" animation="duration-500 ">
                                        <img src="./images/reactjs.png" alt="png" />
                                    </Tooltip >
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <div className='h-40 overflow-hidden'>
                            <img className="rounded-t-lg" src="./images/tours.png" alt="" />
                        </div>
                        <div className="p-5">
                            <h5 className="mb-2 pt-4 text-xl font-bold tracking-tight text-gray-900 dark:text-white">tours app</h5>
                            <div className='h-36'>
                                <p className="mb-3 text-gray-700 dark:text-gray-400">A UI For tours app created using ReactJS</p>
                            </div>
                            <Link to="tours">
                                <div className='flex justify-between'>
                                    <a href='#' className=" px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disable">
                                        Live Demo
                                    </a>
                                </div>
                            </Link>
                            {/* <a href="https://github.com/Nabi-Barki/cocktailproject" target="_blank" className=" px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Source Code
                                    </a>*/}
                            <div className='grid grid-cols-6 gap-2 pt-6'>
                                <div className='border-[1px] p-2'>
                                    <Tooltip content="html" animation="duration-500 ">
                                        <img src="./images/html.png" alt="png" />
                                    </Tooltip>
                                </div>
                                <div className='border-[1px] p-2'>
                                    <Tooltip content="tailwindcss" animation="duration-500 ">
                                        <img src="./images/tailwind.jpg" alt="png" />
                                    </Tooltip >
                                </div>
                                <div className='border-[1px] p-2'>
                                    <Tooltip content="javascript" animation="duration-500 ">
                                        <img src="./images/js.png" alt="png" />
                                    </Tooltip >
                                </div>
                                <div className='border-[1px] p-2'>
                                    <Tooltip content="reactjs" animation="duration-500 ">
                                        <img src="./images/reactjs.png" alt="png" />
                                    </Tooltip >
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <div className='h-40 overflow-hidden'>
                            <img className="rounded-t-lg" src="./images/birthday.png" alt="" />
                        </div>
                        <div className="p-5">
                            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">birthday app</h5>
                            <div className='h-36 overflow-hidden'>
                                <p className="mb-3 text-gray-700 dark:text-gray-400">A UI For birthday app created using ReactJS</p>
                            </div>
                            <Link to="birthday">
                                <div className='flex justify-between'>
                                    <a href='#' className=" px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disable">
                                        Live Demo
                                    </a>
                                </div>
                            </Link>
                            {/*<a href="https://github.com/Nabi-Barki/cocktailproject" target="_blank" className=" px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Source Code
                                    </a>*/}
                            <div className='grid grid-cols-6 gap-2 pt-6'>
                                <div className='border-[1px] p-2'>
                                    <Tooltip content="html" animation="duration-500 ">
                                        <img src="./images/html.png" alt="png" />
                                    </Tooltip>
                                </div>
                                <div className='border-[1px] p-2'>
                                    <Tooltip content="tailwindcss" animation="duration-500 ">
                                        <img src="./images/tailwind.jpg" alt="png" />
                                    </Tooltip >
                                </div>
                                <div className='border-[1px] p-2'>
                                    <Tooltip content="javascript" animation="duration-500 ">
                                        <img src="./images/js.png" alt="png" />
                                    </Tooltip >
                                </div>
                                <div className='border-[1px] p-2'>
                                    <Tooltip content="reactjs" animation="duration-500 ">
                                        <img src="./images/reactjs.png" alt="png" />
                                    </Tooltip >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            <section className='py-8 border-b-2 ' id='contacts'>
                <div className='text-center'>
                    <h1 className='text-xl md:text-2xl lg:text-4xl font-semibold underline decoration-4 decoration-blue-300 underline-offset-[10px]'>Contact Me 📱</h1>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 py-12'>
                    <div>
                        <form ref={form} onSubmit={sendEmail} className='flex flex-col space-y-4 p-6 shadow-[0px_3px_15px_rgba(0,0,0,0.2)]'>
                            <input required type="text" name='user_name' placeholder='Enter name' className='rounded-sm' />
                            <input required type="email" name='user-email' placeholder='Enter email' className='rounded-sm' />
                            <textarea required name='message' cols="30" rows="8" placeholder='Enter text' className='rounded-sm'></textarea>
                            <button className='bg-blue-600 py-2 text-white rounded-sm'>Send Email</button>
                        </form>
                    </div>
                    <div className='grid md:grid-cols-2 gap-6 p-6 shadow-[0px_3px_15px_rgba(0,0,0,0.2)]'>

                        <div className='flex space-y-1 p-2 flex-col items-center justify-center '>
                            <div className='w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-blue-600'>
                                <FaPhone className='text-xl md:text-3xl text-white' />
                            </div>
                            <h3 className='text-sm md:text-lg text-gray-600'>+092 3169248140</h3>
                        </div>

                        <div className='flex space-y-2 p-2 flex-col items-center justify-center '>
                            <div className='w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-blue-600'>
                                <MdEmail className='text-xl md:text-3xl text-white' />
                            </div>
                            <h3 className='text-sm md:text-lg text-gray-600'>nabiameen35126@gmail.com</h3>
                        </div>

                        <div className='flex flex-col items-center justify-center '>
                            <div className='w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-blue-600'>
                                <BsLinkedin className='text-xl md:text-3xl text-white' />
                            </div>
                            <h3 className='text-sm md:text-lg text-gray-600'>Nabi Ameen</h3>
                        </div>
                        <div className='flex flex-col items-center justify-center '>
                            <div className='w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-blue-600'>
                                <MdOutlineLocationOn className='text-xl md:text-3xl text-white' />
                            </div>
                            <h3 className='text-sm md:text-lg text-gray-600'>Peshawar, Pakistan</h3>
                        </div>
                    </div>
                </div>


            </section>
        </div >
    )
}

export default Home
