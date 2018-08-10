import { default as axios } from 'axios';
import Endpoint from '../endpoint';
import IClient from './i-client';
import Method from './method';
import MockHttpClient from './mock-http-client';
import IRequestConfig from './request-config';
import IResponse from './response';

export default class MockTClient implements IClient {

  private client: MockHttpClient;

  constructor() {
    const instance = axios.create({
      baseURL: 'api/',
      timeout: 10000,
    });
    this.client = new MockHttpClient(instance);
  }

  public async get(endpoint: Endpoint, conf: IRequestConfig): Promise<IResponse> {
    const c = Object.assign(conf, { url: endpoint });
    return await this.client.fetch<IResponse>(Method.GET, c);
  }

  public async post(endpoint: Endpoint, conf: IRequestConfig): Promise<IResponse> {
    const c = Object.assign(conf, { url: endpoint });
    return await this.client.fetch<IResponse>(Method.POST, c);
  }
}
