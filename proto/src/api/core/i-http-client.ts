import { AxiosInstance, AxiosRequestConfig } from 'axios';
import Method from './method';

export default interface IHttpClient {
  setClient(client: AxiosInstance): void;
  fetch<T>(method: Method, conf: AxiosRequestConfig): Promise<T>;
}
