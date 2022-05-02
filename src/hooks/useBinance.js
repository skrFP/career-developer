import React, { useState, useEffect } from "react";
import axios from "axios";
import { api } from "../../Constants";
export default (BinanceId) => {
  const [binance, setBinance] = useState(null);
  const [error, setError] = useState(null);
  const loadBinance = async () => {
    try {
      const result = await axios.get(`${api}/api/v1/binances/${BinanceId}`);
      setBinance(result.data.data);
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };
  useEffect(() => {
    loadBinance();
  }, []);

  return [binance, error];
};
