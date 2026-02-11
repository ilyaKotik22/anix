import { getCommentsById } from "@/api/anime/getCommentsById";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";

export const useGetCommentsById = () => {
    const location = useLocation()
    const animeId = location.pathname.split('/')[2]
    
    const { data, isLoading, isSuccess, isError } = useQuery({
        queryKey: ["comments", animeId ],
        queryFn: () => getCommentsById(animeId),
        select: (data) => data?.data,
        staleTime: 2 * 60 * 1000,
        gcTime: 2 * 1000
      });
   
      return { comments:data, isLoading, isSuccess, isError }
}