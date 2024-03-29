import React, { useState, useEffect } from "react";
import "./BannerSlider.scss";

const BannerSlider = ({ images, autoplayInterval = 5000 }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, autoplayInterval);

    return () => clearInterval(interval);
  }, [images, autoplayInterval]);

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="banner-slider">
      {images.map((image, index) => (
        <div key={index} className="banner-container">
          <img
            style={{ height: "900px", objectFit: "cover" }}
            src={image}
            alt={`Banner ${index}`}
            className={
              index === currentImageIndex
                ? "banner-slide active"
                : "banner-slide"
            }
          />
        </div>
      ))}
      <div className="banner-text-container ">
        <span className="heading">Welcome To TenTwenty Farms</span>
        <h1 className="main-heading">
          <span>From our Farms</span>
          <span>to your hands</span>
        </h1>
        <div className="thumbnail-wrapper">
          <div class="progress">
            <div className="thumbnail-container">
              {images.map((image, index) => (
                <div key={index} style={{ position: "relative" }}>
                  <img
                    style={{
                      width: "93px",
                      height: "93px",
                    }}
                    src={image}
                    alt={`Banner ${index}`}
                    className={
                      index === currentImageIndex
                        ? "banner-slide active"
                        : "banner-slide"
                    }
                  />
                  {index === currentImageIndex && (
                    <span
                      style={{
                        position: "absolute",
                        bottom: "40%",
                        right: "35%",
                        cursor: "pointer",
                        fontFamily: "Work Sans, sans-serif",
                        fontSize: "14px",
                        fontWeight: "400",
                      }}
                      onClick={() => nextSlide()}
                    >
                      Next
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <span className="date-animation">0{currentImageIndex + 1}</span>
            <div className="white-line"></div>

            {"0" + images.length}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSlider;
