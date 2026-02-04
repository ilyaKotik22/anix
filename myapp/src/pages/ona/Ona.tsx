import AnimeList from "@/components/shared/animeList/AnimeList";
import { useGetAnimeList } from "@/hooks/useGetAnimeList";

const Ona = () => {
    const { data } = useGetAnimeList("");
    return ( 
    <main>
        <AnimeList data={data || []} />
    </main> );
}
 
export default Ona;