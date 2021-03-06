import React from "react";
import { useTranslation } from "react-i18next";
import "../styles/profile.scss";
import { Link } from "react-router-dom";

const ProfileDrop = () => {
  const { t } = useTranslation();

  return (
    <div className="profile-drop">
      <div class="dropdown">
        <button
          class="btn p-0"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M16.0003 2.66663C8.64033 2.66663 2.66699 8.63996 2.66699 16C2.66699 23.36 8.64033 29.3333 16.0003 29.3333C23.3603 29.3333 29.3337 23.36 29.3337 16C29.3337 8.63996 23.3603 2.66663 16.0003 2.66663ZM16.0003 6.66663C18.2137 6.66663 20.0003 8.45329 20.0003 10.6666C20.0003 12.88 18.2137 14.6666 16.0003 14.6666C13.787 14.6666 12.0003 12.88 12.0003 10.6666C12.0003 8.45329 13.787 6.66663 16.0003 6.66663ZM16.0003 25.6C12.667 25.6 9.72033 23.8933 8.00033 21.3066C8.04033 18.6533 13.3337 17.2 16.0003 17.2C18.6537 17.2 23.9603 18.6533 24.0003 21.3066C22.2803 23.8933 19.3337 25.6 16.0003 25.6Z"
              fill="#51267D"
            />
          </svg>
        </button>
        <ul
          class="dropdown-menu"
          aria-labelledby="dropdownMenuButton1"
          style={{ boxShadow: "rgb(0 0 0 / 7%) 0px 4px 30px" }}
        >
          <li>
            {localStorage.getItem("user") ? (
              <Link to="/" className="dropdown-item">
                User
              </Link>
            ) : localStorage.getItem("admin") ? (
              <Link to="/admin" className="dropdown-item">
                Admin
              </Link>
            ) : null}
          </li>
          <li
            onClick={() => {
              localStorage.removeItem("user") ||
                localStorage.removeItem("admin") ||
                localStorage.removeItem("token");
              window.location.reload();
            }}
          >
            <a class="dropdown-item">{t("profile.out")}</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileDrop;
