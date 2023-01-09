import React from 'react'
import { FaTimes } from 'react-icons/fa'
import {useGlobalContext } from './CreateContext';


const Model = () => {
    const {isModelOpen, closeModel} = useGlobalContext();
    return (
        <div className={`${isModelOpen ? "fixed top-0 left-0 bg-black/40 w-full h-full grid place-items-center transition ease-in-out duration-1000 visible" : "hidden"}`}>
            <div className='w-[90] md:w-[60vw] h-[30vh] bg-white grid place-items-center font-semibold rounded-md relative'>
                <h3>Model Content</h3>
                <button className='absolute top-2 right-3 text-lg text-red-700' onClick={closeModel}><FaTimes /></button>
            </div>
        </div>
    )
}

export default Model