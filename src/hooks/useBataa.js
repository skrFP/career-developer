import React, { useState, useEffect } from "react";
import axios from "axios";
import { api } from "../../Constants";
export default (bataaId) => {
  const [bataa, setBataa] = useState(null);
  const [anoHighErr, setAnoHighErr] = useState(null);
  const loadBataa = async () => {
    try {
      const result = await axios.get(`${api}/api/v1/bataas/${bataaId}`);
      setBataa(result.data.data);
      setAnoHighErr(null);
    } catch (err) {
      setAnoHighErr(err.message);
    }
  };
  useEffect(() => {
    loadBataa();
  }, []);

  return [bataa, anoHighErr];
};
