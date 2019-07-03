import React from "react";
import Background from "../assets/ian-tormo-321516-unsplash.jpg";
import { useWindowWidth } from '../hooks/useWindowWidth';
const Home = () => {
  const width = useWindowWidth();
  return (
    <>
      <div style={styles.home_page_splash}>
        <div style={styles.home_page_text}>
          <h1 style={{ color: "white" }}>Dan Bills Guitars</h1>
          <p>
            An acoustic guitar company located in Salt Lake City, Utah
            specializing in steel-string guitars. Also offering repairs and
            custom builds.
          </p>
        </div>
        <img
          src={Background}
          style={styles.home_page_image}
          alt="guitar soundhole"
        />
      </div>
    </>
  );
};
export default Home;
const styles = {
  home_page_text: {
    color: "white",
    position: "absolute",
    top: "250px",
    left: "0",
    width: "100%",
    background: "rgba(100, 10, 10, 0.7)",
    paddingLeft: "50px",
    paddingTop: "10px",
    paddingBottom: "10px"
  },
  home_page_splash: {
    position: "relative"
  },
  home_page_image: {
    height: "100%",
    width: "100%"
  }
};
