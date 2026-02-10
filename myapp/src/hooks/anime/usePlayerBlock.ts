import { getAnimeEpisode } from "@/api/anime/getAnimeEpisode";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export const usePlayerBlock = (item:string) => {
    const [seriaVis, setSeriaVis] = useState<boolean>(false);
    const [seriasValue, setSeriasValue] = useState<string>(item);

    const { data, isLoading, isSuccess, isError } = useQuery({
    queryKey: ["animeEpisode",seriasValue],
    queryFn: () => getAnimeEpisode(seriasValue),
    select: (data) => data,
    staleTime: 2 * 60 * 1000,
    gcTime: 2 * 1000
  });
  useEffect(()=>{
    console.log(data?.subtitles || 'wait...')
  }, [seriasValue,data])
  return { data, isLoading, isSuccess, isError,seriaVis,setSeriaVis,seriasValue,setSeriasValue }
}