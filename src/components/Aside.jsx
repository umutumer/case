import React from 'react'
import { FaUmbrellaBeach } from 'react-icons/fa';
import { IoCarSportOutline } from "react-icons/io5";
import { PiBuilding } from 'react-icons/pi';
const Aside = () => {
    return (
        <div>
            <div className='mb-5 bg-orange-600 rounded-2xl relative'>
                <img
                    src="https://www.mraristotle.com/wp-content/uploads/2020/12/Travelling-By-Car-On-Holiday.jpeg"
                    alt="CAR-RENTALS"
                    className='w-[350px] h-[300px] object-cover rounded-2xl opacity-75'
                />
                <div className='absolute bottom-2 left-2 text-3xl text-white'>
                <IoCarSportOutline />
                <p className='font-semibold'>CAR RENTALS</p>
                </div>
            </div>
            <div className='mb-5 bg-blue-600 rounded-2xl relative'>
                <img
                    src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/fb/7d/4d/night-hotel-bangkok-sukhumvit.jpg?w=700&h=-1&s=1"
                    alt="HOTELS"
                    className='w-[350px] h-[300px] object-cover rounded-2xl opacity-75'
                />
                 <div className='absolute bottom-2 left-2 text-3xl text-white'>
                <PiBuilding />
                <p className='font-semibold'>HOTELS</p>
                </div>
            </div>
            <div className=' bg-green-600 rounded-2xl relative mb-10'>
                <img src="https://media.istockphoto.com/id/1306482297/photo/man-packs-suitcase-ready-for-adventure-travel-trip.jpg?s=612x612&w=0&k=20&c=OC9YPTjerFyC0l9pGw-LkXtpWf49Vx9bVEUI-RZZtw0="
                    alt="TRAVEL-PACKAGES"
                    className='w-[350px] h-[300px] object-cover rounded-2xl opacity-75'
                />
                 <div className='absolute bottom-2 left-2 text-3xl text-white'>
                 <FaUmbrellaBeach />
                <p className='font-semibold'>TRAVEL PACKAGES</p>
                </div>
            </div>
        </div>
    )
}

export default Aside
