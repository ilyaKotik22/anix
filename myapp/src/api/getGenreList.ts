
import axios from "axios";
const BASE_URL = import.meta.env.VITE_BASE_URL as string;
const urlGetAnimeList = BASE_URL +"/genre/list";


export const getGenreList = async () => {
  try {
    return axios.get<string[]>(`${urlGetAnimeList}`);
  } catch (error) {

    console.error(error);
  }
};