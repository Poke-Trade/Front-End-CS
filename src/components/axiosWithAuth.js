import axios from "axios";

const axiosWithAuth = () => {
  const token = localStorage.getItem("key");

  return axios.create({
    baseURL: "https://poke-trade-be.herokuapp.com",
    headers: {
      Authorization: `Token ${token}`,
      // Authorization: token,
      "Content-Type": "application/json",
      // "Access-Control-Allow-Origin": "*",
    },
  });
};

export default axiosWithAuth;
