import axios from "axios";

// Using the example episode ID of "naruto-shippuden-1-episode-1".
const url = "http://127.0.0.1:3000/anime/animekai/watch/";
export const getAnimeEpisode = async (anime) => {
 try {
 const { data } = await axios.get(url+anime, { params: { dub: false } });
 console.log(data)
 return data;
 } catch (err) {
 throw new Error(err.message);
 }
};


