import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import BookYourFlights from '../components/BookYourFlights';
import Aside from '../components/Aside';
import FilteredList from '../components/FilteredList';
import FilterAside from '../components/FilterAside';

const Home = () => {
  const [flights, setFlights] = useState([]);
  const [filteredFlights, setFilteredFlights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [departure, setDeparture] = useState('');
  const [arrival, setArrival] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [arrivalTime, setArrivalTime] = useState('');

  const getFlights = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/flights');
      const data = await response.json();
      setFlights(data.flights);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  const filterFlights = () => {
    const filtered = flights.filter(flight => {
      const matchesDeparture = departure ? flight.prefixICAO === departure : true;
      const matchesArrival = arrival ? flight.route?.destinations[0] === arrival : true;
      const matchesDepartureDate = departureDate ? flight.scheduleDateTime?.split('T')[0] === departureDate : true;
      const matchesReturnDate = returnDate ? flight.estimatedLandingTime?.split('T')[0] === returnDate : true;
      const arrivalHour = new Date(flight.estimatedLandingTime).getHours();
      
      const matchesArrivalTime =
        arrivalTime === 'morning' ? (arrivalHour >= 0 && arrivalHour < 12) :
        arrivalTime === 'afternoon' ? (arrivalHour >= 12 && arrivalHour < 24) :
        true;

      return matchesDeparture && matchesArrival && matchesDepartureDate && matchesReturnDate && matchesArrivalTime;
    });
    setFilteredFlights(filtered);
  };

  useEffect(() => {
    if (flights.length > 0) {
      filterFlights();
    }
  }, [flights, departure, arrival, departureDate, returnDate, arrivalTime]);

  useEffect(() => {
    getFlights();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className='bg-gray-200 w-full min-h-screen h-full flex flex-col items-center'>
      <Navbar />
      <div className='w-[95%] flex'>
        <div className='w-[80%] '>
          <BookYourFlights
            flights={flights}
            setDeparture={setDeparture}
            setArrival={setArrival}
            setDepartureDate={setDepartureDate}
            setReturnDate={setReturnDate}
          />
          <div className='w-full flex mt-10'>
            <FilteredList flights={filteredFlights} />
            <FilterAside setArrivalTime={setArrivalTime} />
          </div>
        </div>
        <div className='w-[20%] pl-10'>
          <Aside />
        </div>
      </div>
    </div>
  );
};

export default Home;
