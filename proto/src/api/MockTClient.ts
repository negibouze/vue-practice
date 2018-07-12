import Client from './client'
import IClient from './IClient';
import { Method } from './method'
import { TRequestConfig } from './TRequestConfig';
import { TResponse } from './TResponse';

export default class MockTClient extends Client implements IClient {
    constructor() {
        super({
            baseURL: 'api/',
            timeout: 10000
        })
    }

    async get(conf: TRequestConfig): Promise<TResponse> {
        return await super.fetch<TResponse>(Method.GET, conf).then(this.verifyResponse);
    }

    async post(conf: TRequestConfig): Promise<TResponse> {
        return await super.fetch<TResponse>(Method.POST, conf).then(this.verifyResponse);
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
