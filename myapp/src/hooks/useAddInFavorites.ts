import { postAddFavorite } from "@/api/postAddFavorite";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export type AnimeFav = {
  id: string;
  title: string;
  poster: string;
  description: string;
};
export const useAddInFavorite = () => {
  const queryClient = useQueryClient();
  const token = localStorage.getItem("authToken") || "";
  const mutation = useMutation({
    mutationFn: (anime) => postAddFavorite(anime, token),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["ProfileInfo"] });
    },
  });
  

  return { addHandle: mutation.mutate };
};
