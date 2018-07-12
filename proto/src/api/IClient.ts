import { TRequestConfig } from './TRequestConfig';
import { TResponse } from './TResponse';

export default interface IClient {
  get(conf: TRequestConfig): Promise<TResponse>;
  post(conf: TRequestConfig): Promise<TResponse>;
}
