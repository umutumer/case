import React, { useState } from 'react'
import { FaPlane, FaPlaneArrival, FaPlaneDeparture } from 'react-icons/fa'

const BookYourFlights = ({ flights ,setDeparture,setArrival,setDepartureDate,setReturnDate }) => {
    const [selectedFlightType, setSelectedFlightType] = useState("Round Trip");
    const handleDepartureChange = (e) => {
        setDepartureDate(e.target.value);
      };
      const handleReturnChange = (e) => {
        setReturnDate(e.target.value);
      };
      const handleSelectDeparture = (e) => {
        setDeparture(e.target.value);
    };

    const handleSelectArrival = (e) => {
        setArrival(e.target.value);
    };
    return (
        <div className='bg-white text-gray-800 w-full p-5 rounded-xl h-60 flex flex-col gap-4'>
            <div className='flex justify-between p-2'>
                <div className='flex items-center gap-2'>
                    <FaPlane className='text-[30px] rounded-full pr-1' />
                    <p className='font-bold text-[20px]'>BOOK YOUR FLIGHT</p>
                </div>
                <div>
                    <button
                        className={`${selectedFlightType === "Round Trip" ? "bg-purple-900 text-gray-200" : "bg-gray-200 text-purple-900"} w-28 p-2 rounded-l-xl font-semibold`}
                        onClick={() => setSelectedFlightType("Round Trip")}
                    >
                        Round Trip
                    </button>
                    <button
                        className={`${selectedFlightType === "One Way" ? "bg-purple-900 text-gray-200" : "bg-gray-200 text-purple-900"} w-28 p-2 rounded-r-xl font-semibold`}
                        onClick={() => setSelectedFlightType("One Way")}
                    >
                        One Way
                    </button>
                </div>
            </div>
            <div className='flex justify-between p-2'>
                <div className='flex gap-2'>
                    <div className='relative'>
                        <select className='appearance-none pl-8 py-2 w-80 focus:outline-none border-2 rounded-l-3xl' onChange={handleSelectDeparture}>
                            <option value="" disabled selected></option>
                            {flights &&
                                [...new Set(flights.map(flight => flight.prefixICAO))].map((uniqueFlight, index) => (
                                    <option key={index} value={uniqueFlight}>{uniqueFlight}</option>
                                ))
                            }
                        </select>
                        <FaPlaneDeparture className='absolute top-2 left-2 text-xl text-purple-900' />
                    </div>
                    <div className='relative'>
                        <select className='appearance-none pl-8 py-2 w-80 focus:outline-none border-2 rounded-r-3xl' onChange={handleSelectArrival}>
                            <option value="" disabled selected></option>
                            {flights &&
                                [...new Set(flights.map(flight => flight.route.destinations[0]))].map((uniqueDestination, index) => (
                                    <option key={index} value={uniqueDestination}>{uniqueDestination}</option>
                                ))
                            }
                        </select>
                        <FaPlaneArrival className='absolute top-2 left-2 text-xl text-purple-900' />
                    </div>
                </div>
                <div className='flex gap-2'>
                    <input type="date" min={new Date().toISOString().split("T")[0]} className='pl-8 py-2 w-80 focus:outline-none border-2 rounded-l-3xl' onChange={handleDepartureChange}  />
                    <input type="date" min={new Date().toISOString().split("T")[0]} className='pl-8 py-2 w-80 focus:outline-none border-2 rounded-r-3xl'   onChange={handleReturnChange} />
                </div>
            </div>
            <button className=' ml-2 bg-purple-900 py-2 px-4 text-white rounded-lg w-40 font-semibold'>Show flights</button>
        </div>
    )
}

export default BookYourFlights