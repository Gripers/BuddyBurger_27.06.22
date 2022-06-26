import NProgress from "nprogress";
import React from "react";
import Burgers from "../components/Burgers";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home = () => {
  React.useEffect(() => {
    NProgress.done();
  }, []);

  return (
    <div>
      <Header />
      <div className="mt-5">
        <Categories />
        <Burgers />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
