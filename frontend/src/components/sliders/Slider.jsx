import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useDispatch, useSelector } from "react-redux";
import { getSliders } from "../../redux/apiCalls/slidersApiCall";

function Slider() {
  const dispatch = useDispatch();
  const slidersData = useSelector((state) => state.slider.sliders);


  useEffect(() => {
    dispatch(getSliders());
  }, []);

  const toggleCartSidebar = () => {
    setShowCartSidebar(!showCartSidebar);
  };

  return (
    <div className="relative z-10">
      <Carousel showThumbs={false} showIndicators={false} dynamicHeight={true} className="mb-8" autoPlay={true} infiniteLoop={true} >
        {slidersData.map((slider) => (
          <div key={slider.title}>
            <img src={slider.image} alt="slider" />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Slider;
