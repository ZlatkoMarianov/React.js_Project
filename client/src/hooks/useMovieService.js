import useRequest from "./useRequest.js";

export default function useMovieService() {
    const { request } = useRequest();

    return {
        getAll: () => request('/data/movies'),
        getOne: (id) => request(`/data/movies/${id}`),
        create: (data) => request('/data/movies', 'POST', data),
        update: (id, data) => request(`/data/movies/${id}`, 'PUT', data),
        remove: (id) => request(`/data/movies/${id}`, 'DELETE'),
        getByOwner: (ownerId) => {
            const query = `_ownerId="${ownerId}"`;
            return request(`/data/movies?where=${encodeURIComponent(query)}`);
        },
        search: (searchParams) => {
            const { title, genre } = searchParams;
            let conditions = [];

            if (title) {
                conditions.push(`title LIKE "${title}"`);
            }

            if (genre) {
                conditions.push(`genre LIKE "${genre}"`);
            }

            if (conditions.length === 0) {
                return request('/data/movies');
            }

            const query = conditions.join(' AND ');
            return request(`/data/movies?where=${encodeURIComponent(query)}`);
        },
    };
}