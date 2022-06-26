import NProgress from "nprogress";
import React from "react";
import { useTranslation } from "react-i18next";
import Footer from "../components/Footer";
import "../styles/contacts.scss";

const Contacts = () => {
  React.useEffect(() => {
    NProgress.done();
  }, []);
  const { t } = useTranslation();

  return (
    <div>
      <div className="contacts-container my-5">
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
  );
};

export default Contacts;
