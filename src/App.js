import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminHome from "./admin/pages/home/Home";
import List from "./admin/pages/list/List";
import AddProduct from "./admin/pages/list/AddProduct";
import Categories from "./admin/pages/categories/Categories";
import AddCategory from "./admin/pages/categories/AddCategory";
import PageNotFound from "./404/PageNotFound";
import Filials from "./pages/Filials";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import FilialOneInner from "./components/filial-components/FilialOneInner";
import FilialTwoInner from "./components/filial-components/FilialTwoInner";
import Home from "./pages/Home";
import MobileShoppingCart from "./components/MobileShoppingCart";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filials" element={<Filials />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/filialoneinner" element={<FilialOneInner />} />
        <Route path="/filialtwoinner" element={<FilialTwoInner />} />
        {localStorage.getItem("admin") ? (
          <Route path="/admin" element={<AdminHome />} />
        ) : null}
        {localStorage.getItem("admin") ? (
          <Route path="/products" element={<List />} />
        ) : null}
        {localStorage.getItem("admin") ? (
          <Route path="/products/new" element={<AddProduct />} />
        ) : null}
        {localStorage.getItem("admin") ? (
          <Route path="/categories" element={<Categories />} />
        ) : null}
        {localStorage.getItem("admin") ? (
          <Route path="/categories/new" element={<AddCategory />} />
        ) : null}
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      <MobileShoppingCart />
    </div>
  );
}

export default App;
