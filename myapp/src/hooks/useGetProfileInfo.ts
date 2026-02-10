import { getProfileInfo } from "@/api/getProfileInfo";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

export const useGetProfileInfo = () => {
  const token = localStorage.getItem("authToken") || "";
  const { data, isLoading, isSuccess, isError } = useQuery({
    queryKey: [`ProfileInfo`],
    queryFn: () => getProfileInfo(token),
    select: (data) => data?.data.user,
    gcTime: 2000,
  });
  useEffect(() => {
    console.log("измениенме");
  }, [data]);
  return { data, isLoading, isSuccess, isError };
};
