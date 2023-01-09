import React from 'react'

const Categories = ({categories, filterItems}) => {
  return (
    <div className='space-x-6 py-4 text-center'>
        {categories.map((category, index)=>{
            return(
                <button
                    type='button'
                    className='text-orange-500 text-sm font-bold capitalize hover:text-orange-400
                     bg-orange-200 py-1 px-3 rounded'
                    key={index}
                    onClick={()=>filterItems(category)}
                >
                    {category}
                </button>
            )
        })}
    </div>
  )
}

export default Categories