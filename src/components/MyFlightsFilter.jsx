import React from 'react'
import { IoMdStar, IoMdStarOutline } from 'react-icons/io';

const MyFlightsFilter = () => {
    const filterBtns = ["Times", "Stops", "Airlines", "Airports", "Amenities"];
    return (
        <div className='bg-white w-full h-20 flex justify-between items-center px-20'>
            <div>
                {filterBtns.map(filter => (
                    <button className='py-1 px-2 w-28 mx-3 border-2 rounded'>{filter}</button>
                ))}
                <select name="" id="" className='text-blue-500'>
                    <option value="Edit Search" disabled selected >Edit Search</option>
                </select>
            </div>
            <div className='flex text-xl'>
                <div className='border-r-2 px-5'>
                    <div className='flex'>
                        <IoMdStar />
                        <IoMdStar />
                        <IoMdStar className='text-gray-200' />
                    </div>
                    <div className='flex'>
                        <IoMdStar className='text-gray-200' />
                        <IoMdStar className='text-gray-200' />
                        <IoMdStar className='text-gray-200' />
                    </div>
                </div>
                <div className='border-r-2 px-5'>
                    <div className='flex'>
                        <IoMdStar />
                        <IoMdStar />
                        <IoMdStar />
                    </div>
                    <div className='flex'>
                        <IoMdStar className='text-gray-200' />
                        <IoMdStar className='text-gray-200' />
                        <IoMdStar className='text-gray-200' />
                    </div>
                </div>
                <div className='border-r-2 px-5'>
                    <div className='flex'>
                        <IoMdStar />
                        <IoMdStar />
                        <IoMdStar />
                    </div>
                    <div className='flex'>
                        <IoMdStar />
                        <IoMdStar className='text-gray-200' />
                        <IoMdStar className='text-gray-200' />
                    </div>
                </div>
                <div className='border-r-2 px-5'>
                    <div className='flex'>
                        <IoMdStar />
                        <IoMdStar />
                        <IoMdStar />
                    </div>
                    <div className='flex'>
                        <IoMdStar />
                        <IoMdStar />
                        <IoMdStar className='text-gray-200' />
                    </div>
                </div>
                <div className='px-5'>
                    <div className='flex'>
                        <IoMdStar />
                        <IoMdStar />
                        <IoMdStar />
                    </div>
                    <div className='flex'>
                        <IoMdStar />
                        <IoMdStar />
                        <IoMdStar />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyFlightsFilter
