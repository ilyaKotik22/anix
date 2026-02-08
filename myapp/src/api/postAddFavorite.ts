import type { AnimeFav } from "@/hooks/useAddInFavorites";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL as string;

export const postAddFavorite = async (anime:AnimeFav, token:string) => {
  console.log(anime)
  try {
   
    const results = await axios.post(`${BASE_URL}/favorites/toggle`, {
      animeId: anime.id,
      title: anime.title,
      poster: anime.poster,
      description: anime.description,
    },{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(results)
    return results
  } catch (error) {
    console.error(error);
  }
};
