import React, {useState} from 'react'

const Tour = ({id, image, info, price, name, removeTour}) => {
    const [readmore, setReadMore]= useState(false)
  return (
    <div className='shadow-lg shadow-gray-300 mt-4 py-2'>
      <div className='w-full h-60'>
      <img src={image} alt={name} className="w-full h-full rounded-sm object-fill "/>
      </div>
      <div className='flex justify-between p-4'>
        <h1 className='text-lg font-semibold text-gray-500'>{name}</h1>
        <h3 className='text-lg font-semibold text-blue-500 bg-blue-100 px-2 rounded'>{price}</h3>
      </div>
      <div className='px-4'>
        <p className='text-sm text-gray-500 text-justify'>
            {readmore ? info : `${info.substring(0, 180)}...`}
            <button className=' text-blue-500 bg-blue-50 px-2 rounded font-semibold text-xs' onClick={()=>setReadMore(!readmore)}>{readmore? "Show Less": "Read More"}</button>
        </p>
      </div>
      <button onClick={()=> removeTour(id)} className='border-2 border-red-300 rounded text-red-500 px-4 my-4 grid mx-auto'>Not Interseted</button>
    </div>
  )
}

export default Tour
