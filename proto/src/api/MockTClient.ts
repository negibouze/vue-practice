import { default as axios } from 'axios';
import HttpClient from './httpClient'
import IClient from './IClient';
import Method from './method';
import TRequestConfig from './TRequestConfig';
import TResponse from './TResponse';
import Endpoint from './endpoint';
import MockAdapter from 'axios-mock-adapter';

export default class MockTClient extends HttpClient implements IClient {

    private mock: MockAdapter;

    constructor() {
        const client = axios.create({
            baseURL: 'api/',
            timeout: 10000
        })
        const tmp = new MockAdapter(client)
        super(client)
        this.mock = tmp
    }

    async get(endpoint: Endpoint, conf: TRequestConfig): Promise<TResponse> {
        this.attachGetResponse(endpoint, conf);
        const c = Object.assign(conf, { url: endpoint });
        return await super.fetch<TResponse>(Method.GET, c);
    }

    async post(endpoint: Endpoint, conf: TRequestConfig): Promise<TResponse> {
        this.attachPostResponse(endpoint, conf);
        const c = Object.assign(conf, { url: endpoint });
        return await super.fetch<TResponse>(Method.POST, c);
    }

    private attachGetResponse(endpoint: Endpoint, conf: TRequestConfig): void {
        switch(endpoint) {
            case Endpoint.PROJECT:
                this.mock.onGet(endpoint, conf)
                break;
            default:

        }
    }

    private attachPostResponse(endpoint: Endpoint, conf: TRequestConfig): void {
        switch(endpoint) {
            case Endpoint.PROJECT:
                this.mock.onPost(endpoint, conf)
                break;
            default:

        }
    }
}
