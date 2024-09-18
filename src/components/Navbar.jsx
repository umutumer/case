import React from 'react'
import { FaPlane } from "react-icons/fa";
import { FaTag } from "react-icons/fa";
import { TiWorld } from "react-icons/ti";
const Navbar = () => {
  return (
    <div className='flex justify-between items-center w-[95%] h-28 text-gray-800'>
      <div className='flex items-center gap-2'>
        <FaPlane className='bg-purple-900 text-gray-200 text-[50px] rounded-full pr-1' />
        <p className='font-bold text-[30px]'>PLANE SPACE</p>
      </div>
      <div className='flex gap-10'>
        <div className='flex items-center gap-1 text-xl'>
          <FaTag   className='text-purple-900'/>
          <p>Deals</p>
        </div>
        <div className='flex items-center gap-1 text-xl'>
        <TiWorld className='text-purple-900 text-2xl'/>
        <p>Discover</p>
        </div>
        <div className='flex items-center gap-1 text-xl'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s" alt="user-img" className='rounded-full w-10' />
          <p>username</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar
