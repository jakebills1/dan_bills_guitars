import React, { useState } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { useWindowWidth } from "../hooks/useWindowWidth";
const Guitars = ({ guitars }) => {
  const width = useWindowWidth();
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const [pictures, setPictures] = useState([]);
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
          <div key={g.id} onClick={() => setPictures(pictures)}>
            <h3>
              {g.name} | {g.year}
            </h3>
            <p>{g.description}</p>
            <Gallery photos={pictures} onClick={openLightbox} />
          </div>
          <hr style={{ borderColor: "black" }} />
        </>
      );
    });
  };
  const headerMessage = "Available Guitars For Sale";
  return (
    <div
      style={{
        backgroundColor: "#bd9476",
        padding: "1.7% 0.5% 0 0.5%",
        height: "auto"
      }}
    >
      {width > 500 ? <h1>{headerMessage}</h1> : <h2>{headerMessage}</h2>}
      {renderGuitars()}
      <ModalGateway>
        {viewerIsOpen && (
          <Modal onClose={closeLightbox}>
            <Carousel currentIndex={currentImage} views={pictures} />
          </Modal>
        )}
      </ModalGateway>
    </div>
  );
};
export default Guitars;
