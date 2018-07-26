import TRequestConfig from './TRequestConfig';
import TResponse from './TResponse';
import Endpoint from '../endpoint';

export default interface IClient {
    get(endpoint: Endpoint, conf: TRequestConfig): Promise<TResponse>;
    post(endpoint: Endpoint, conf: TRequestConfig): Promise<TResponse>;
}
