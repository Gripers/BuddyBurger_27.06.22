import React from "react";
import "./list.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatable from "../../components/datatable/Datatable";
import { DopFuncsContext } from "../../../anyFunc/dopFuncs";

const List = () => {
  const { setShow } = React.useContext(DopFuncsContext);

  React.useEffect(() => {
    setShow("none");
  }, []);

  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatable />
      </div>
    </div>
  );
};

export default List;
