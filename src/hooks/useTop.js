import React, { useState, useEffect } from "react";
import axios from "axios";
import { api } from "../../Constants";
export default (topId) => {
  const [anoHighErr, setAnoHighErr] = useState(null);
  const [top, setTop] = useState(null);
  const loadTop = async () => {
    try {
      const result = await axios.get(`${api}/api/v1/tops/${topId}`);
      setTop(result.data.data);
      setAnoHighErr(null);
    } catch (err) {
      setAnoHighErr(err.message);
    }
  };
  useEffect(() => {
    loadTop();
  }, []);

  return [top, anoHighErr];
};
