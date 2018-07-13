import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import Method from './method';

export default class HttpClient {

    private client: AxiosInstance;

    constructor(client: AxiosInstance) {
        this.client = client
    }

    public async fetch<T>(method: Method, conf: AxiosRequestConfig): Promise<T> {
        const c = Object.assign(conf, { method });
        const res: AxiosResponse = await this.client.request(c);
        return <T>res.data;
    }
}
