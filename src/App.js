// MyComponent.js
import React from "react";
import Header from "./components/Common/Header";
import BannerSlider from "./components/Banner";
import Banner from "../assets/images/Banner.png";
import Second from "../assets/images/Second.png";
import SecondSection from "./components/SecondSection";

const App = () => {
  const images = [Banner, Second];

  const HeaderLabels = [
    "About",
    "News",
    "Services",
    "Our Team",
    "Make Enquiry",
  ];
  return (
    <div>
      <div style={{}}>
        <Header HeaderLabels={HeaderLabels} />
        <BannerSlider images={images} />
        <SecondSection images={images} />
      </div>
    </div>
  );
};

export default App;
