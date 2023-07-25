import React, { useState } from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import "./Slider.scss";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
  "https://images.pexels.com/photos/1162983/pexels-photo-1162983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/845434/pexels-photo-845434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/3771675/pexels-photo-3771675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/13627969/pexels-photo-13627969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/13155751/pexels-photo-13155751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/5355010/pexels-photo-5355010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 6 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 6 ? 0 : (prev) => prev + 1);
  };
  

  return (
    <div className="slider">
      <div className="container" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
        <img src={data[3]} alt="" />
        <img src={data[4]} alt="" />
        <img src={data[5]} alt="" />
        <img src={data[6]} alt="" />
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <WestOutlinedIcon />
        </div>
        <div className="icon" onClick={nextSlide}>
          <EastOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Slider;