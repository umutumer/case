import React from 'react'
import { FaPlane, FaPlaneArrival, FaPlaneDeparture } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const FilteredList = () => {
    return (
        <div className='w-full'>
            <div className='w-[90%] h-[250px] bg-white text-gray-800 p-5 rounded-xl rounded-bl-none flex flex-col gap-2 relative mb-20'>
                <h3 className='font-bold text-xl'>Milano - Madrid</h3>
                <div className='flex items-center gap-28'>
                    <div>
                        <div className='flex items-center gap-2'>
                            <FaPlaneDeparture />
                            <p>Departure</p>
                        </div>
                        <p className='font-bold text-xl'>7:30 AM</p>
                        <p>Airport: MXP</p>
                    </div>
                    <hr className='w-32 border-2 border-gray-300' />
                    <div className='flex flex-col items-center gap-2'>
                        <p>Title</p>
                        <FaPlane className='text-purple-900 text-2xl' />
                        <p>2h 25m (Nonstop)</p>
                    </div>
                    <hr className='w-32 border-2 border-gray-300' />
                    <div>
                        <div className='flex items-center gap-2'>
                            <FaPlaneArrival />
                            <p>Arrival</p>
                        </div>
                        <p className='font-bold text-xl'>9:55 AM</p>
                        <p>Airport: MAD</p>
                    </div>
                </div>
                <div>
                    <p className='text-purple-900 text-xl font-bold'>Price: $200</p>
                    <p>Round Trip</p>
                </div>
                <button className='absolute bottom-0 right-0 w-72 h-20 bg-purple-900 rounded-br-xl rounded-tl-xl text-xl font-semibold text-white'>Book Flight</button>
                <Link to={'/'} className='absolute -bottom-10 left-0 w-72 h-10 bg-gray-300 rounded-b-xl text-center text-xl font-semibold text-purple-900'>
                    <p className='underline'>Check Details</p>
                </Link>
            </div>
            <div className='w-[90%] h-[250px] bg-white text-gray-800 p-5 rounded-xl rounded-bl-none flex flex-col gap-2 relative mb-20'>
                <h3 className='font-bold text-xl'>Milano - Madrid</h3>
                <div className='flex items-center gap-28'>
                    <div>
                        <div className='flex items-center gap-2'>
                            <FaPlaneDeparture />
                            <p>Departure</p>
                        </div>
                        <p className='font-bold text-xl'>7:30 AM</p>
                        <p>Airport: MXP</p>
                    </div>
                    <hr className='w-32 border-2 border-gray-300' />
                    <div className='flex flex-col items-center gap-2'>
                        <p>Title</p>
                        <FaPlane className='text-purple-900 text-2xl' />
                        <p>2h 25m (Nonstop)</p>
                    </div>
                    <hr className='w-32 border-2 border-gray-300' />
                    <div>
                        <div className='flex items-center gap-2'>
                            <FaPlaneArrival />
                            <p>Arrival</p>
                        </div>
                        <p className='font-bold text-xl'>9:55 AM</p>
                        <p>Airport: MAD</p>
                    </div>
                </div>
                <div>
                    <p className='text-purple-900 text-xl font-bold'>Price: $234</p>
                    <p>Round Trip</p>
                </div>
                <button className='absolute bottom-0 right-0 w-72 h-20 bg-purple-900 rounded-br-xl rounded-tl-xl text-xl font-semibold text-white'>Book Flight</button>
                <Link to={'/'} className='absolute -bottom-10 left-0 w-72 h-10 bg-gray-300 rounded-b-xl text-center text-xl font-semibold text-purple-900'>
                    <p className='underline'>Check Details</p>
                </Link>
            </div>
        </div>
    )
}

export default FilteredList
