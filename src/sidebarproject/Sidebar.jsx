import { FaTimes } from 'react-icons/fa';
import {links, social} from './SideBarData';
import {useGlobalContext} from './CreateContext';


const Sidebar = () => {
  const {isSidebarOpen, closeSidebar} = useGlobalContext();
  return (
    <aside className={` ${isSidebarOpen ? "fixed top-0 left-0 w-[95%] md:w-[30%] h-full bg-blue-700 transition duration-300 ease-in-out translate-x-[0]" : "transition duration-300 ease-in-out translate-x-[-100%]"}`}>
      <div className='flex justify-between items-center px-4 py-2'>
        <img src="./images/logo.jpg" alt="logo" className='w-16 h-16 rounded-full'/>
        <button className='text-white text-3xl ' onClick={closeSidebar}><FaTimes/></button>
      </div>
      <ul className='list-none mt-6'>
        {links.map((link)=>{
          const {id, url, text, icon} = link;
          return (
            <li key={id} className="px-8 py-2 mt-2 hover:bg-white/25">
              <a href={url} className="flex items-center space-x-6">
                <i className='text-2xl text-white'>{icon}</i>
                <p className='text-lg text-white'>{text}</p>
              </a>
            </li>
          )
        })}
      </ul>
      <ul className='flex justify-between px-8 mt-24'>
        {social.map((link)=>{
          const {id, url, icon} = link;
          return(
            <li key={id} className="text-white text-2xl">
              <a href={url}><i>{icon}</i></a>
            </li>
          )
        })}
      </ul>
    </aside>
  )

}

export default Sidebar
