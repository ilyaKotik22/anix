import AnimeCard from "@/components/shared/animeCard/AnimeCard";
import style from '@/components/shared/animeList/AnimeList.module.css'
import { useGetProfileInfo } from "@/hooks/auth/useGetProfileInfo";


const MyTab = () => {
    const { data } = useGetProfileInfo()
    
    console.log(data)
    return (
        <main style={{height:'100vh'}}>
             <ul className={style.AnimeList}>
                    {data?.favorites && data.favorites.map(el =>  <AnimeCard key={el.id}
                        id={el.id}
                        title={el.title}
                        image={el.poster}
                    />)}
                </ul>
        </main>);
}

export default MyTab;