import React from "react";
import Background from "../assets/ian-tormo-321516-unsplash.jpg";
import MobileBackground from "../assets/IMG_20190521_185026.jpg.jpg"
import { useWindowWidth } from "../hooks/useWindowWidth";
import styled from "styled-components";
const Home = () => {
  const width = useWindowWidth();
  return width > 500 ? (
    <>
      <Splash>
        <TextBox>
          <Header>Dan Bills Guitars</Header>
          <p>
            An acoustic guitar company located in Salt Lake City, Utah
            specializing in steel-string guitars. Also offering repairs and
            custom builds.
          </p>
        </TextBox>
        <Image
          src={Background}
          alt="guitar soundhole"
        />
      </Splash>
    </>
  )
  :
  (
    <>
      <div>
        <MobileHeader><div>Dan</div><div>Bills</div><div>Guitars</div></MobileHeader>
      </div>
    </>
  )
};
export default Home;

const Header = styled.h1`
  color: white;
`
const Image = styled.img`
  height: 100%;
  width: 100%;
`
const Splash = styled.div`
  position: relative;
`
const TextBox = styled.div`
  color: white;
  position: absolute;
  top: 250px;
  left: 0;
  width: 100%;
  background: rgba(100, 10, 10, 0.7);
  padding-left: 50px;
  padding-top: 10px;
  padding-bottom: 10px;
`
const MobileHeader = styled.h1`
  font-size: 50px;
`
const MobileImage = styled.img`
  width: 100%;
`

