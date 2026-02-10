import { getAnimeInfo } from "@/api/anime/getAnimeInfo";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";


export const useGetAnimeInfo = () => {
         const queryClient = useQueryClient();
    queryClient.setQueryData(['animeInfo'], [])
    const navigate = useLocation()
    const item = navigate.pathname.split('/')[2]
 ;
    const { data, isLoading, isSuccess, isError } = useQuery({
    queryKey: ["animeInfo",item],
    queryFn: () => getAnimeInfo(item),
    select: (data) => data?.data,
    staleTime: 2 * 60 * 1000,
    gcTime: 2 * 1000
  });
  useEffect(() => {
     
    console.log('ddd')
    }, [navigate.pathname]);
  return { data, isLoading, isSuccess, isError } 
}