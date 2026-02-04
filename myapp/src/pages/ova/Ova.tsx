import AnimeList from "@/components/shared/animeList/AnimeList";
import { useGetAnimeList } from "@/hooks/useGetAnimeList";

const Ova = () => {
    const { data } = useGetAnimeList("");
    return ( 
        <main>
            <AnimeList data={data || []} />
        </main> );
}
 
export default Ova;