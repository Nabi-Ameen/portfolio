import React, { useState } from 'react'
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'
const Question = ({title, info}) => {
    const [showInfo, setShowInfo]= useState(false)
    return (
        <div className='mt-4 border-2 rounded p-3 shadow-md '>
            <div className='flex justify-between'>
                <h1 className='text-[14px] md:text-[18px] font-semibold'>{title}</h1>
                <button className='text-blue-800 text-sm' onClick={()=> setShowInfo(!showInfo)}>{showInfo?<AiOutlineMinus/>:<AiOutlinePlus />}</button>
            </div>

            {showInfo && <p className='px-2 py-3 text-gray-500'>{info}</p>}
        </div>
    )
}

export default Question