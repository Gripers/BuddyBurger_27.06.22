import NProgress from "nprogress";
import React from "react";
import FilialOne from "../components/filial-components/FilialOne";
import FilialTwo from "../components/filial-components/FilialTwo";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Filials = () => {
  React.useEffect(() => {
    NProgress.done();
  }, []);

  return (
    <>
      <Navbar />
      <div className="d-flex min-vh-100 flex-column justify-content-between">
        <div
          className="filials-container my-5"
          style={{ display: "grid", rowGap: "30px", width: "95%" }}
        >
          <FilialOne />
          <FilialTwo />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Filials;
