import React, { useEffect, useState } from 'react'
import { IoIosArrowDown, IoMdInformationCircleOutline } from 'react-icons/io'

const MyFlightList = () => {
    const [myFlights, setMyFlights] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const loggedInUserId = localStorage.getItem("userId");

    const getUserById = async () => {
        if (loggedInUserId !== "null") {
            try {
                const response = await fetch(`http://localhost:3001/api/users/${loggedInUserId}`)
                const data = await response.json();
                setMyFlights(data.myFlights)
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false)
            }
        } else {
            return;
        }
    }
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
    useEffect(() => {
        getUserById();
    }, []);
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
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
                {myFlights && myFlights.map((flightobj, index) => (
                    <div key={index} className='bg-white w-full flex justify-between h-56 p-10 rounded-xl shadow-md shadow-gray-300 mb-5'>
                        <div>
                            <div className='flex items-center mb-5 gap-6'>
                                <img src="https://i0.wp.com/companieslogo.com/img/orig/DAL-3ea1d23b.png?t=1648913453?resize=160,120" alt="logo" className='w-10 h-10 rounded-full border' />
                                <p className='text-4xl font-light'>
                                    {new Date(flightobj.flight.estimatedLandingTime).toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })} - {new Date(flightobj.flight.scheduleDateTime).toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}
                                </p>
                            </div>
                            <div className='flex gap-36 text-lg ml-16'>
                                <div>
                                    <p className='font-semibold'>{flightobj.flight.prefixICAO} Airlines</p>
                                    <button className='flex items-center text-blue-400'>Flight Details<IoIosArrowDown /> </button>
                                </div>
                                <div>
                                    <p className='font-semibold'>NonStop</p>
                                    <p className='text-gray-400'>{calculateFlightDuration(flightobj.flight.scheduleDateTime, flightobj.flight.estimatedLandingTime)}</p>
                                </div>
                                <div>
                                    <p className='font-semibold'>{flightobj.flight.prefixICAO} to {flightobj.flight.route.destinations[0]}</p>
                                    <p className='text-gray-400'>{flightobj.flight.codeshares.codeshares[0]}</p>
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
                ))}
            </div>
        </div>
    )
}

export default MyFlightList
