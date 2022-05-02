import React, { useState, useEffect } from "react";
import axios from "axios";
import { api } from "../../Constants";
export default (coinId) => {
  const [coin, setCoin] = useState(null);
  const [anoHighErr, setAnoHighErr] = useState(null);
  const loadCoin = async () => {
    try {
      const result = await axios.get(`${api}/api/v1/coins/${coinId}`);
      setCoin(result.data.data);
      setAnoHighErr(null);
    } catch (err) {
      setAnoHighErr(err.message);
    }
  };
  useEffect(() => {
    loadCoin();
  }, []);

  return [coin, anoHighErr];
};
