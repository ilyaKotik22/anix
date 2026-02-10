import type { AnimeCardType } from "@/types/anime";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL as string;

export const getAnimeList = async (item: string) => {
  try {
    const result = axios.get<{results:AnimeCardType[]}>(`${BASE_URL}${item}`);

    return result;
  } catch (error) {
    console.error(error);
  }
};
