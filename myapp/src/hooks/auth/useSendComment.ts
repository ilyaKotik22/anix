import { postSendComments } from "@/api/auth/postSendComment";
import { useAuth } from "@/app/context";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";

export const useSendComments = () => {
  const queryClient = useQueryClient();
  const { token } = useAuth();
  const location = useLocation();
  const animeId = location.pathname.split("/")[2];
  const mutation = useMutation({
    mutationFn: (text: string) => postSendComments(token, animeId, text),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments", animeId] });
    },
  });
  return { handleSendText: mutation.mutate };
};
