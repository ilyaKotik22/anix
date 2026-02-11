
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL as string;

export const getCommentsById = async (animeId: string) => {
  try {
    const result = await axios.get(`${BASE_URL}/anime/${animeId}/comments`);
   
    return result;
  } catch (error) {
    console.error(error);
  }
};
