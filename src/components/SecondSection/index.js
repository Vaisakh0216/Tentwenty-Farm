import React from "react";
import "./SecondSection.scss";
import DraggablePhoto from "./SecondSection";
import Image1 from "../../../assets/images/Image1.png";
import Image2 from "../../../assets/images/Image2.png";
import Image3 from "../../../assets/images/Image3.png";
import Image4 from "../../../assets/images/Image4.png";
import Image5 from "../../../assets/images/Image5.png";
import Image6 from "../../../assets/images/Image6.png";

const SecondSection = () => {
  const images = [
    {
      src: Image1,
      client: "Client 1",
      clientAddress: "Dubai, United Arab Emirates",
    },
    {
      src: Image2,
      client: "Client 2",
      clientAddress: "Dubai, United Arab Emirates",
    },

    {
      src: Image3,
      client: "Client 3",
      clientAddress: "Dubai, United Arab Emirates",
    },
    {
      src: Image4,
      client: "Client 4",
      clientAddress: "Dubai, United Arab Emirates",
    },
    {
      src: Image5,
      client: "Client 5",
      clientAddress: "Dubai, United Arab Emirates",
    },
    {
      src: Image6,
      client: "Client 6",
      clientAddress: "Dubai, United Arab Emirates",
    },
    ,
  ];

  return (
    <div className="container">
      <div className="content">
        <h2>Quality Products</h2>
        <div className="text-container">
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </span>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ width: "100%" }}>
          <DraggablePhoto images={images} />
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
