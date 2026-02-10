import axios from "axios";
const BASE_URL =  import.meta.env.VITE_BASE_URL
const url = BASE_URL +"/watch/";

export const getAnimeEpisode = async (anime: string) => {
  try {
    const { data } = await axios.get(url + anime, { params: { dub: false } });
    console.log(data);
    return data;
  } catch (err: unknown) {
    if (err instanceof Error) {
      throw err;
    }
    throw new Error("Unexpected error");
  }
};
