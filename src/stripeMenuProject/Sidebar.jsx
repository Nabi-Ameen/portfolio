import React from 'react'
import { FaTimes } from 'react-icons/fa';
import sublinks from './data';
import { useGlobalContext } from './Context'

const Sidebar = () => {

  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <aside className={isSidebarOpen ? "fixed top-0 left-0 bg-black/40 grid place-items-center w-full h-screen transition duration-300 ease-in-out visible scale-100 z-[1000] " : " fixed top-0 left-0 bg-black/40 grid place-items-center w-full h-screen transition duration-300 ease-in-out z-[-1000] scale-0"}>

      <div className='w-[95vw] h-[95vh] mx-auto bg-white relative p-4 rounded-md'>
        <button className='absolute top-4 right-4 text-xl text-purple-600' onClick={closeSidebar}><FaTimes /></button>

        <div>
          {sublinks.map((item, index) => {
            const { links, page } = item;
            return (
              <article key={index} className="mb-6">
                <h4 className='font-semibold'>{page}</h4>
                <div className='grid grid-cols-2 gap-2 pt-2 pl-2'>
                  {links.map((link, index) => {
                    const { url, icon, label } = link;
                    return (
                      <a key={index} href={url} className="flex items-center space-x-4">
                        <i>{icon}</i>
                        <label>{label}</label>
                      </a>
                    )
                  })}
                </div>
              </article>
            )
          })}
        </div>
      </div>

    </aside>
  )
}

export default Sidebar