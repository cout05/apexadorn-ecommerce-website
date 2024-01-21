import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

//get posts request
export const fetchPost = async () => {
  try {
    const { data } = await axios.get(`${API_URL}`);
    const d = data
      .map((a) => {
        return a;
      })
      .filter((e) => e.category != "electronics");
    return d;
  } catch (err) {
    console.log(err);
  }
};
