import { default as axios } from 'axios';
import Endpoint from '../endpoint';
import HttpClient from './http-client';
import IClient from './i-client';
import IHttpClient from './i-http-client';
import Method from './method';
import IRequestConfig from './request-config';
import IResponse from './response';

export default class TClient implements IClient {

  private client: IHttpClient;

  constructor(httpClient?: IHttpClient) {
    const instance = axios.create({
      baseURL: 'api/',
      timeout: 10000,
    });
    this.client = ((httpClient?: IHttpClient) => {
      if (!(!!httpClient)) {
        return new HttpClient(instance);
      }
      httpClient.setClient(instance);
      return httpClient;
    })(httpClient);
  }

  public async get(endpoint: Endpoint, conf: IRequestConfig): Promise<IResponse> {
    const c = Object.assign(conf, { url: endpoint });
    return await this.client.fetch<IResponse>(Method.GET, c).then(this.verifyResponse);
  }

  public async post(endpoint: Endpoint, conf: IRequestConfig): Promise<IResponse> {
    const c = Object.assign(conf, { url: endpoint });
    return await this.client.fetch<IResponse>(Method.POST, c).then(this.verifyResponse);
  }

  /**
   * レスポンス（ボディ）の検証
   * result_codeが2000番台ではない場合はエラー
   */
  private verifyResponse(res: IResponse): Promise<IResponse> {
    if (!/^2\d{3}$/.test(`${res.result_code}`)) {
      return Promise.reject(res);
    }
    return Promise.resolve(res);
  }
}
