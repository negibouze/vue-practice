import { default as axios } from 'axios';
import IClient from './i-client';
import Method from './method';
import TRequestConfig from './request-config';
import TResponse from './response';
import Endpoint from '../endpoint';
import MockHttpClient from './mock-http-client';

export default class MockTClient implements IClient {

    private client: MockHttpClient;

    constructor() {
        const instance = axios.create({
            baseURL: 'api/',
            timeout: 10000
        })
        this.client = new MockHttpClient(instance)
    }

    async get(endpoint: Endpoint, conf: TRequestConfig): Promise<TResponse> {
        const c = Object.assign(conf, { url: endpoint });
        return await this.client.fetch<TResponse>(Method.GET, c);
    }

    async post(endpoint: Endpoint, conf: TRequestConfig): Promise<TResponse> {
        const c = Object.assign(conf, { url: endpoint });
        return await this.client.fetch<TResponse>(Method.POST, c);
    }
}
