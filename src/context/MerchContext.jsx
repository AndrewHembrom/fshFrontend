import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { server } from "../main";

const MerchContext = createContext();

export const MerchContextProvider = ({ children }) => {
  const [merchs, setMerchs] = useState([]);
  const [merch, setMerch] = useState([]);

  async function fetchMerchs() {
    try {
      const { data } = await axios.get(`${server}/api/merch/all`);
      setMerchs(data.merchs);
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchMerch(id) {
    try {
      const { data } = await axios.get(`${server}/api/merch/${id}`);
      setMerch(data.merch);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchMerchs();
  }, []);

  return (
    <MerchContext.Provider value={{ merchs, fetchMerchs, fetchMerch, merch }}>
      {children}
    </MerchContext.Provider>
  );
};

export const MerchData = () => useContext(MerchContext);
