import React from "react";
import "../../styles/filial.scss";
import { Link } from "react-router-dom";

const FilialTwo = () => {
  return (
    <Link
      to="/filialtwoinner"
      style={{ color: "black", textDecoration: "none" }}
    >
      <div
        className="filial-card"
        style={{ boxShadow: "0 4px 30px rgb(0 0 0 / 7%)" }}
      >
        <div className="filial-card-left">
          <h4>Buddy Burger Юнусабад</h4>
          <span>Юнусабад 14 квартал</span>
        </div>
        <div className="filial-card-medium">
          <span style={{ color: "rgba(0,0,0,.5)" }}>Часы работы</span>
          <span>Ежедневно: 10:00-3:00</span>
        </div>
        <div className="filial-card-right">
          <svg
            class="MuiSvgIcon-root"
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
            fill="#e0e0e0"
            width="18"
            height="18"
          >
            <path d="M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z"></path>
          </svg>
        </div>
      </div>
    </Link>
  );
};

export default FilialTwo;
