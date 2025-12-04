
const base_Url = 'http://localhost:3030';

export default function useRequest() {

    const request = async (url, method, data, extraHeaders = {}) => {
        const options = {
            method,
            headers: {
                ...extraHeaders,
            }
        };

        if (data) {
            options.headers["content-type"] = "application/json";
            options.body = JSON.stringify(data);
        }

        const storedAuth = localStorage.getItem('auth');

        if (storedAuth) {
            try {
                const { accessToken } = JSON.parse(storedAuth);
                if (accessToken) {
                    options.headers['X-Authorization'] = accessToken;
                }
            } catch {
                localStorage.removeItem('auth');
            }
        }

        const res = await fetch(`${base_Url}${url}`, options);

        if (!res.ok) {
            let errorMessage = `Request failed: ${res.status}`;
            try {
                const errData = await res.json();
                if (errData.message) {
                    errorMessage = errData.message;
                }
            } catch { }

            throw new Error(errorMessage);
        }

        if (res.status === 204) {
            return null;
        }

        return res.json();
    };

    return { request };
}