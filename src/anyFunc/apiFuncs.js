import React from "react";
import axios from "axios";
import { url } from "../Utilities";

const ApiFuncsContext = React.createContext();

const ApiFuncsContextProvider = ({ children }) => {
  const [categories, setCategories] = React.useState([]);
  const [burgers, setBurgers] = React.useState([]);

  React.useEffect(() => {
    axios.get(`${url}/categories/`).then((res) => setCategories(res.data));
  }, []);

  React.useEffect(() => {
    axios.get(`${url}/burgers/`).then((res) => setBurgers(res.data));
  }, []);

  if (!categories) {
    return "";
  }

  if (!burgers) {
    return "";
  }

  return (
    <div>
      <ApiFuncsContext.Provider
        value={{
          categories,
          burgers,
        }}
      >
        {children}
      </ApiFuncsContext.Provider>
    </div>
  );
};

export { ApiFuncsContext, ApiFuncsContextProvider };
