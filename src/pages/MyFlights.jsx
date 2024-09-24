import React from 'react'
import MyFlightsFilter from '../components/MyFlightsFilter'
import MyFlightList from '../components/MyFlightList'

const MyFlights = () => {
  const loggedInUserId = localStorage.getItem("userId");
  if (loggedInUserId === "null") {
    window.location.href = "/sign-in"
  } else {
    return (
      <div className='bg-gray-200 min-h-screen w-full h-full flex flex-col items-center'>
        <MyFlightsFilter />
        <MyFlightList />
      </div>
    )
  }
}

export default MyFlights
