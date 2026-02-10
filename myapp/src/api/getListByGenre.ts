import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL as string;

export const getListByGenre = async <T>(element: string) => {
  try {
    return axios.get<T>(`${BASE_URL}/genre/${element}`);
  } catch (error) {
    console.error(error);
  }
};
