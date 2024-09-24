import React, { useState } from 'react'
import { FaLock, FaPlane, FaUser } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [rePassword, setRePassword] = useState();
    const register = async (e) => {
        e.preventDefault();
        if (!username || !email || !password || !rePassword) {
            console.error('Please fill in all fields.');
            return;
        }
        if (password !== rePassword) {
            alert("Passwords are not the same!")
        } else {
            const formData = {
                username: username,
                email: email,
                password: password
            }
            try {
                const response = await fetch("http://localhost:3001/api/users/register", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData)
                })
                const data = await response.json();
                window.location.href = "/sign-in"
                return data;
            } catch (error) {
                console.log(error);
            }
        }

    }
    return (
        <div className='bg-gray-200 flex items-center justify-center h-screen '>
            <form className='bg-white flex flex-col justify-center items-center w-[60%] h-[90%] p-4 gap-10 rounded-xl shadow-md shadow-purple-900 text-gray-800 relative' onSubmit={register}>
                <div className='flex items-center gap-2 mb-20'>
                    <FaPlane className='bg-purple-900 text-white text-[100px] rounded-full pr-1' />
                    <p className='font-bold text-[60px]'>PLANE SPACE</p>
                </div>
                <div className='w-full relative'>
                    <input type="text" onChange={(e) => setUsername(e.target.value)} className='p-4 w-full border-2 rounded-lg' placeholder='Username' required />
                    <FaUser className='absolute text-xl top-5 right-2 text-purple-900' />
                </div>
                <div className='w-full relative'>
                    <input type="email" onChange={(e) => setEmail(e.target.value)} className='p-4 w-full border-2 rounded-lg' placeholder='E-Mail' required />
                    <IoIosMail className='absolute text-2xl top-5 right-2 text-purple-900' />
                </div>
                <div className='w-full relative'>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} className='p-4 w-full border-2 rounded-lg' placeholder='Password' required />
                    <FaLock className='absolute text-xl top-5  right-2 text-purple-900' />
                </div>
                <div className='w-full relative'>
                    <input type="password" onChange={(e) => setRePassword(e.target.value)} className='p-4 w-full border-2 rounded-lg' placeholder='Re Password' required />
                    <FaLock className='absolute text-xl top-5  right-2 text-purple-900' />
                </div>
                <input type="submit" value="Sign Up" className='w-full bg-purple-900 text-gray-200 p-4 rounded-lg' />
                <div className='absolute bottom-4 left-4 text-gray-400 flex gap-2'>
                    <p>Already have an account?</p>
                    <Link to={'/sign-in'} className='text-blue-500 underline'>Sign In</Link>
                </div>
            </form>
        </div>
    )
}

export default SignUp
