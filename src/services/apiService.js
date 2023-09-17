import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

//get posts request
export const fetchPost = async () => {
  try {
    const { data } = await axios.get(`${API_URL}men's clothing`);
    return data;
  } catch (err) {
    console.log(err);
  }
};
