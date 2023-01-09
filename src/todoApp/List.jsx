import React from 'react'
import {FaEdit, FaTrash} from 'react-icons/fa'
const List = ({items, removeItem, editItem}) => {
  return (
    <div className='pt-4'>
      {items.map((item)=>{
        const {id, title}= item;
        return(
            <div key={id} className="px-2 py-1 flex justify-between mx-auto w-[90%]">
                <p className='text-sm font-semibold text-slate-600'>{title}</p>
                <div className='space-x-4'>
                    <button onClick={()=> editItem(id)} type='button' className='text-sky-400 hover:text-sky-600'><FaEdit/></button>
                    <button onClick={()=> removeItem(id)} type='button' className='text-red-400 hover:text-red-600'><FaTrash/></button>
                </div>
            </div>
        )
      })}
    </div>
  )
}

export default List
