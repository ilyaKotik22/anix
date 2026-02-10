import { useState } from 'react';

export default function AvatarUpload({ token }: { token: string }) {
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Предпросмотр на фронте
    setPreview(URL.createObjectURL(file));

    const formData = new FormData();
    formData.append('avatar', file);

    setLoading(true);
    try {
      const res = await fetch('http://127.0.0.1:3000/anime/animekai/avatar', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`, // JWT из авторизации
        },
        body: formData,
      });

      const data = await res.json();
      if (res.ok) {
        alert('Аватар загружен!');
        console.log('URL аватара:', data.imageUrl);
      } else {
        alert(data.error || 'Ошибка при загрузке');
      }
    } catch (err) {
      console.error(err);
      alert('Ошибка сети');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {loading && <p>Загрузка...</p>}
      {preview && <img src={preview} alt="Preview" width={150} />}
    </div>
  );
}
