import useRequest from "./useRequest.js";

export default function useFavoriteService() {
    const { request } = useRequest();

    return {
        isFavorite: async (userId, movieId) => {
            const query = `userId="${userId}" AND movieId="${movieId}"`;
            const result = await request(`/data/favorites?where=${encodeURIComponent(query)}`);
            return result.length > 0 ? result[0] : null;
        },

        addFavorite: (userId, movieId) => {
            return request(`/data/favorites`, 'POST', { userId, movieId });
        },

        removeFavorite: (favoriteId) => {
            return request(`/data/favorites/${favoriteId}`, 'DELETE');
        },
        getUserFavorites: (userId) => {
            const query = `userId="${userId}"`;
            return request(`/data/favorites?where=${encodeURIComponent(query)}`);
        },
         getFavoriteCount: () => {
            return request('/data/favorites?count');
        }
    };
}