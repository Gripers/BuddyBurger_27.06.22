import React from "react";
import { Route, Routes } from "react-router-dom";
import FilialOneInner from "../components/filial-components/FilialOneInner";
import FilialTwoInner from "../components/filial-components/FilialTwoInner";

const FilialRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/filialoneinner" element={<FilialOneInner />} />
        <Route path="/filialtwoinner" element={<FilialTwoInner />} />
      </Routes>
    </div>
  );
};

export default FilialRoutes;
