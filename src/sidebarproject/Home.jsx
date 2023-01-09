import { FaBars } from 'react-icons/fa';
import {useGlobalContext } from './CreateContext';
const Home = () => {
  const {openSidebar, openModel} = useGlobalContext();

  return (
    <div className=' min-h-screen flex items-center justify-center'>
      <button className=' fixed top-3 left-6 text-3xl transition duration-1000 ease-in-out text-blue-600 animate-pulse cursor-pointer' onClick={openSidebar}>
        <FaBars />
      </button>
      <button className='bg-black py-2 px-6 text-white font-semibold rounded-sm cursor-pointer' onClick={openModel}>Show Model</button>
    </div>
  )
}

export default Home
