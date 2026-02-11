import { useUploadAvatar } from '@/hooks/auth/useUploadAvatar';

export default function AvatarUpload({ token }: { token: string }) {
  const {loading,handleFileChange} = useUploadAvatar(token)

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {loading && <p>Загрузка...</p>}
      {/* {preview && <img src={preview} alt="Preview" width={150} />} */}
    </div>
  );
}
