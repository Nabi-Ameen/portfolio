import React from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { useGlobalContext } from "./context";

const CartItem = ({ id, img, title, price, amount }) => {
  const { remove, increase, decrease } = useGlobalContext();
  return (
    <article className='grid grid-cols-6 mt-5'>
      <img src={img} alt={title} className="w-full h-full" />
      
      <div className='col-span-4 pt-2'>
        <h4 className='font-semibold tracking-wider'>{title}</h4>
        <h4 className='text-gray-500 text-sm tracking-wider'>${price}</h4>
        <button
          onClick={()=> remove(id)}
          className='text-blue-500 tracking-wider pt-2'>remove</button>
      </div>

      <div className='text-center pt-2'>
        <button
          onClick={()=> increase(id)}
          className='text-blue-500 text-lg'>
          <IoIosArrowUp/>
        </button>
        <p>{amount}</p>
        <button
          onClick={() => decrease(id)}
          className='text-blue-500 text-lg'>
          <IoIosArrowDown/>
        </button>

      </div>

    </article>
  )
}

export default CartItem