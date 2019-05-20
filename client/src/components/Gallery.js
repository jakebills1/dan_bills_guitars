import React, { useState, useEffect, } from 'react';
import Guitars from './Guitars';
import axios from 'axios';
const Gallery = () => {
  const [guitars, setGuitars] = useState([]);
  useEffect(() => {
    axios.get("/api/guitars")
      .then( res => setGuitars(res.data))
      .catch(err => console.log(err))
  },[]);
  return (
    <Guitars guitars={guitars} />
  )
}
export default Gallery;
