import React from "react";
import axios from "axios";
import { DopFuncsContext } from "./dopFuncs";

const ApiReqContext = React.createContext();

const ApiReqContextProvider = ({ children }) => {
  const { logconSwitcher, setLoginConfirmOpen, regconSwitcher, setRegConOpen } =
    React.useContext(DopFuncsContext);
  const [phone, setPhone] = React.useState("");
  const [logconsms, setLogConSms] = React.useState("");
  const [regname, setRegName] = React.useState("");
  const [regphone, setRegPhone] = React.useState("");
  const [regsms, setRegSms] = React.useState("");

  const [nameuz, setnameuz] = React.useState("");
  const [nameen, setnameen] = React.useState("");
  const [nameru, setnameru] = React.useState("");
  const [definitionuz, setdefinitionuz] = React.useState("");
  const [definitionen, setdefinitionen] = React.useState("");
  const [definitionru, setdefinitionru] = React.useState("");
  const [image, setimage] = React.useState("");
  const [price, setprice] = React.useState("");
  const [category, setcategory] = React.useState("");

  const qs = require("qs");

  const handleLoginRequest = () => {
    axios
      .post("https://api.buddyburger.kannas.uz/send_sms/", {
        phone_number: phone,
      })
      .then((res) => {
        if (res.data.status == 200) {
          logconSwitcher();
        }
      });
  };
  const handleLoginConfirmRequest = () => {
    axios
      .post("https://kannas.uz/login/", {
        sms: logconsms,
        phone_number: phone,
      })
      .then((res) => {
        if ((res.data.status == 200) & (res.data.is_admin == false)) {
          localStorage.setItem("user", JSON.stringify(res.data));
          setLoginConfirmOpen(false);
        } else if (res.data.is_admin == true) {
          localStorage.setItem("admin", JSON.stringify(res.data));
          localStorage.setItem("token", res.data.token);
          setLoginConfirmOpen(false);
        }
      });
  };
  const handleRegisterRequest = () => {
    axios
      .post("https://kannas.uz/register/", {
        full_name: regname,
        phone_number: regphone,
      })
      .then((res) => {
        if (res.data.status == 200) {
          regconSwitcher();
        }
      });
  };
  const handleRegisterConfirmRequest = () => {
    axios
      .post("https://kannas.uz/login/", {
        sms: regsms,
        phone_number: regphone,
      })
      .then((res) => {
        if ((res.data.status == 200) & (res.data.is_admin == false)) {
          localStorage.setItem("user", JSON.stringify(res.data));
          setRegConOpen(false);
        } else if (res.data.is_admin == true) {
          localStorage.setItem("admin", JSON.stringify(res.data));
          localStorage.setItem("token", res.data.token);
        }
      });
  };
  const addProduct = () => {
    axios.post(
      "https://api.buddyburger.kannas.uz/burgers/",
      qs.stringify({
        name_uz: nameuz,
        name_en: nameen,
        name_ru: nameru,
        definition_uz: definitionuz,
        definition_en: definitionen,
        definition_ru: definitionru,
        image: image,
        price: price,
        category: category,
      })
    );
  };

  return (
    <div>
      <ApiReqContext.Provider
        value={{
          handleLoginRequest,
          phone,
          setPhone,
          logconsms,
          setLogConSms,
          handleLoginConfirmRequest,
          handleRegisterRequest,
          regname,
          setRegName,
          regphone,
          setRegPhone,
          handleRegisterConfirmRequest,
          regsms,
          setRegSms,
          addProduct,
          nameuz,
          nameen,
          nameru,
          definitionuz,
          definitionen,
          definitionru,
          image,
          price,
          category,
          setnameuz,
          setnameen,
          setnameru,
          setdefinitionuz,
          setdefinitionen,
          setdefinitionru,
          setimage,
          setprice,
          setcategory,
        }}
      >
        {children}
      </ApiReqContext.Provider>
    </div>
  );
};

export { ApiReqContext, ApiReqContextProvider };
