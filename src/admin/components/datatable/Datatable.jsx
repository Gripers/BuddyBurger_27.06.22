import React from "react";
import { ApiFuncsContext } from "../../../anyFunc/apiFuncs";
import axios from "axios";
import { Link } from "react-router-dom";

const Datatable = () => {
  const { burgers } = React.useContext(ApiFuncsContext);
  let num = 1;

  const deleteProduct = (id) => {
    axios.delete(`https://api.buddyburger.kannas.uz/burgers/${id}/`);
  };

  return (
    <div className="mt-4">
      <div className="d-flex justify-content-between" style={{ width: "95%" }}>
        <div></div>
        <Link to="/products/new">
          <button className="btn btn-success">Add Product</button>
        </Link>
      </div>
      <table
        class="table mx-auto mt-3 bg-white"
        style={{ width: "95%", borderRadius: "8px" }}
      >
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Category</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {burgers.map((burger) => {
            return (
              <tr>
                <th scope="row" className="align-middle">
                  {num++}
                </th>
                <td className="align-middle">
                  <img src={burger.image} alt="" style={{ width: "70px" }} />
                </td>
                <td className="align-middle" style={{ fontWeight: "bold" }}>
                  {burger.name_ru}
                </td>
                <td className="align-middle" style={{ fontWeight: "bold" }}>
                  {burger.price} UZS
                </td>
                <td className="align-middle" style={{ fontWeight: "bold" }}>
                  {burger.category.name_ru}
                </td>
                <td className="align-middle">
                  <button
                    className="btn btn-primary"
                    style={{ marginRight: "20px" }}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteProduct(burger.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Datatable;
