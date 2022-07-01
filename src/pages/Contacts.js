import NProgress from "nprogress";
import React from "react";
import { useTranslation } from "react-i18next";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/contacts.scss";

const Contacts = () => {
  React.useEffect(() => {
    NProgress.done();
  }, []);
  const { t } = useTranslation();

  return (
    <div>
      <Navbar />
      <div className="d-flex min-vh-100 flex-column justify-content-between">
        <div className="contacts-container my-5" style={{ width: "100%" }}>
          <div className="contacts-card">
            <h2>{t("contacts.des")}</h2>
            <div>
              {t("contacts.title.0")}{" "}
              <a href="https://t.me/buddyburgeruzbot" target={"_blank"}>
                {t("contacts.title.1")}
              </a>{" "}
              {t("contacts.title.2")}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Contacts;
