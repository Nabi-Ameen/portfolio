import { Tooltip } from 'flowbite-react';
import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { data, skills } from './data';
import { FaPhone } from 'react-icons/fa';
import { MdEmail, MdOutlineLocationOn } from 'react-icons/md';


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
                    <h4 className='text:md lg:text-xl font-medium pt-1'>and I am front-end- web developer</h4>
                    <p className='py-8  text-gray-600 text-lg lg:text-xl'>A passionate front-end- web Developer 🚀 having a special interest in Frontend technologies and experience of building Web applications with <span className='font-medium'> " html, css, bootstrap, tailwind css, sass, JavaScript, Reactjs, "</span> and some other cool libraries and frameworks.</p>

                    <div className='space-x-0 md:space-x-4 space-y-4 md:space-y-0'>
                        <button className='ring-1 bg-blue-600 px-4 py-2 rounded-sm hover:bg-blue-500 text-white font-medium w-full md:w-auto'>
                            <a href="#" className='flex items-center space-x-3'>
                                <i className='text-2xl '><BsGithub /></i>
                                <p>View on Github</p>
                            </a>
                        </button>
                        <button className='ring-1 bg-blue-600 px-4 py-2 rounded-sm hover:bg-blue-500 text-white font-medium w-full md:w-auto'>
                            <a href="#" className='flex items-center space-x-3'>
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
                        I am a Computer Scientist who just completed post-graduation from the premier IT university <strong>Abasyn</strong> University Peshawar in Computer Science Majors. I am a highly skilled professional <strong>front-end-web developer</strong> who loves to take on the challenges and then solve them.I am an enthusiastic and passionate front-end web developer. my main
                        specialization is doing Web Development. I pursue perfection in my
                        projects. I put dedication in every project that I do. And I hope my
                        dedication will help me to explore my expertise, and to boost up
                        my career plan.
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
                            <div key={id} className="grid grid-cols-5 shadow-[0px_3px_15px_rgba(0,0,0,0.2)] place-items-center rounded-md text-gray-600 p-1 hover:bg-blue-500 hover:text-white cursor-pointer transition duration-200 ease-in-out ">
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

            <section className='py-10 border-b-2' id='Projects'>
                <div className='text-center'>
                    <h1 className='text-xl md:text-2xl lg:text-4xl font-semibold underline decoration-4 decoration-blue-300 underline-offset-[10px]'>Projects 💻</h1>
                </div>

                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 py-16'>

                    <Link to="birthday">
                        <div className='shadow-[0px_3px_15px_rgba(0,0,0,0.2)] rounded-md rounded-md p-4 transition duration-200 ease-in-out hover:scale-[105%] cursor-pointer'>
                            <div className='w-full h-48 overflow-hidden'>
                                <img src="./images/birthday.png" alt="birthday" className=' object-cover object-top' />
                            </div>
                            <div className='pt-4 w-full h-48'>
                                <h3 className='text-xl font-semibold'>birthday app</h3>
                                <p className='py-4 text-[16px] text-gray-500'>A UI For birthday app created using ReactJS</p>
                            </div>

                            <hr />
                            <div className='grid grid-cols-6 gap-2 pt-6'>
                                <div className='border-[1px] p-2'>
                                    <Tooltip content="html" animation="duration-500 ">
                                        <img src="./images/html.png" alt="png" />
                                    </Tooltip>
                                </div>
                                <div className='border-[1px] p-2'>
                                    <Tooltip content="tailwindcss" animation="duration-500 ">
                                        <img src="./images/tailwind.png" alt="png" />
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
                    </Link>

                    <Link to="todoapp">
                        <div className='grid grid-flow-row rounded-md shadow-[0px_3px_15px_rgba(0,0,0,0.2)] p-4 transition duration-200 ease-in-out hover:scale-[105%] cursor-pointer'>
                            <div className='w-full h-48 overflow-hidden'>
                                <img src="./images/todoapp.png" alt="todoapp" />
                            </div>
                            <div className='pt-4 w-full h-48'>
                                <h3 className='text-xl font-semibold'>todo app</h3>
                                <p className='py-4 text-[16px] text-gray-500'>A UI For todo app created using custom hooks context API and using html css tailwindcss javascript and ReactJS</p>
                            </div>


                            <hr />
                            <div className='grid grid-cols-6 gap-2 pt-6'>
                                <div className='border-[1px] p-2'>
                                    <Tooltip content="html" animation="duration-500 ">
                                        <img src="./images/html.png" alt="png" />
                                    </Tooltip>
                                </div>
                                <div className='border-[1px] p-2'>
                                    <Tooltip content="tailwindcss" animation="duration-500 ">
                                        <img src="./images/tailwind.png" alt="png" />
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
                    </Link>

                    <Link to="accordian">
                        <div className='grid grid-flow-row rounded-md shadow-[0px_3px_15px_rgba(0,0,0,0.2)] p-4 transition duration-200 ease-in-out hover:scale-[105%] cursor-pointer'>

                            <div className='w-full h-48 overflow-hidden'>
                                <img src="./images/accordian.png" alt="accordian" />
                            </div>
                            <div className='pt-4 w-full h-48'>
                                <h3 className='text-xl font-semibold'>accordian app</h3>
                                <p className='py-4 text-[16px] text-gray-500'>A UI For accordian app created using html css tailwindcss javascript and ReactJS</p>
                            </div>

                            <hr />
                            <div className='grid grid-cols-6 gap-2 pt-6'>
                                <div className='border-[1px] p-2'>
                                    <Tooltip content="html" animation="duration-500 ">
                                        <img src="./images/html.png" alt="png" />
                                    </Tooltip>
                                </div>
                                <div className='border-[1px] p-2'>
                                    <Tooltip content="tailwindcss" animation="duration-500 ">
                                        <img src="./images/tailwind.png" alt="png" />
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
                    </Link>

                    <Link to="menu">
                        <div className='grid grid-flow-row rounded-md shadow-[0px_3px_15px_rgba(0,0,0,0.2)] p-4 transition duration-200 ease-in-out hover:scale-[105%] cursor-pointer'>
                            <div className='w-full h-48 overflow-hidden'>
                                <img src="./images/ourmenu.png" alt="ourmenu" />
                            </div>
                            <div className='w-full h-48'>
                                <h3 className='text-xl pt-4 font-semibold'>menu app</h3>
                                <p className='py-4 text-[16px] text-gray-500'>A UI For menu app created using html css tailwindcss javascript and ReactJS</p>
                            </div>

                            <hr />
                            <div className='grid grid-cols-6 gap-2 pt-6'>
                                <div className='border-[1px] p-2'>
                                    <Tooltip content="html" animation="duration-500 ">
                                        <img src="./images/html.png" alt="png" />
                                    </Tooltip>
                                </div>
                                <div className='border-[1px] p-2'>
                                    <Tooltip content="tailwindcss" animation="duration-500 ">
                                        <img src="./images/tailwind.png" alt="png" />
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
                                    <Tooltip content="using api" animation="duration-500 ">
                                        <img src="./images/api.png" alt="png" />
                                    </Tooltip >
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link to="sidebar">
                        <div className='grid grid-flow-row rounded-md shadow-[0px_3px_15px_rgba(0,0,0,0.2)] p-4 transition duration-200 ease-in-out hover:scale-[105%] cursor-pointer'>
                            <div className='w-full h-48 overflow-hidden'>
                                <img src="./images/sidebar.png" alt="sidebar" />
                            </div>
                            <div className='pt-4 w-full h-48'>
                                <h3 className='text-xl font-semibold'>sidebar app</h3>
                                <p className='py-4 text-[16px] text-gray-500'>A UI For sidebar app created using html css tailwindcss javascript and ReactJS</p>
                            </div>

                            <hr />
                            <div className='grid grid-cols-6 gap-2 pt-6'>
                                <div className='border-[1px] p-2'>
                                    <Tooltip content="html" animation="duration-500 ">
                                        <img src="./images/html.png" alt="png" />
                                    </Tooltip>
                                </div>
                                <div className='border-[1px] p-2'>
                                    <Tooltip content="tailwindcss" animation="duration-500 ">
                                        <img src="./images/tailwind.png" alt="png" />
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
                    </Link>

                    <Link to="reviews">
                        <div className='grid grid-flow-row shadow-[0px_3px_15px_rgba(0,0,0,0.2)] p-4 transition duration-200 ease-in-out hover:scale-[105%] cursor-pointer'>
                            <div className='w-full h-48 overflow-hidden'>
                                <img src="./images/ourreviews.png" alt="reviews" />
                            </div>
                            <div className='pt-4 w-full h-48'>
                                <h3 className='text-xl font-semibold'>reviews app</h3>
                                <p className='py-4 text-[16px] text-gray-500'>A UI For reviews app created using html css tailwindcss javascript and ReactJS </p>
                            </div>

                            <hr />
                            <div className='grid grid-cols-6 gap-2 pt-6'>
                                <div className='border-[1px] p-2'>
                                    <Tooltip content="html" animation="duration-500 ">
                                        <img src="./images/html.png" alt="png" />
                                    </Tooltip>
                                </div>
                                <div className='border-[1px] p-2'>
                                    <Tooltip content="tailwindcss" animation="duration-500 ">
                                        <img src="./images/tailwind.png" alt="png" />
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
                    </Link>

                    <Link to="shopincart">
                        <div className='grid grid-flow-row shadow-[0px_3px_15px_rgba(0,0,0,0.2)] p-4 transition duration-200 ease-in-out hover:scale-[105%] cursor-pointer'>
                            <div className='w-full h-48 overflow-hidden'>
                                <img src="./images/usereducer.png" alt="usereducer" />
                            </div>
                            <div className='pt-4 w-full h-48'>
                                <h3 className='text-xl font-semibold'>shoping-cart app</h3>
                                <p className='py-4 text-[16px] text-gray-500'>A UI For shoping-cart app created using html css tailwindcss javascript and ReactJS using useReducer</p>
                            </div>

                            <hr />
                            <div className='grid grid-cols-6 gap-2 pt-6'>
                                <div className='border-[1px] p-2'>
                                    <Tooltip content="html" animation="duration-500 ">
                                        <img src="./images/html.png" alt="png" />
                                    </Tooltip>
                                </div>
                                <div className='border-[1px] p-2'>
                                    <Tooltip content="tailwindcss" animation="duration-500 ">
                                        <img src="./images/tailwind.png" alt="png" />
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
                    </Link>

                    <Link to="cocktail">
                        <div className='grid grid-flow-row shadow-[0px_3px_15px_rgba(0,0,0,0.2)] p-4 transition duration-200 ease-in-out hover:scale-[105%] cursor-pointer'>
                            <div className='w-full h-48 overflow-hidden'>
                                <img src="./images/cocktail.png" alt="cocktail" />
                            </div>
                            <div className='pt-4 w-full h-48'>
                                <h3 className='text-xl font-semibold'>cocktail app</h3>
                                <p className='py-4 text-[16px] text-gray-500'>A UI For cocktail app created using html css tailwindcss javascript and ReactJS using context api and custom hooks</p>
                            </div>

                            <hr />
                            <div className='grid grid-cols-6 gap-2 pt-6'>
                                <div className='border-[1px] p-2'>
                                    <Tooltip content="html" animation="duration-500 ">
                                        <img src="./images/html.png" alt="png" />
                                    </Tooltip>
                                </div>
                                <div className='border-[1px] p-2'>
                                    <Tooltip content="tailwindcss" animation="duration-500 ">
                                        <img src="./images/tailwind.png" alt="png" />
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
                    </Link>

                    <Link to="tabs">
                        <div className='grid grid-flow-row shadow-[0px_3px_15px_rgba(0,0,0,0.2)] p-4 transition duration-200 ease-in-out hover:scale-[105%] cursor-pointer'>
                            <div className='w-full h-48 overflow-hidden'>
                                <img src="./images/tabsproject.png" alt="tabsproject" />
                            </div>
                            <div className='pt-4 w-full h-48'>
                                <h3 className='text-xl font-semibold'>tabsproject app</h3>
                                <p className='py-4 text-[16px] text-gray-500'>A UI For tabsproject app created using ReactJS</p>
                            </div>

                            <hr />
                            <div className='grid grid-cols-6 gap-2 pt-6'>
                                <div className='border-[1px] p-2'>
                                    <Tooltip content="html" animation="duration-500 ">
                                        <img src="./images/html.png" alt="png" />
                                    </Tooltip>
                                </div>
                                <div className='border-[1px] p-2'>
                                    <Tooltip content="tailwindcss" animation="duration-500 ">
                                        <img src="./images/tailwind.png" alt="png" />
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
                    </Link>

                    <Link to="tours">
                        <div className='grid grid-flow-row shadow-[0px_3px_15px_rgba(0,0,0,0.2)] p-4 transition duration-200 ease-in-out hover:scale-[105%] cursor-pointer'>
                            <div className='w-full h-48 overflow-hidden'>
                                <img src="./images/tours.png" alt="tours" />
                            </div>
                            <div className='pt-4 w-full h-48'>
                                <h3 className='text-xl font-semibold'>tours app</h3>
                                <p className='py-4 text-[16px] text-gray-500'>A UI For tours app created using ReactJS</p>
                            </div>

                            <hr />
                            <div className='grid grid-cols-6 gap-2 pt-6'>
                                <div className='border-[1px] p-2'>
                                    <Tooltip content="html" animation="duration-500 ">
                                        <img src="./images/html.png" alt="png" />
                                    </Tooltip>
                                </div>
                                <div className='border-[1px] p-2'>
                                    <Tooltip content="tailwindcss" animation="duration-500 ">
                                        <img src="./images/tailwind.png" alt="png" />
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
                                    <Tooltip content="using api" animation="duration-500 ">
                                        <img src="./images/api.png" alt="png" />
                                    </Tooltip >
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link to="stripe">
                        <div className='grid grid-flow-row shadow-[0px_3px_15px_rgba(0,0,0,0.2)] p-4 transition duration-200 ease-in-out hover:scale-[105%] cursor-pointer'>
                            <div className='w-full h-48 overflow-hidden'>
                                <img src="./images/strapi.png" alt="strapi" />
                            </div>
                            <div className='pt-4 w-full h-48'>
                                <h3 className='text-xl font-semibold'>strapi app</h3>
                                <p className='py-4 text-[16px] text-gray-500'>A UI For strapi app created using ReactJS</p>
                            </div>

                            <hr />
                            <div className='grid grid-cols-6 gap-2 pt-6'>
                                <div className='border-[1px] p-2'>
                                    <Tooltip content="html" animation="duration-500 ">
                                        <img src="./images/html.png" alt="png" />
                                    </Tooltip>
                                </div>
                                <div className='border-[1px] p-2'>
                                    <Tooltip content="tailwindcss" animation="duration-500 ">
                                        <img src="./images/tailwind.png" alt="png" />
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
                    </Link>
                </div>
            </section>

            <section className='py-8 border-b-2 ' id='contacts'>
                <div className='text-center'>
                    <h1 className='text-xl md:text-2xl lg:text-4xl font-semibold underline decoration-4 decoration-blue-300 underline-offset-[10px]'>Contact Me 📱</h1>
                </div>

                <div className='grid lg:grid-cols-2 gap-6 py-12'>
                    <form ref={form} onSubmit={sendEmail} className='flex flex-col space-y-4 p-6 shadow-[0px_3px_15px_rgba(0,0,0,0.2)]'>
                        <input required type="text" name='name' placeholder='Enter name' className='rounded-sm' />
                        <input required type="email" name='user-email' placeholder='Enter email' className='rounded-sm' />
                        <textarea required name='message' cols="30" rows="8" placeholder='Enter text' className='rounded-sm'></textarea>
                        <button className='bg-blue-600 py-2 text-white rounded-sm'>Send Email</button>
                    </form>
                    <div className='grid md:grid-cols-2 gap-6 p-6 shadow-[0px_3px_15px_rgba(0,0,0,0.2)]'>

                        <div className='flex space-y-1 p-2 flex-col items-center justify-center '>
                            <div className='w-20 h-20 flex items-center justify-center rounded-full bg-blue-600'>
                                <FaPhone className='text-3xl text-white' />
                            </div>
                            <h3 className='text-lg text-gray-600'>+092 3169248140</h3>
                        </div>

                        <div className='flex space-y-2 p-2 flex-col items-center justify-center '>
                            <div className='w-20 h-20 flex items-center justify-center rounded-full bg-blue-600'>
                                <MdEmail className='text-3xl text-white' />
                            </div>
                            <h3 className='text-lg text-gray-600'>nabiameen35126@gmail.com</h3>
                        </div>

                        <div className='flex flex-col items-center justify-center '>
                            <div className='w-20 h-20 flex items-center justify-center rounded-full bg-blue-600'>
                                <BsLinkedin className='text-3xl text-white' />
                            </div>
                        </div>
                        <div className='flex flex-col items-center justify-center '>
                            <div className='w-20 h-20 flex items-center justify-center rounded-full bg-blue-600'>
                                <MdOutlineLocationOn className='text-3xl text-white' />
                            </div>
                            <h3 className='text-lg text-gray-600'>Peshawar, Pakistan</h3>
                        </div>
                    </div>
                </div>


            </section>




        </div>
    )
}

export default Home
