import axios from 'axios';
import React, { useEffect, useState } from 'react';

function App() {
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
    <div>
      <h1>Flights</h1>
      <ul>
        {flights.map(flight => (
          <li key={flight.id}>{flight.flightName}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
