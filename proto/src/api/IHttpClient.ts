import { AxiosRequestConfig } from "../../node_modules/axios";
import Method from "./method";

export default interface IHttpClient {
    fetch<T>(method: Method, conf: AxiosRequestConfig): Promise<T>;
}
