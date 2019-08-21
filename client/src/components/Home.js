import React from "react";
import Background from "../assets/ian-tormo-321516-unsplash.jpg";
import { useWindowWidth } from "../hooks/useWindowWidth";
import {
  Splash,
  TextBox,
  WhiteHeader,
  Image,
  MobileHeader
} from "../styled_components/main";
const Home = () => {
  const width = useWindowWidth();
  return width > 500 ? (
    <>
      <Splash>
        <TextBox>
          <WhiteHeader>Dan Bills Guitars</WhiteHeader>
          <p>
            An acoustic guitar company located in Salt Lake City, Utah
            specializing in steel-string guitars. Also offering repairs and
            custom builds.
          </p>
        </TextBox>
        <Image src={Background} alt="guitar soundhole" />
      </Splash>
    </>
  ) : (
    <>
      <div>
        <MobileHeader>
          <div>Dan</div>
          <div>Bills</div>
          <div>Guitars</div>
        </MobileHeader>
      </div>
    </>
  );
};
export default Home;
