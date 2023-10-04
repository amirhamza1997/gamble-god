import axios from 'axios';
import { getCookie, setCookie, removeCookie } from 'typescript-cookie';

const API_URL = process.env.NEXT_PUBLIC_BASE_URL;

const axiosApi = axios.create({
    baseURL: API_URL
});

export const refreshAccessToken = (refresh_token: string) =>
    post('/auth/refresh', { refresh_token });

axiosApi.interceptors.request.use(function (config) {
    const token =
        !!getCookie('authToken') && getCookie('authToken') !== 'undefined'
            ? JSON.parse(`${getCookie('authToken')}`)
            : '';
    config.headers['Authorization'] = token?.accessToken
        ? `Bearer ${token?.accessToken}`
        : '';
    return config;
});

axiosApi.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;
        if (error.response.status === 406) {
            window.location.href = '/auth/login';
            return;
        }
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            try {
                const token =
                    !!getCookie('authToken') && getCookie('authToken') !== 'undefined'
                        ? JSON.parse(`${getCookie('authToken')}`)
                        : '';

                if (!token?.refreshToken) {
                    window.location.href = '/auth/login';
                    return;
                }
                const data = await refreshAccessToken(token?.refreshToken);
                setCookie('authToken', JSON.stringify(data));
                axiosApi.defaults.headers.common[
                    'Authorization'
                ] = `Bearer ${data.accessToken}`;
                return axiosApi(originalRequest);
            } catch (error) {
                window.location.href = '/auth/login';
                removeCookie('authToken');
                return;
            }
        }
        return Promise.reject(error);
    }
);

export async function get(url: string, config = {}) {
    return axiosApi.get(url, { ...config }).then((response) => response.data);
}

export async function post(url: string, data: any, config = {}) {
    return axiosApi
        .post(url, { ...data }, { ...config })
        .then((response) => response.data);
}

export async function postFormData(url: string, data: any, config = {}) {
    return axiosApi
        .post(url, data, { ...config })
        .then((response) => response.data);
}

export async function put(url: string, data: any, config = {}) {
    return axiosApi
        .put(url, { ...data }, { ...config })
        .then((response) => response.data);
}

export async function putFormData(url: string, data: any, config = {}) {
    return axiosApi
        .put(url, data, { ...config })
        .then((response) => response.data);
}

export async function patch(url: string, data: any, config = {}) {
    return axiosApi
        .patch(url, { ...data }, { ...config })
        .then((response) => response.data);
}

export async function del(url: string, config = {}) {
    return axiosApi.delete(url, { ...config }).then((response) => response.data);
}