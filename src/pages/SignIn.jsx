import React, { useState } from 'react'
import { FaLock, FaPlane, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SignIn = () => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const login = async (e) =>{
        e.preventDefault();
        if (username || password) {
            try {
                const formData ={
                    username:username,
                    password:password
                }
                const response = await fetch("http://localhost:3001/api/users/login",{
                    method:"POST",
                    headers:{
                        "Content-Type" :"application/json"
                    },
                    body:JSON.stringify(formData)
                })
                const data = await response.json();
                
                localStorage.setItem("userId",data.userId)
                window.location.href = "/"
            } catch (error) {
                console.log(error);      
            }
        }else{
            alert('Please fill in all fields.');
        }
    }
  return (
    <div className='bg-gray-200 flex items-center justify-center h-screen '>
    <form className='bg-white flex flex-col justify-center items-center w-[60%] h-[90%] p-4 gap-10 rounded-xl shadow-md shadow-purple-900 text-gray-800 relative' onSubmit={login}>
        <div className='flex items-center gap-2 mb-20'>
            <FaPlane className='bg-purple-900 text-white text-[100px] rounded-full pr-1' />
            <p className='font-bold text-[60px]'>PLANE SPACE</p>
        </div>
        <div className='w-full relative'>
            <input type="text" onChange={(e) => setUsername(e.target.value)} className='p-4 w-full border-2 rounded-lg' placeholder='Username' />
            <FaUser className='absolute text-xl top-5 right-2 text-purple-900' />
        </div>
        <div className='w-full relative'>
            <input type="password" onChange={(e) => setPassword(e.target.value)} className='p-4 w-full border-2 rounded-lg' placeholder='Password' />
            <FaLock  className='absolute text-xl top-5  right-2 text-purple-900' />
        </div>
        <input type="submit" value="Sign In" className='w-full bg-purple-900 text-gray-200 p-4 rounded-lg' />
        <div className='absolute bottom-4 left-4 text-gray-400 flex gap-2'>
            <p>Don't have an account?</p>
            <Link to={'/sign-up'} className='text-blue-500 underline'>Sign Up</Link>
        </div>
    </form>
</div>
  )
}

export default SignIn
