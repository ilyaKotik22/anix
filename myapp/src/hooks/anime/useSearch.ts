import { getAnimeList } from "@/api/anime/getAnimeList";
import { useQuery } from "@tanstack/react-query";
export const useSeacrh = (item: string) => {
  const { data, isLoading, isSuccess, isError } = useQuery({
    queryKey: ["seacrhList", item],
    queryFn: () => getAnimeList(`/${item}`),
    select: (data) => data?.data.results,
    gcTime: 50,
  });

  return { data, isLoading, isSuccess, isError };
};
