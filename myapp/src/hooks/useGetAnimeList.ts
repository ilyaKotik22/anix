import { getAnimeList } from "@/api/getAnimeList";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useGetAnimeList = (item?: string) => {
  const params = useLocation();
  const queryClient = useQueryClient();
  queryClient.setQueryData(['animeList'], []);
  
  const { data, isLoading, isSuccess, isError } = useQuery({
    queryKey: ["animeList"],
    queryFn: () => getAnimeList(params.pathname.length !== 1 ?  params.pathname : `/${item}`),
    select: (data) => data?.data.results,
    
  });

  useEffect(() => {
    if (isSuccess) console.log("data fetch succ");
    console.log(params.pathname)
  }, [isSuccess,data]);

  return { data, isLoading, isSuccess, isError };
};
