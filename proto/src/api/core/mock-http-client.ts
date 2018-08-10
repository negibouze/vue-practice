import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import IHttpClient from './i-http-client';
import Method from './method';
import Endpoint from '../endpoint';
import IRequestConfig from './request-config';
import MockAdapter from 'axios-mock-adapter/types';

export default class MockHttpClient implements IHttpClient {

  private client: AxiosInstance;
  private mock: MockAdapter;

  constructor(client: AxiosInstance) {
    this.mock = new MockAdapter(client);
    this.client = client;
  }

  public setClient(client: AxiosInstance): void {
    this.mock = new MockAdapter(client);
    this.client = client;
  }

  public async fetch<T>(method: Method, conf: AxiosRequestConfig): Promise<T> {
    const c = Object.assign(conf, { method });
    const res: AxiosResponse = await this.client.request(c);
    return res.data as T;
  }

  public attachGetResponse(endpoint: Endpoint, conf: IRequestConfig): void {
    this.mock.onGet(endpoint, conf);
  }

  public attachPostResponse(endpoint: Endpoint, conf: IRequestConfig): void {
    this.mock.onPost(endpoint, conf);
  }
}
