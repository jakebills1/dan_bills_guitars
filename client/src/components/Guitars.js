import React from 'react';
import { Card, Image, } from 'semantic-ui-react';
const Guitars = ({ guitars, }) => {
  const renderGuitars = () => { 
    return guitars.map(g => ( 
      <Card key={g.id}>
        <div>{g.name}</div>
        <div>{g.price}</div>
        <div>{g.description}</div>
        <Image src={g.pictures[0].url} massive stackable />
      </Card>
    )
    )
  }
  return (
    <>
      <Card.Group>
        {renderGuitars()}
      </Card.Group>
    </>
  );
}
export default Guitars;
