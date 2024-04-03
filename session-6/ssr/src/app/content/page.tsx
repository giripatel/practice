import React from "react";
import axios from "axios";

const fetchData = async () => {
  const response = await axios.get(
    "http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=astro&output=xml"
  );
  return response.data;
};

const page = async () => {
  const data = await fetchData();

  return <div>{data}</div>;
};

export default page;
