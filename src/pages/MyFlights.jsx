import React from 'react'
import MyFlightsFilter from '../components/MyFlightsFilter'
import MyFlightList from '../components/MyFlightList'

const MyFlights = () => {
  return (
    <div className='bg-gray-200 min-h-screen w-full h-full flex flex-col items-center'>
      <MyFlightsFilter />
      <MyFlightList />
    </div>
  )
}

export default MyFlights
