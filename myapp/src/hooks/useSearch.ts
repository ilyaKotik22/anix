import { getAnimeList } from "@/api/getAnimeList";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";


export const useSeacrh = (item: string) => {
    console.log(`/${item}`)
  const { data, isLoading, isSuccess, isError } = useQuery({
    queryKey: ["seacrhList",item],
    queryFn: () => getAnimeList(`/${item}`),
    select: (data) => data?.data.results,
    gcTime: 50,
  });

  return { data, isLoading, isSuccess, isError };
};
