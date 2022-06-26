import NProgress from "nprogress";
import React from "react";
import FilialOne from "../components/filial-components/FilialOne";
import FilialTwo from "../components/filial-components/FilialTwo";
import Footer from "../components/Footer";

const Filials = () => {
  React.useEffect(() => {
    NProgress.done();
  }, []);

  return (
    <>
      <div
        className="filials-container my-5"
        style={{ display: "grid", rowGap: "30px" }}
      >
        <FilialOne />
        <FilialTwo />
      </div>
      <Footer />
    </>
  );
};

export default Filials;
