export type AnimeCardType = {
  id: string;
  title?: string;
  url?: string;
  image?: string;
  releaseDate?: string;
  subOrDub?: "sub";
};
export type AnimeInfo = {
  id?: string;
  title?: string;
  url?: string;
  image?: string;
  description?: string;
  genres?: string[];
  subOrDub?: string;
  type?: string;
  status?: string;
  otherName?: string;
  totalEpisodes?: number;
  episodes?: [
    {
      id: string;
      number: number;
      title: string;
      url: string;
      lang:string
    },
  ];
};
export type AnimeFav = {
  id: string;
  title: string;
  poster?: string;
  description: string;
};