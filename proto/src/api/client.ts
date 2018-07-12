import { default as axios, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { Method } from './method';

export default class Client {

    private api: AxiosInstance;

    constructor(conf: AxiosRequestConfig) {
        this.api = axios.create(conf)
    }

    protected async fetch<T>(method: Method, conf: AxiosRequestConfig): Promise<T> {
        const apiConf = Object.assign(conf, { method });
        const res: AxiosResponse = await this.api.request(apiConf);
        return <T>res.data;
    }
}
