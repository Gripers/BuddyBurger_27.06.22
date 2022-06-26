import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import HomeRoutes from "./routes/HomeRoutes";
import "./i18n";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CartProvider } from "react-use-cart";
import "./nprogress.css";
import FilialRoutes from "./routes/FilialRoutes";
import NProgress from "nprogress";
import "react-phone-input-2/lib/style.css";
import { ApiFuncsContextProvider } from "./anyFunc/apiFuncs";
import { SliderSetContextProvider } from "./anyFunc/sliderSet";
import { DopFuncsContextProvider } from "./anyFunc/dopFuncs";
import { ApiReqContextProvider } from "./anyFunc/apiReq";
import AdminRoutes from "./routes/AdminRoutes";

NProgress.configure({ showSpinner: false });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CartProvider>
    <BrowserRouter>
      <React.StrictMode>
        <ApiFuncsContextProvider>
          <SliderSetContextProvider>
            <DopFuncsContextProvider>
              <ApiReqContextProvider>
                <App />
                <HomeRoutes />
                <FilialRoutes />
                <AdminRoutes />
              </ApiReqContextProvider>
            </DopFuncsContextProvider>
          </SliderSetContextProvider>
        </ApiFuncsContextProvider>
      </React.StrictMode>
    </BrowserRouter>
  </CartProvider>
);
