import AnimeList from "@/components/shared/animeList/AnimeList";
import { useGetAnimeList } from "@/hooks/anime/useGetAnimeList";

const NewReleases = () => {
  const { data } = useGetAnimeList("");
  return (
    <main>
      <AnimeList data={data || []} />
    </main>
  );
};

export default NewReleases;
