import React from "react";
import { Header, Divider, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
const Guitars = ({ guitars }) => {
  const renderGuitars = () => {
    return guitars.map(g => (
      <>
        <div key={g.id}>
          <h3>
            {g.name} | {g.year}
          </h3>
          <p>{g.description}</p>
          <Image.Group size="medium">{renderImages(g.pictures)}</Image.Group>
        </div>
        <Divider />
      </>
    ));
  };
  const renderImages = arr => {
    return arr.map(pic => <Image src={pic.url} />);
  };
  return (
    <div style={{ backgroundColor: "#bd9476", padding: "0 5px" }}>
      <Header as="h1">Handmade Guitars Available For Purchase</Header>
      {renderGuitars()}
    </div>
  );
};
export default Guitars;
