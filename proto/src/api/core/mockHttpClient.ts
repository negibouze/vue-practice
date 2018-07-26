import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import IHttpClient from './IHttpClient';
import Method from './method';
import Endpoint from '../endpoint';
import TRequestConfig from './TRequestConfig';
import MockAdapter from 'axios-mock-adapter/types';

export default class MockHttpClient implements IHttpClient {

    private client: AxiosInstance;
    private mock: MockAdapter;

    constructor(client: AxiosInstance) {
        this.mock = new MockAdapter(client)
        this.client = client
    }

    public setClient(client: AxiosInstance): void {
        this.mock = new MockAdapter(client)
        this.client = client
    }

    public async fetch<T>(method: Method, conf: AxiosRequestConfig): Promise<T> {
        const c = Object.assign(conf, { method });
        const res: AxiosResponse = await this.client.request(c);
        return <T>res.data;
    }

    public attachGetResponse(endpoint: Endpoint, conf: TRequestConfig): void {
        this.mock.onGet(endpoint, conf)
    }

    public attachPostResponse(endpoint: Endpoint, conf: TRequestConfig): void {
        this.mock.onPost(endpoint, conf)
    }
}
