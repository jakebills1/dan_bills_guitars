import React, { useState } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { Header, Divider } from "semantic-ui-react";
const Guitars = ({ guitars }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const openLightbox = (event, obj) => {
    setCurrentImage(obj.index);
    setViewerIsOpen(true);
  };
  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
  const renderGuitars = () => {
    return guitars.map(g => {
      const pictures = g.pictures.map(pic => {
        return { src: pic.url, width: pic.width, height: pic.height };
      });
      return (
        <>
          <div key={g.id}>
            <h3>
              {g.name} | {g.year}
            </h3>
            <p>{g.description}</p>
            <Gallery photos={pictures} onClick={openLightbox} />
            <ModalGateway>
              {viewerIsOpen ? (
                <Modal onClose={closeLightbox}>
                  <Carousel currentIndex={currentImage} views={pictures} />
                </Modal>
              ) : null}
            </ModalGateway>
          </div>
          <Divider />
        </>
      );
    });
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
