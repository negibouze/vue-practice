import IRequestConfig from './request-config';
import TResponse from './response';
import Endpoint from '../endpoint';

export default interface IClient {
  get(endpoint: Endpoint, conf: IRequestConfig): Promise<TResponse>;
  post(endpoint: Endpoint, conf: IRequestConfig): Promise<TResponse>;
}
