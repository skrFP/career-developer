import React, { useState, useEffect } from "react";
import axios from "axios";
import { api } from "../../Constants";
export default (bolorId) => {
  const [bolor, setBolor] = useState(null);
  const [anoHighErr, setAnoHighErr] = useState(null);
  const loadBolor = async () => {
    try {
      const result = await axios.get(`${api}/api/v1/bolors/${bolorId}`);
      setBolor(result.data.data);
      setAnoHighErr(null);
    } catch (err) {
      setAnoHighErr(err.message);
    }
  };
  useEffect(() => {
    loadBolor();
  }, []);

  return [bolor, anoHighErr];
};
