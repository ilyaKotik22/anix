import type {  AnimeInfo } from "@/types/anime";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL as string;

export const getAnimeInfo = async (item: string) => {
  try {
    const result = axios.get<AnimeInfo>(`${BASE_URL}/info?id=${item}`);

    return result
  } catch (error) {

    console.error(error);
  }
};
