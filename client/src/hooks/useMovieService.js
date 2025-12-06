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
    };
}