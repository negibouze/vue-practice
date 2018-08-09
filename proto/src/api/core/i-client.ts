import TRequestConfig from './request-config';
import TResponse from './response';
import Endpoint from '../endpoint';

export default interface IClient {
    get(endpoint: Endpoint, conf: TRequestConfig): Promise<TResponse>;
    post(endpoint: Endpoint, conf: TRequestConfig): Promise<TResponse>;
}
