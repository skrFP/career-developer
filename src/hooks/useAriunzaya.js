import React, { useState, useEffect } from "react";
import axios from "axios";
import { api } from "../../Constants";
export default (ariunzayaId) => {
  const [ariunzaya, setAriunzaya] = useState(null);
  const [anoHighErr, setAnoHighErr] = useState(null);
  const loadAriunzaya = async () => {
    try {
      const result = await axios.get(`${api}/api/v1/ariunzayas/${ariunzayaId}`);
      setAriunzaya(result.data.data);
      setAnoHighErr(null);
    } catch (err) {
      setAnoHighErr(err.message);
    }
  };
  useEffect(() => {
    loadAriunzaya();
  }, []);

  return [ariunzaya, anoHighErr];
};
