import { getAnimeList } from "@/api/getAnimeList";
import { useQuery } from "@tanstack/react-query";



export const useSeacrh = (item: string) => {
    console.log(`/${item}`)
  const { data, isLoading, isSuccess, isError } = useQuery({
    queryKey: ["seacrhList",item],
    queryFn: () => getAnimeList(`/${item}`),
    select: (data) => data?.data.results,
    gcTime: 50,
  });
  console.log(data)
  return { data, isLoading, isSuccess, isError };
};
