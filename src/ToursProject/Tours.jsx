import React from 'react'
import Tour from './Tour'
const Tours = ({tours, removeTour}) => {
  return (
    <section className='py-4 px-7 lg:px-28'>
      <div className='flex flex-col justify-center items-center'>
        <h2 className='text-xl font-bold'>Ours Tours</h2>
        <div className='w-16 h-1 bg-blue-600 mt-1 rounded-sm'></div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-16">
        {tours.map((tour) =>{
            return <Tour key={tour.id} {...tour} removeTour={removeTour}/>
        })}
      </div>
    </section>
  )
}

export default Tours
