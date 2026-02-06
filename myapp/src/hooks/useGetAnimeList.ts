import { getAnimeList } from "@/api/getAnimeList";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";

export const useGetAnimeList = (item?: string) => {
  const params = useLocation();
  
  const { data, isLoading, isSuccess, isError } = useQuery({
    queryKey: ["animeList", params.pathname ],
    queryFn: () => getAnimeList(params.pathname.length !== 1 ?  params.pathname : `/${item}`),
    select: (data) => data?.data.results,
    staleTime: 2 * 60 * 1000,
    gcTime: 2 * 1000
  });

  return { data, isLoading, isSuccess, isError };
};
