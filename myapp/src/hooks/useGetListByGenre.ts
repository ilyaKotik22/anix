import { getListByGenre } from "@/api/getListByGenre"
import type { AnimeCardType } from "@/types/anime"
import { useQuery } from "@tanstack/react-query"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export const useGetListByGenre = () => {
    const location = useLocation()
    const genre = location.pathname.split('/')[2]
    
    const {data, isLoading, isSuccess, isError} = useQuery({
        queryKey:[`ListByGenre-${genre}`],
        queryFn: ()=> getListByGenre<AnimeCardType[]>(genre),
        select: (data) => data?.data.results,
        gcTime: 30000,
    })
    useEffect(()=>{
        console.log(genre)
        return 
    }, [location])
    return {data, isLoading, isSuccess, isError}
}