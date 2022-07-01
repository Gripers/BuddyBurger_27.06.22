import React from "react";
import { useTranslation } from "react-i18next";
import "../styles/categories.scss";
import { SliderSetContext } from "../anyFunc/sliderSet";
import { DopFuncsContext } from "../anyFunc/dopFuncs";
import { ApiFuncsContext } from "../anyFunc/apiFuncs";
import OwlCarousel from "react-owl-carousel";
import "./script";
import { Link } from "react-scroll";

const Categories = () => {
  const { t } = useTranslation();
  const { catsettings } = React.useContext(SliderSetContext);
  const { categories } = React.useContext(ApiFuncsContext);
  const { drop } = React.useContext(DopFuncsContext);

  return (
    <div className="categories-container">
      <h1 className="categories-head-h1">{t("categories")}</h1>
      <div id="dropdi">
        <OwlCarousel {...catsettings} className="mt-4 categories-slider">
          {categories.map((cat) => {
            return (
              <a key={cat.id} href={`#${cat.name_ru}`}>
                <div className="cat-slider-item">{cat.name_ru}</div>
              </a>
            );
          })}
        </OwlCarousel>
      </div>
      <div
        className="dropped-slider"
        style={{
          transform: drop ? "translateY(0px)" : "translateY(-200px)",
          zIndex: "9999999",
        }}
        id="dropped-slider-id"
      >
        <OwlCarousel {...catsettings} className="hidden-categories-slider">
          {categories.map((cat) => {
            return (
              <Link
                activeClass="active-cat-slider-item"
                spy
                to={`${cat.name_ru}`}
              >
                {cat.name_ru}
              </Link>
            );
          })}
        </OwlCarousel>
      </div>
    </div>
  );
};

export default Categories;
