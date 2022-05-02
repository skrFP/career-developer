import React, { useState, useEffect } from "react";
import axios from "axios";
import { api } from "../../Constants";
export default (odkoId) => {
  const [odko, setOdko] = useState(null);
  const [anoHighErr, setAnoHighErr] = useState(null);
  const loadOdko = async () => {
    try {
      const result = await axios.get(`${api}/api/v1/odkos/${odkoId}`);
      setOdko(result.data.data);
      setAnoHighErr(null);
    } catch (err) {
      setAnoHighErr(err.message);
    }
  };
  useEffect(() => {
    loadOdko();
  }, []);

  return [odko, anoHighErr];
};
