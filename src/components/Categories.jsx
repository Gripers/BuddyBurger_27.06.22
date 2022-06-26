import React from "react";
import { useTranslation } from "react-i18next";
import "../styles/categories.scss";
import Slider from "react-slick";
import { SliderSetContext } from "../anyFunc/sliderSet";
import { DopFuncsContext } from "../anyFunc/dopFuncs";
import { ApiFuncsContext } from "../anyFunc/apiFuncs";

const Categories = () => {
  const { t } = useTranslation();
  const { catsettings } = React.useContext(SliderSetContext);
  const { categories } = React.useContext(ApiFuncsContext);
  const { drop } = React.useContext(DopFuncsContext);

  return (
    <div className="categories-container">
      <h1 className="categories-head-h1">{t("categories")}</h1>
      <div id="dropdi">
        <Slider {...catsettings} className="mt-4 categories-slider">
          {categories.map((cat) => {
            return (
              <a key={cat.id} href={`#${cat.name_ru}`}>
                <div className="cat-slider-item">{cat.name_ru}</div>
              </a>
            );
          })}
        </Slider>
      </div>
      <div
        className="dropped-slider"
        style={{
          transform: drop ? "translateY(0px)" : "translateY(-200px)",
          zIndex: "9999999",
        }}
      >
        <Slider {...catsettings} className="categories-slider">
          {categories.map((cat) => {
            return (
              <a key={cat.id} href={`#${cat.name_ru}`}>
                <div className="cat-slider-item">{cat.name_ru}</div>
              </a>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Categories;
