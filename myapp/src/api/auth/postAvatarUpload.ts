const BASE_URL = import.meta.env.VITE_BASE_URL as string;

export const postAvatatUpload = async (token:string,formData:FormData) => {
    try {
      const res = await fetch(`${BASE_URL}/avatar`, {
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
    } 
}