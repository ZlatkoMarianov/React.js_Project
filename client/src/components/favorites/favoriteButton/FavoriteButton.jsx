import { useEffect, useState } from 'react';
import styles from './FavoriteButton.module.css';
import { useAuthContext } from '../../../contexts/AuthContext.jsx';
import useFavoriteService from '../../../hooks/useFavoriteService.js';
import { toast } from 'react-toastify';

export default function FavoriteButton({ movieId }) {
  const { user, isAuthenticated } = useAuthContext();
  const { isFavorite, addFavorite, removeFavorite } = useFavoriteService();

  const [favorite, setFavorite] = useState(null);

  useEffect(() => {
    if (isAuthenticated && user?._id) {
      isFavorite(user._id, movieId).then((result) => setFavorite(result));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieId, user?._id, isAuthenticated]);

  const handleToggle = async () => {
    if (!isAuthenticated) {
      return toast.warning('Please login to add favorites!');
    }

    try {
      if (favorite) {
        // Unlike
        await removeFavorite(favorite._id);
        setFavorite(null);
        // toast.success('Removed from favorites');
      } else {
        // Like
        const newFavorite = await addFavorite(user._id, movieId);
        setFavorite(newFavorite);
        // toast.success('Added to favorites');
      }
    } catch (err) {
    toast.error(err.message);
    }
  };

  return (
    <button
      className={`${styles.favoriteBtn} ${favorite ? styles.isFavorite : ''}`}
      onClick={handleToggle}
      title={favorite ? 'remove from favorites' : 'Add to favorites'}
    >
      {favorite ? '❤️' : '🤍'}
    </button>
  );
}
