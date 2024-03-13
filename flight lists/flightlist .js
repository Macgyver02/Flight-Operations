// src/FlightList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FlightList = () => {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    axios.get('/api/flights/')
      .then(response => setFlights(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <ul>
      {flights.map(flight => (
        <li key={flight.id}>
          {flight.flight_number} ({flight.origin} - {flight.destination})
        </li>
      ))}
    </ul>
  );
};

export default FlightList;