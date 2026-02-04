import type { AnimeCardType } from "@/types/anime";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL as string;

export const getAnimeList = async (item: string) => {
  try {
    console.log(`${BASE_URL}${item}`)
    const result = axios.get<AnimeCardType[]>(`${BASE_URL}${item}`);
    console.log(result)
    return result
  } catch (error) {

    console.error(error);
  }
};
