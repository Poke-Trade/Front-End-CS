import axios from "axios";

const axiosWithAuth = () => {
  const token = localStorage.getItem("key");

  return axios.create({
    baseURL: "https://lambda-mud-test.herokuapp.com/api",
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
      // "Access-Control-Allow-Origin": "*",
    },
  });
};

export default axiosWithAuth;
