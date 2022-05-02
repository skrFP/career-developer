import React, { useState, useEffect } from "react";
import axios from "axios";
import { api } from "../../Constants";
export default (baykaId) => {
  const [bayka, setBayka] = useState(null);
  const [anoHighErr, setAnoHighErr] = useState(null);
  const loadTop = async () => {
    try {
      const result = await axios.get(`${api}/api/v1/baykas/${baykaId}`);
      setBayka(result.data.data);
      setAnoHighErr(null);
    } catch (err) {
      setAnoHighErr(err.message);
    }
  };
  useEffect(() => {
    loadTop();
  }, []);

  return [bayka, anoHighErr];
};
