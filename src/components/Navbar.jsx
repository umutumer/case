import React, { useState } from 'react'
import { FaPlane } from "react-icons/fa";
import { FaTag } from "react-icons/fa";
import { IoMdArrowDropup } from 'react-icons/io';
import { TiWorld } from "react-icons/ti";
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [modalVisibilty,setModalVisibility] = useState(false);

  const handleChangeModalVisibility = () =>{
    setModalVisibility(!modalVisibilty)
  };
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
        <button onClick={handleChangeModalVisibility} className='flex items-center gap-1 text-xl relative'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s" alt="user-img" className='rounded-full w-10' />
          <p>username</p>
          {modalVisibilty && (
            <div className='flex flex-col gap-2 absolute top-12 z-20 bg-gray-200 border border-white px-4 pt-2 rounded-lg text-gray-800' style={{boxShadow:" 2px 2px 5px 0px rgba(88,28,135,1)"}}>
              <Link to={'/'} className='border-b border-white pb-2 text-center'>Profile</Link>
              <Link to={'/my-flights'} className='border-b border-white pb-2 text-center'>My Flights</Link>
              <button className=' pb-2 text-center'>Logout</button> 
              <IoMdArrowDropup className='absolute text-2xl text-white -top-4 left-12' />
            </div>
          )}
        </button>
      </div>
    </div>
  )
}

export default Navbar