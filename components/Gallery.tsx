'use client'
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const Gallery = () => {
  const [slidesToShow, setSlidesToShow] = useState(5); // Initial number of slides to show

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;

      if (windowWidth <= 768) {
        // Adjust breakpoint as needed
        setSlidesToShow(1); // Show 1 slide for mobile
      } else if (windowWidth <= 1024) {
        setSlidesToShow(2); 
      } else {
        setSlidesToShow(5); 
      }
    };

    window.addEventListener("resize", handleResize); // Add resize event listener

    // Cleanup function to remove event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty dependency array ensures useEffect runs only once
  const imgSrc = [
    "/Gallery/Cuticle1.png",
    "/Gallery/Cuticle2.png",
    "/Gallery/Cuticle3.png",
    "/Gallery/Cuticle4.png",
    "/Gallery/Cuticle5.png",
    "/Gallery/Cuticle6.png",
  ];

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow, 
    slidesToScroll: 1, 
    autoplay: true, 
    speed: 2000, 
    autoplaySpeed: 2000, 
    cssEase: "linear",
    arrows: false, // Hide navigation arrows
    rtl: true,
  };

  return (
    <div className="py-20 pb-80">
      <h1 className="text-4xl text-center mb-20">Our Gallery</h1>
      <Slider {...settings}>
        {imgSrc.map((imageSrc, index) => (
          <div className="slide-item" key={index}>
            <Image
              src={imageSrc}
              width={600} // Adjust width as needed
              height={600} // Adjust height as needed
              alt={`Gallery Image ${index + 1}`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Gallery;
