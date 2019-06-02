import React, { useState, useEffect, } from 'react';
import axios from 'axios';
import { Segment, Button} from 'semantic-ui-react';
import {Link,} from 'react-router-dom';
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

    return availableGuitars.map( gtr => <Segment key={gtr.id}>
      <div><strong>Name:</strong> {gtr.name}</div>
      <div><strong>Price:</strong> ${parseFloat(gtr.price).toFixed(2)}</div>
      <div><strong>Description:</strong> {gtr.description}</div>
      <Button.Group>
        <Button color="blue" as={Link} to={{ pathname: `/guitars/edit/${gtr.id}`, state: { ...gtr }}}>Edit</Button>
        <Button color="red" onClick={() => deleteListing(gtr.id)}>Delete</Button>
      </Button.Group>
    </Segment> )
  }
  const deleteListing = (id) => {
    axios.delete(`/api/guitars/${id}`)
      .then( console.log( res => console.log(res)))
      .catch( console.log( res => console.log(res)))
  }
  return (
    <>
    <h1>Guitars listed for sale</h1>
    <Segment.Group>
      { listAvailableGuitars() } 
    </Segment.Group>
    </>
  );
}
export default Dashboard;

