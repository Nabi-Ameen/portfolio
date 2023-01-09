import React,{useState, useRef, useEffect} from 'react'
import { useGlobalContext } from './Context'
const Submenu = () => {
  const { isSubmenuOpen, location, page:{page, links},} = useGlobalContext()
  const container = useRef(null)
  useEffect(() => {
    const submenu = container.current;
    const { center, bottom } = location;
    submenu.style.left = `${center}px`
    submenu.style.top = `${bottom}px`

  },[location])
  return (
    <div className={`${isSubmenuOpen ? "bg-white shadow-md absolute top-16 left-1/2 translate-x-[-50%] z-30 p-8 rounded-sm transition duration-300 ease-in-out visible " : "bg-white shadow-md absolute top-16 left-1/2 translate-x-[-50%] z-30 p-8 rounded-sm transition duration-300 ease-in-out hidden"}`} ref={container}>
      <h3>{page}</h3>
    </div>
  )
}

export default Submenu