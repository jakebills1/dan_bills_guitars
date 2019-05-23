import React from 'react';
import { Card, Image, } from 'semantic-ui-react';
import { Link, } from 'react-router-dom';
const Guitars = ({ guitars, }) => {
  const renderGuitars = () => { 
    return guitars.map(g => ( 
      <Link to={{pathname: `/guitars/${g.id}`, state: { name: g.name, price: g.price, description: g.description, pictures: g.pictures}, }}>
        <Card key={g.id}>
          <div>{g.name}</div>
          <div>{g.price}</div>
          <div>{g.description}</div>
          <Image src={g.pictures[0].url} massive stackable />
        </Card>
      </Link>
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
