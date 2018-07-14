import { AxiosInstance, AxiosRequestConfig } from "../../node_modules/axios";
import Method from "./method";

export default interface IHttpClient {
    setClient(client: AxiosInstance): void;
    fetch<T>(method: Method, conf: AxiosRequestConfig): Promise<T>;
}
