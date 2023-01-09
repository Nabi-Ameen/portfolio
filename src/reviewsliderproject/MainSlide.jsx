import React,{useState, useEffect} from 'react'
import {FiChevronRight, FiChevronLeft} from 'react-icons/fi'
import {FaQuoteRight} from 'react-icons/fa'
import reviewsdata from './ReviewData'
const MainSlide = () => {
    const [people, setPeople]= useState(reviewsdata);
    const [index, setIndex] = useState(0);
  return (
    <section className='w-9/12 mx-auto md:p-6'>
        <div>
            <h1 className='text-xl font-bold text-center underline underline-offset-8'>Reviews</h1>
        </div>

        <div className='relative flex text-center'>
            {people.map((person)=>{
                const {id, image, name, title, info}= person;
                return(
                    <div className='absolute z-20 top-4 p-6' key={id}>
                        <img src={image} alt={name} className="mx-auto ring-2 ring-offset-2 ring-opacity-70 rounded-full"/>
                        <h1 className='pt-4'>{name}</h1>
                        <p>{title}</p>
                        <p className='lg:px-40'>{info}</p>
                        <FaQuoteRight className='text-red-700 mx-auto mt-6'/>
                    </div>
                )
            })}
            <button className='absolute top-32 left-0 md:left-6 w-6 h-6 rounded bg-red-700 text-white text-lg flex items-center justify-center'>
                <FiChevronLeft/>
            </button>
            <button className='absolute top-32 right-0 md:right-6 w-6 h-6 rounded bg-red-700 text-white text-lg flex items-center justify-center'>
                <FiChevronRight/>
            </button>

        </div>


    </section>
  )
}

export default MainSlide