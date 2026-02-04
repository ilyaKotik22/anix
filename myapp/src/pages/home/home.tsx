import AnimeList from "@/components/shared/animeList/AnimeList";
import { useGetAnimeList } from "@/hooks/useGetAnimeList";


const Home = () => {
  const { data } = useGetAnimeList("latest-completed");

  
  return (
    <main>
      <AnimeList data={data || []} />
    </main>
  );
};

export default Home;
