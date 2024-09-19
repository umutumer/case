<<<<<<< HEAD
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar';
import BookYourFlights from '../components/BookYourFlights';
import Aside from '../components/Aside';
import FilteredList from '../components/FilteredList';
import FilterAside from '../components/FilterAside';

const Home = () => {
    const [flights, setFlights] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      axios.get('http://localhost:3001/api/flights')
        .then(response => {
          setFlights(response.data.flights);
          console.log(response.data);
          
          setLoading(false);
        })
        .catch(err => {
          setError(err);
          setLoading(false);
        });
    }, []);
  
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
  return (
    <div className='bg-gray-200 w-full min-h-screen h-full flex flex-col items-center'>
      <Navbar />
      <div className='w-[95%] flex'>
        <div className='w-[80%] '>
          <BookYourFlights />
          <div className='w-full flex mt-10'>
        <FilteredList />
        <FilterAside />
      </div>
        </div>
        <div className='w-[20%] pl-10'>
          <Aside />
        </div>
      </div>
    </div>
  )
}

export default Home
=======
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar';
import BookYourFlights from '../components/BookYourFlights';
import Aside from '../components/Aside';
import FilteredList from '../components/FilteredList';
import FilterAside from '../components/FilterAside';

const Home = () => {
    const [flights, setFlights] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      axios.get('http://localhost:3001/api/flights')
        .then(response => {
          setFlights(response.data.flights);
          console.log(response.data);
          
          setLoading(false);
        })
        .catch(err => {
          setError(err);
          setLoading(false);
        });
    }, []);
  
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
  return (
    <div className='bg-gray-200 w-full min-h-screen h-full flex flex-col items-center'>
      <Navbar />
      <div className='w-[95%] flex'>
        <div className='w-[80%] '>
          <BookYourFlights />
          <div className='w-full flex mt-10'>
        <FilteredList />
        <FilterAside />
      </div>
        </div>
        <div className='w-[20%] pl-10'>
          <Aside />
        </div>
      </div>
    </div>
  )
}

export default Home
>>>>>>> 61e04054809c0c801fe646b6773f838ead717a30
