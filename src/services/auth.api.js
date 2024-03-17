
import axios from "axios";

const API_URL = "https://todoserver-s269.onrender.com/api/v1";

export const login = async (user) => {
  try {
    const apiResponse = await axios.post(`${API_URL}/signin`, user);
    return apiResponse.data;
  } catch (err) {
    console.log(err, "err");
  }
};

export const signup = async (user) => {
  try {
    const apiResponse = await axios.post(`${API_URL}/signup`, user);
    return apiResponse.data;
  } catch (err) {
    console.log(err, "err");
  }
};
