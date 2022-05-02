import React, { useState, useEffect } from "react";
import axios from "axios";
import { api } from "../../Constants";
export default (technoId) => {
  const [techno, setTechno] = useState(null);
  const [anoHighErr, setAnoHighErr] = useState(null);
  const loadTechno = async () => {
    try {
      const result = await axios.get(`${api}/api/v1/technos/${technoId}`);
      setTechno(result.data.data);
      setAnoHighErr(null);
    } catch (err) {
      setAnoHighErr(err.message);
    }
  };
  useEffect(() => {
    loadTechno();
  }, []);

  return [techno, anoHighErr];
};
