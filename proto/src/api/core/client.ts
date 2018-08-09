import { default as axios } from 'axios';
import IClient from './i-client';
import Method from './method';
import TRequestConfig from './request-config';
import TResponse from './response';
import Endpoint from '../endpoint';
import IHttpClient from './i-http-client';
import HttpClient from './http-client';

export default class TClient implements IClient {

    private client: IHttpClient;

    constructor(httpClient?: IHttpClient) {
        const instance = axios.create({
            baseURL: 'api/',
            timeout: 10000
        })
        this.client = ((httpClient?: IHttpClient) => {
            if (!(!!httpClient)) {
                return new HttpClient(instance);
            }
            httpClient.setClient(instance);
            return httpClient;
        })(httpClient);
    }

    async get(endpoint: Endpoint, conf: TRequestConfig): Promise<TResponse> {
        const c = Object.assign(conf, { url: endpoint });
        return await this.client.fetch<TResponse>(Method.GET, c).then(this.verifyResponse);
    }

    async post(endpoint: Endpoint, conf: TRequestConfig): Promise<TResponse> {
        const c = Object.assign(conf, { url: endpoint });
        return await this.client.fetch<TResponse>(Method.POST, c).then(this.verifyResponse);
    }

    /**
     * レスポンス（ボディ）の検証
     * result_codeが2000番台ではない場合はエラー
     */
    private verifyResponse(res: TResponse): Promise<TResponse> {
        if (!/^2\d{3}$/.test(`${res.result_code}`)) {
            return Promise.reject(res);
        }
        return Promise.resolve(res);
    }
}
