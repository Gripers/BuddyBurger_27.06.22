import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../admin/pages/home/Home";
import AddProduct from "../admin/pages/list/AddProduct";
import List from "../admin/pages/list/List";

const AdminRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/admin" element={<Home />} />
        <Route path="/products" element={<List />} />
        <Route path="/products/new" element={<AddProduct />} />
      </Routes>
    </div>
  );
};

export default AdminRoutes;
