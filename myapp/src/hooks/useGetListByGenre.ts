import { getListByGenre } from "@/api/getListByGenre";
import type { AnimeCardType } from "@/types/anime";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";

export const useGetListByGenre = () => {
  const location = useLocation();
  const genre = location.pathname.split("/")[2];

  const { data, isLoading, isSuccess, isError } = useQuery({
    queryKey: [`ListByGenre`, genre],
    queryFn: () => getListByGenre<{ results: AnimeCardType[] }>(genre),
    select: (data) => data?.data.results,
    gcTime: 2000,
  });

  return { data, isLoading, isSuccess, isError };
};
