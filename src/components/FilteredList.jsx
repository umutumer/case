import React from 'react'
import { FaPlane, FaPlaneArrival, FaPlaneDeparture } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const FilteredList = ({ flights }) => {

    const calculateFlightDuration = (departureTime, landingTime) => {
        const departure = new Date(departureTime);

        const arrival = new Date(landingTime);
        if (isNaN(departure.getTime()) || isNaN(arrival.getTime())) {
            return "Invalid Time";
        }
        let diffMs = departure - arrival;
        if (diffMs < 0) {
            diffMs += 24 * 60 * 60 * 1000;
        }

        const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
        const diffHours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
        if (diffDays > 0) {
            return `${diffDays}d ${diffHours}h ${diffMinutes}m`;
        }

        return `${diffHours}h ${diffMinutes}m`;
    };

    const loggedInUserId = localStorage.getItem("userId");

    const addFlightToUser = async (flight) => {
        if (!loggedInUserId) {
            window.location.href = "/sign-in"
        } else {
            try {
                const response = await fetch(`http://localhost:3001/api/users/${loggedInUserId}/flights`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ flight })
                })
                const data = await response.json();
            } catch (error) {
                console.log(error);
            }

        }
    }


    return (
        <div className='w-full'>
            {flights.map((flight) => (
                <div
                    key={flight.flightName}
                    className='w-[90%] h-[250px] bg-white text-gray-800 p-5 rounded-xl rounded-bl-none flex flex-col gap-2 relative mb-20'
                >
                    <h3 className='font-bold text-xl'>{flight.prefixICAO} - {flight.route.destinations[0]}</h3>
                    <div className='flex items-center gap-28'>
                        <div>
                            <div className='flex items-center gap-2'>
                                <FaPlaneDeparture />
                                <p>Departure</p>
                            </div>
                            <p className='font-bold text-xl'>
                                {new Date(flight.estimatedLandingTime).toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}
                            </p>
                            <p>Airport: {flight.prefixICAO}</p>
                        </div>
                        <hr className='w-28 border-2 border-gray-300' />
                        <div className='flex flex-col items-center gap-2'>
                            <p>Title</p>
                            <FaPlane className='text-purple-900 text-2xl' />
                            <p>{calculateFlightDuration(flight.scheduleDateTime, flight.estimatedLandingTime)} <span>(Nonstop)</span></p>
                        </div>
                        <hr className='w-28 border-2 border-gray-300' />
                        <div>
                            <div className='flex items-center gap-2'>
                                <FaPlaneArrival />
                                <p>Arrival</p>
                            </div>
                            <p className='font-bold text-xl'>{new Date(flight.scheduleDateTime).toLocaleTimeString('en-US',{ hour: 'numeric', minute: 'numeric', hour12: true })}</p>
                            <p>Airport: {flight.route.destinations[0]}</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <p className='text-purple-900 text-xl font-bold'>Price: ${flight.price || 200}</p>
                    </div>
                    <button onClick={() => addFlightToUser(flight)} className='absolute bottom-0 right-0 w-72 h-20 bg-purple-900 rounded-br-xl rounded-tl-xl text-xl font-semibold text-white'>Book Flight</button>
                    <Link to={'/'} className='absolute -bottom-10 left-0 w-72 h-10 bg-gray-300 rounded-b-xl text-center text-xl font-semibold text-purple-900'>
                        <p className='underline'>Check Details</p>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default FilteredList
