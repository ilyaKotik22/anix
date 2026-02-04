import AnimeList from "@/components/shared/animeList/AnimeList";
import { useGetAnimeList } from "@/hooks/useGetAnimeList";

const MyTab = () => {
    const { data } = useGetAnimeList("");
    return ( 
    <main>
        <AnimeList data={data || []} />
    </main> );
}
 
export default MyTab;