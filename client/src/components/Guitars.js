import React from "react";
import Gallery from "react-photo-gallery";
import { Header, Divider, Image } from "semantic-ui-react";
const Guitars = ({ guitars }) => {
  const renderGuitars = () => {
    return guitars.map(g => {
      const pictures = g.pictures.map(pic => {
        return { src: pic.url, width: pic.width, height: pic.height, };
      });
      debugger
      return (
        <>
          <div key={g.id}>
            <h3>
              {g.name} | {g.year}
            </h3>
            <p>{g.description}</p>
            <Gallery photos={pictures} />
          </div>
          <Divider />
        </>
      );
    });
  };
  const renderImages = arr => {
    return arr.map(pic => <Image src={pic.url} />);
  };
  return (
    <div
      style={{
        backgroundColor: "#bd9476",
        padding: "20px 5px 0 5px",
        height: "auto"
      }}
    >
      <Header as="h1">Handmade Guitars Available For Purchase</Header>
      {renderGuitars()}
    </div>
  );
};
export default Guitars;
