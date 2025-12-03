
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


    };
}