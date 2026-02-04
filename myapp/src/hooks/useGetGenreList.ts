import { getGenreList } from "@/api/getGenreList";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

export const useGetGenreList = () => {
  const { data, isLoading, isSuccess, isError } = useQuery({
    queryKey: ["genreList"],
    queryFn: () => getGenreList(),
    select: (data) => data?.data,
    
  });

  useEffect(() => {
    if (isSuccess) console.log("data fetch succ");
  }, [isSuccess,data]);

  return { data, isLoading, isSuccess, isError };
};
