import React from 'react'
import CartItem from './CartItem'
import { useGlobalContext } from "./context";

const CartContainer = () => {
  const { cart, total, clearCart } = useGlobalContext();
  if (cart.length === 0) {
    return (
      <section>
        <header className='text-center py-32 space-y-6'>
          <h2 className='text-2xl font-bold '>your bag</h2>
          <h4 className='text-lg font-semibold text-gray-500'>is currently empty</h4>
        </header>
      </section>
    );
  };
  return (
    <section className='mx-8'>
      <header>
        <h2 className='text-center text-lg font-bold uppercase tracking-wider pt-10 '>your bag</h2>
      </header>

      <div>
        {
          cart.map((item) => {
            return <CartItem key={item.id} {...item} />
          })
        }
      </div>

      <footer>
        <hr className='border-[1px] border-black/30 mt-8' />
        
        <div className='flex justify-between pt-2 font-semibold'>
          <h4 className=''>Total</h4>
          <p>${total}</p>
        </div>

        <div className='py-4 grid place-content-center'>
          <button
            onClick={clearCart}
            className='text-red-500 px-6 py-1 border-2 border-red-500 hover:bg-red-500 hover:text-white rounded-sm'>clear cart</button>
        </div>
      </footer>
    </section>
  )
}

export default CartContainer
