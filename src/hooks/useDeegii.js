import React, { useState, useEffect } from "react";
import axios from "axios";
import { api } from "../../Constants";
export default (deegiiId) => {
  const [deegii, setDeegii] = useState(null);
  const [anoHighErr, setAnoHighErr] = useState(null);
  const loadDeegii = async () => {
    try {
      const result = await axios.get(`${api}/api/v1/deegiis/${deegiiId}`);
      setDeegii(result.data.data);
      setAnoHighErr(null);
    } catch (err) {
      setAnoHighErr(err.message);
    }
  };
  useEffect(() => {
    loadDeegii();
  }, []);

  return [deegii, anoHighErr];
};
