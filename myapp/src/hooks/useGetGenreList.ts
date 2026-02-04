import { getGenreList } from "@/api/getGenreList";
import { useQuery } from "@tanstack/react-query";

export const useGetGenreList = () => {
  const { data, isLoading, isSuccess, isError } = useQuery({
    queryKey: ["genreList"],
    queryFn: () => getGenreList(),
    select: (data) => data?.data,
    gcTime: 2 * 1000
  });



  return { data, isLoading, isSuccess, isError };
};
