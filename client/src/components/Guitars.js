import React from "react";
import { Card, Image, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";
const Guitars = ({ guitars }) => {
  const renderGuitars = () => {
    return guitars.map(g => (
      <Link
        to={{
          pathname: `/guitars/${g.id}`,
          state: {
            name: g.name,
            price: g.price,
            description: g.description,
            pictures: g.pictures
          }
        }}
      >
        <Card key={g.id}>
          <Header as="h1">{g.name}</Header>
          <Header as="h3">${parseFloat(g.price).toFixed(2)}</Header>
          {/* <div>{g.description}</div> */}
          <Image src={g.pictures[0].url} massive stackable />
        </Card>
      </Link>
    ));
  };
  return (
    <div style={{ backgroundColor: "#bd9476", }}>
      <Header as="h1" textAlign="center">
        Handmade Guitars Available For Purchase
      </Header>
      <Card.Group>{renderGuitars()}</Card.Group>
    </div>
  );
};
export default Guitars;
