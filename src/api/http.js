import axios from 'axios';
import * as Tokens from '@/helpers/tokens';

function addAccessToken(request) {
  const accessToken = Tokens.getAccessToken();
  const newRequest = request;

  if (accessToken !== null) {
    newRequest.headers.Authorization = `Bearer ${accessToken}`;
  }

  return newRequest;
}

// const DEV_MODE = process.env.NODE_ENV === 'production' ? false : true;

const instance = axios.create({
  // baseURL: DEV_MODE ? 'http://192.168.0.2:8088/api/' : '/api/',
  baseURL: process.env.NODE_ENV === 'production' ? '/api/' : 'http://192.168.0.2:8088/api/',
  timeout: 20000,
  withCredentials: false,
});

instance.interceptors.request.use(addAccessToken);

instance.interceptors.response.use(
  (request) => request,
  async (error) => {
    if (error.response.status !== 401) {
      return Promise.reject(error); // это не ошибка доступа
    }

    const response = await instance.post('auth/refresh');

    if (!response.data.res) {
      document.dispatchEvent(new CustomEvent('cantRefreshToken'));
      return Promise.reject(error); // не было рефреш токена
    }

    Tokens.setTokens(response.data.payload.accessToken);
    document.dispatchEvent(new CustomEvent('refreshTokens', { detail: response.data.payload.accessToken }));
    // в store тоже мб надо данные обновить
    return axios(addAccessToken(error.config));
  },
);

export function addErrorHandler(fn) {
  instance.interceptors.response.use((response) => response, fn);
}

export default instance;
