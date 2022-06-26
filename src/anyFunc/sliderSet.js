import React from "react";
import prev from "../img/prev.svg";
import next from "../img/next.svg";

const SliderSetContext = React.createContext();

const SliderSetContextProvider = ({ children }) => {
  const PrevArrow = ({ onClick, style, className }) => {
    return (
      <button
        onClick={onClick}
        style={{
          ...style,
          width: "24px",
          height: "24px",
          display: "flex",
          top: "20px",
        }}
        className={className}
      >
        <img src={prev} alt="" />
      </button>
    );
  };
  const NextArrow = ({ onClick, style, className }) => {
    return (
      <button
        onClick={onClick}
        style={{
          ...style,
          width: "24px",
          height: "24px",
          display: "flex",
          top: "20px",
        }}
        className={className}
      >
        <img src={next} alt="" />
      </button>
    );
  };

  const headersettings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };

  const catsettings = {
    arrows: true,
    dots: false,
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    switeToSlide: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1030,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 4,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          arrows: false,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div>
      <SliderSetContext.Provider
        value={{
          headersettings,
          catsettings,
        }}
      >
        {children}
      </SliderSetContext.Provider>
    </div>
  );
};

export { SliderSetContext, SliderSetContextProvider };
