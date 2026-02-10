import { useState } from "react";

export const useUploadAvatar = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const upload = async (file: File, token: string) => {
    setLoading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append("avatar", file);

      const res = await fetch("http://127.0.0.1:3000/anime/animekai/avatar", {
        method: "POST",
        headers: {
          Authorization: "Bearer " + token,
        },
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Ошибка загрузки");
      }

      setImageUrl(data.imageUrl);
      setLoading(false);
      return data.imageUrl;
    } catch (err: any) {
      setError(err.message);
      setLoading(false);
    }
  };

  return { upload, loading, error, imageUrl };
};
