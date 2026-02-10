import { postAddFavorite } from "@/api/postAddFavorite";
import type { AnimeFav } from "@/types/anime";
import { useMutation, useQueryClient } from "@tanstack/react-query";


export const useAddInFavorite = () => {
  const queryClient = useQueryClient();
  const token = localStorage.getItem("authToken") || "";
  const mutation = useMutation({
    mutationFn: (anime:AnimeFav) => postAddFavorite(anime, token),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["ProfileInfo"] });
    },
  });
  return { addHandle: mutation.mutate };
};
