import { useState, useEffect } from "react";
import axios from "axios";
import { api } from "../../Constants";

export default () => {
  const [banner, setBanner] = useState([]);
  const [bannerError, setBannerError] = useState(null);
  const [bannerLoading, setBannerLoading] = useState(false);
  useEffect(() => {
    setBannerLoading(true);
    axios
      .get(`${api}/api/v1/headerBanners?limit=10`)
      .then((result) => {
        setBanner(result.data.data);
        setBannerError(null);
        setBannerLoading(false);
      })
      .catch((err) => {
        let message = err.message;
        if (message === "Request failed with status code 404")
          message = "Уучлаарай сэрвэр дахин ажилуулана уу";
        setBannerError(err.message);
        setBannerLoading(false);
      });
  }, []);
  return [banner, bannerError, bannerLoading];
};
