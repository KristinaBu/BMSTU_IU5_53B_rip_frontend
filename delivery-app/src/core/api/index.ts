import { IRequestOptions } from "./typing";


export const BASE_URL = "http://172.27.195.241:8080";


export const sendRequest = async (options: IRequestOptions) => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2000);
    const {
        method,
        path,
        headers = {},
        params = undefined,
        data /* , isAuth = false */,
    } = options;

    let url = BASE_URL + path;

    const requestOptions: RequestInit = {
        method,
        headers: {
            "Content-Type": "application/json",
            ...headers,
        },
        body: data ? JSON.stringify(data) : undefined,
    };
    if (params) {
        Object.keys(params).forEach((key) => {
            /* url.searchParams.append(key, params[key]); */
            url = url + "?" + key + "=" + params[key];
        });
    }
    const response = await fetch(url/* .toString() */, {...requestOptions, signal : controller.signal}).finally(()=>clearTimeout(timeoutId));
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
};