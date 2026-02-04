import AnimeList from "@/components/shared/animeList/AnimeList";
import { useGetListByGenre } from "@/hooks/useGetListByGenre";

const GenrePage = () => {
    const {data} = useGetListByGenre()

    return (    
        <main>
            <AnimeList data={data || []} />
        </main> );
}
 
export default GenrePage;