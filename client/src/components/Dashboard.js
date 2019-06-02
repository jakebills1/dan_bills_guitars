import React, { useState, useEffect, } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [availableGuitars, setAvailableGuitars] = useState([]);
  useEffect( () => {
    axios.get("/api/guitars")
      .then( res => setAvailableGuitars(res.data))
      .catch( res => console.log(res))
  }, []
  );
  const listAvailableGuitars = () => {
    // lists guitars available for sale, with options to delete or edit details
    
    return availableGuitars.map( gtr => <li>{gtr.name}</li> )
  }
  return (
    <>
      <h1>Guitars listed for sale</h1>
      <ul>
      { listAvailableGuitars() } 
      </ul>
    </>
  );
}
export default Dashboard;

