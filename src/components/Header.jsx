import React from "react";
import Slider from "react-slick";
import { SliderSetContext } from "../anyFunc/sliderSet";
import header_first from "../img/header-1.jfif";
import header_second from "../img/header-2.jfif";
import header_third from "../img/header-3.jfif";
import "../styles/header.scss";

const Header = () => {
  const { headersettings } = React.useContext(SliderSetContext);

  return (
    <div>
      <Slider {...headersettings}>
        <div className="slider-item">
          <img src={header_first} alt="" />
        </div>
        <div className="slider-item">
          <img src={header_second} alt="" />
        </div>
        <div className="slider-item">
          <img src={header_third} alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default Header;
