// src/CargoList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CargoList = () => {
  const [cargoItems, setCargoItems] = useState([]);

  useEffect(() => {
    axios.get('/api/cargo/')
      .then(response => setCargoItems(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <ul>
      {cargoItems.map(item => (
        <li key={item.id}>
          <h3>Tracking Number: {item.tracking_number}</h3>
          <p>Description: {item.description}</p>
          <p>Weight: {item.weight} kg</p>
          <p>Origin: {item.origin}</p>
          <p>Destination: {item.destination}</p>
          <p>Status: {item.status}</p>
        </li>
      ))}
    </ul>
  );
};

export default CargoList;