import React from 'react'
import { IoIosArrowDown, IoMdInformationCircleOutline } from 'react-icons/io'

const MyFlightList = () => {
    return (
        <div className='w-[95%] flex flex-col items-center  text-gray-800'>
            <div className='w-full flex justify-between items-center my-10 text-xl'>
                <div className='flex gap-1 items-center'>
                    <p>Sort By:</p>
                    <select name="" id="" className='bg-gray-200 font-semibold'>
                        <option value="Recomended">Recomended</option>
                    </select>
                </div>
                <div className='flex gap-1 items-center'>
                    <IoMdInformationCircleOutline className='text-blue-500 text-3xl' />
                    <p>Avg Fare: <span className='font-semibold'>$225</span></p>
                </div>
            </div>
            <div className='w-full'>
                <div className='bg-white w-full flex justify-between h-56 p-10 rounded-xl shadow-md shadow-gray-300 mb-5'>
                    <div>
                        <div className='flex items-center mb-5 gap-6'>
                            <img src="https://i0.wp.com/companieslogo.com/img/orig/DAL-3ea1d23b.png?t=1648913453?resize=160,120" alt="logo" className='w-10 h-10 rounded-full border' />
                            <p className='text-4xl font-light'>7:40 AM - 9:12 AM</p>
                        </div>
                        <div className='flex gap-36 text-lg ml-16'>
                            <div>
                                <p className='font-semibold'>Delta Airlines</p>
                                <button className='flex items-center text-blue-400'>Flight Details<IoIosArrowDown /> </button>
                            </div>
                            <div>
                                <p className='font-semibold'>NonStop</p>
                                <p className='text-gray-400'>1h 32m</p>
                            </div>
                            <div>
                                <p className='font-semibold'>SFO to LAX</p>
                                <p className='text-gray-400'>DL 1443</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-3'>
                        <div className='text-2xl flex flex-col items-center justify-center border-2 rounded-xl w-28 h-32'>
                            <p className='font-semibold m-2'>$156</p>
                            <p className='text-gray-400 m-2 text-xl text-center'>Main</p>
                        </div>
                        <div className='text-2xl flex flex-col items-center justify-center border-2 rounded-xl w-28 h-32'>
                            <p className='font-semibold m-2'>$204</p>
                            <p className='text-gray-400 m-2 text-xl text-center'>Comfort+</p>
                        </div>
                        <div className='text-2xl flex flex-col items-center justify-center bg-gray-200 rounded-xl w-28 h-32'>
                            <p className='text-gray-300 font-bold text-center'>- - -</p>
                        </div>
                        <div className='text-2xl flex flex-col items-center justify-center border-2 rounded-xl w-28 h-32'>
                            <p className='font-semibold m-2'>$386</p>
                            <p className='text-gray-400 m-2 text-xl text-center'>Delta One</p>
                        </div>
                        <div className='text-2xl flex flex-col items-center justify-center bg-gray-200 rounded-xl w-28 h-32'>
                            <p className='text-gray-300 font-bold text-center'>- - -</p>
                        </div>
                    </div>
                </div>
                <div className='bg-white w-full flex justify-between h-56 p-10 rounded-xl shadow-md shadow-gray-300 mb-5'>
                    <div>
                        <div className='flex items-center mb-5 gap-6'>
                            <img src="https://seeklogo.com/images/A/american-airlines-logo-F44A055D11-seeklogo.com.png" alt="logo" className='w-10 h-10 rounded-full border' />
                            <p className='text-4xl font-light'>7:00 AM - 8:52 AM</p>
                        </div>
                        <div className='flex gap-36 text-lg ml-16'>
                            <div>
                                <p className='font-semibold'>American Airlines</p>
                                <button className='flex items-center text-blue-400'>Flight Details<IoIosArrowDown /> </button>
                            </div>
                            <div>
                                <p className='font-semibold'>NonStop</p>
                                <p className='text-gray-400'>1h 52m</p>
                            </div>
                            <div>
                                <p className='font-semibold'>SFO to LAX</p>
                                <p className='text-gray-400'>AA 166</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-3'>
                        <div className='text-2xl flex flex-col items-center justify-center border-2 rounded-xl w-28 h-32'>
                            <p className='font-semibold m-2'>$182</p>
                            <p className='text-gray-400 m-2 text-xl text-center'>Main</p>
                        </div>
                        <div className='text-2xl flex flex-col items-center justify-center bg-gray-200 rounded-xl w-28 h-32'>
                            <p className='text-gray-300 font-bold text-center'>- - -</p>
                        </div>
                        <div className='text-2xl flex flex-col items-center justify-center bg-gray-200 rounded-xl w-28 h-32'>
                            <p className='text-gray-300 font-bold text-center'>- - -</p>
                        </div>
                        <div className='text-2xl flex flex-col items-center justify-center border-2 rounded-xl w-28 h-32'>
                            <p className='font-semibold m-2'>$400</p>
                            <p className='text-gray-400 m-2 text-xl text-center'>First</p>
                        </div>
                        <div className='text-2xl flex flex-col items-center justify-center bg-gray-200 rounded-xl w-28 h-32'>
                            <p className='text-gray-300 font-bold text-center'>- - -</p>
                        </div>
                    </div>
                </div>
                <div className='bg-white w-full flex justify-between h-56 p-10 rounded-xl shadow-md shadow-gray-300 mb-5'>
                    <div>
                        <div className='flex items-center mb-5 gap-6'>
                            <img src="https://www.karlstechnology.com/blog/wp-content/uploads/2023/02/Southwest-Airlines.png" alt="logo" className='w-10 h-10 rounded-full border' />
                            <p className='text-4xl font-light'>8:15 AM - 9:50 AM</p>
                        </div>
                        <div className='flex gap-36 text-lg ml-16'>
                            <div>
                                <p className='font-semibold'>Soutwest Airlines</p>
                                <button className='flex items-center text-blue-400'>Flight Details<IoIosArrowDown /> </button>
                            </div>
                            <div>
                                <p className='font-semibold'>NonStop</p>
                                <p className='text-gray-400'>1h 35m</p>
                            </div>
                            <div>
                                <p className='font-semibold'>SFO to LAX</p>
                                <p className='text-gray-400'>WN 2234</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-3'>
                        <div className='text-2xl flex flex-col items-center justify-center border-2 rounded-xl w-28 h-32'>
                            <p className='font-semibold m-2'>$225</p>
                            <p className='text-gray-400 m-2 text-xl text-center'>Anytime</p>
                        </div>
                        <div className='text-2xl flex flex-col items-center justify-center border-2 rounded-xl w-28 h-32'>
                            <p className='font-semibold m-2'>$253</p>
                            <p className='text-gray-400 m-2 text-xl text-center'>Businnes Select</p>
                        </div>
                        <div className='text-2xl flex flex-col items-center justify-center bg-gray-200 rounded-xl w-28 h-32'>
                            <p className='text-gray-300 font-bold text-center'>- - -</p>
                        </div>
                        <div className='text-2xl flex flex-col items-center justify-center bg-gray-200 rounded-xl w-28 h-32'>
                            <p className='text-gray-300 font-bold text-center'>- - -</p>
                        </div>
                        <div className='text-2xl flex flex-col items-center justify-center bg-gray-200 rounded-xl w-28 h-32'>
                            <p className='text-gray-300 font-bold text-center'>- - -</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyFlightList
