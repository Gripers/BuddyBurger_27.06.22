import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { ApiReqContext } from "../../../anyFunc/apiReq";
import "./categories.scss";

const AddCategory = () => {
  const {
    catnameuz,
    catnameen,
    catnameru,
    setcatnameuz,
    setcatnameen,
    setcatnameru,
    addCategory,
  } = React.useContext(ApiReqContext);

  return (
    <div className="categories-home">
      <Sidebar />
      <div className="categories-homeContainer">
        <Navbar />
        <div className="add-category-form mt-4">
          <input
            className="form-control shadow-none"
            type="text"
            value={catnameuz}
            onChange={(e) => setcatnameuz(e.target.value)}
            placeholder="Name Uz"
          />
          <input
            className="form-control shadow-none"
            type="text"
            value={catnameen}
            onChange={(e) => setcatnameen(e.target.value)}
            placeholder="Name En"
          />
          <input
            className="form-control shadow-none"
            type="text"
            value={catnameru}
            onChange={(e) => setcatnameru(e.target.value)}
            placeholder="Name Ru"
          />
          <button className="btn btn-primary" onClick={addCategory}>
            Add New Category
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCategory;
