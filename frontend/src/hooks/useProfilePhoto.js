import { useEffect, useState } from 'react';

export default function useProfilePhoto() {
  const [photoUrl, setPhotoUrl] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userId = document.cookie.includes('user_id=');
    if (!userId) {
      setPhotoUrl('');
      setLoading(false);
      return;
    }
    fetch('http://localhost:8000/api/profile/', {
      method: 'GET',
      credentials: 'include',
    })
      .then(res => res.json())
      .then(data => {
        let url = data.photo_url || '';
        if (url && url.startsWith('/')) url = 'http://localhost:8000' + url;
        setPhotoUrl(url);
        setLoading(false);
      })
      .catch(() => {
        setPhotoUrl('');
        setLoading(false);
      });
  }, [document.cookie]);

  return { photoUrl, loading };
}
