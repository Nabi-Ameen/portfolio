import React from 'react'

const Menu = ({ items }) => {
    return (
        <div className='grid md:grid-cols-2 gap-3'>
            {items.map((menuItem) => {
                const { id, title, image, price, desc } = menuItem;
                return (
                    <article key={id} className="lg:flex items-center mt-4 border-[1px] shadow-md">
                        <img src={image} alt={title} className="w-full lg:w-1/2 lg:h-40 object-cover ring-2 ring-orange-500" />
                        <header className='px-4'>
                            <div className='flex justify-between'>
                                <h3 className='text-md text-gray-500 font-bold capitalize'>{title}</h3>
                                <h3 className='text-md text-orange-500 font-bold '>${price}</h3>
                                
                            </div>
                            <hr className='mt-2'/>
                            <p className='text-sm text-gray-500 pt-4'>{desc}</p>
                        </header>

                    </article>
                )
            })}
        </div>
    )
}

export default Menu