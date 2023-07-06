// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import React from "react";
// import Slider from "react-slick";
import slider1 from "./banner-bg.jpg";
import slider2 from "./feature1.jpg";
import slider4 from "./feature2.jpg";

import BackgroundSlider from 'react-background-slider'

// const photos = [
//   {
//     imgsrc: slider1,
//     title: "Slider1 image",
//   },
//   {
//     imgsrc: slider2,
//     title: "Slider1 image",
//   },

//   {
//     imgsrc: slider4,
//     title: "Slider1 image",
//   },
// ];

const ImageSlider = () => {
  // let settings = {
  //   // infinite: true,
  //   // cssEase: "ease-in-out",
  //   // autoplay: true,
  //   // autoplaySpeed: 3000,
  //   // fade: true,
  //   // dots: false,
  //   // arrows: false,
  //   draggable: true,
  //   autoplay: true,
  //   autoplaySpeed: 8000,
  //   arrows: false,
  //   dots: false,
  //   fade: true,
  //   speed: 3000,
  //   infinite: true,
  //   // cssEase: "1s ease-in-out",
  //   // touchThreshold: 100,
  // };
  return (
    <>
      {/* <Slider {...settings}>
        {photos.map((photo) => {
          return (
            <div className="banner">
              <div className="item">
                <img
                  width="100%"
                  height="100%"
                  src={photo.imgsrc}
                  title={photo.title}
                />
                <div className="banner-content">
                  <h1 className="banner-title ">
                    AYDIN Co For Framing , Package and delivery
                  </h1>
                  <a href="/chmdemo/AydinCo/Shop">
                    <button class="heroButton">
                      <h2>Shop Now</h2>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </Slider> */}

<BackgroundSlider
  images={[slider1,slider2,slider4]}
  duration={15} transition={2} />

<div className="banner">
              <div className="item">
           
                <div className="banner-content">
                  <h1 className="banner-title ">
                    AYDIN Co For Framing , Package and delivery
                  </h1>
                  <a href="/chmdemo/AydinCo/Shop">
                    <button class="heroButton">
                      <h2>Shop Now</h2>
                    </button>
                  </a>
                </div>
              </div>
            </div>
    </>
  );
};

export default ImageSlider;