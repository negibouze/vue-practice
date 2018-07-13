import { default as axios } from 'axios';
import HttpClient from './httpClient'
import IClient from './IClient';
import Method from './method';
import TRequestConfig from './TRequestConfig';
import TResponse from './TResponse';
import Endpoint from './endpoint';

export default class TClient extends HttpClient implements IClient {
    constructor() {
        const client = axios.create({
            baseURL: 'api/',
            timeout: 10000
        })
        super(client)
    }

    async get(endpoint: Endpoint, conf: TRequestConfig): Promise<TResponse> {
        const c = Object.assign(conf, { url: endpoint });
        return await super.fetch<TResponse>(Method.GET, c).then(this.verifyResponse);
    }

    async post(endpoint: Endpoint, conf: TRequestConfig): Promise<TResponse> {
        const c = Object.assign(conf, { url: endpoint });
        return await super.fetch<TResponse>(Method.POST, c).then(this.verifyResponse);
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
