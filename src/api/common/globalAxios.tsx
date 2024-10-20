import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

const baseURL = import.meta.env.VITE_API_URL;
const accessToken = import.meta.env.VITE_ACCESS_TOKEN;

const globalAxios = axios.create({
  baseURL,
});

globalAxios.defaults.headers.common = {
  Accept: "application/json",
  Authorization: `Bearer ${accessToken}`,
};

const onRequest = (
  config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => config;

const onRequestError = (error: AxiosError): Promise<AxiosError> =>
  Promise.reject(error);

const onResponse = (response: AxiosResponse): AxiosResponse => response;

const onResponseError = (error: AxiosError): Promise<AxiosError> =>
  Promise.reject(error);

globalAxios.interceptors.request.use(onRequest, onRequestError);
globalAxios.interceptors.response.use(onResponse, onResponseError);

export default globalAxios;
