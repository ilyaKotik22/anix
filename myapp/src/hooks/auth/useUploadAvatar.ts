import { postAvatatUpload } from "@/api/auth/postAvatarUpload";
import { useState } from "react";

export const useUploadAvatar = (token:string) => {
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

  
    setPreview(URL.createObjectURL(file));

    const formData = new FormData();
    formData.append("avatar", file);

    setLoading(true);
    postAvatatUpload(token,formData)
    
  };
  return {preview,loading,handleFileChange}
};
