import CircleSearchOptions from './circleSearchOptions';
import RectangleSearchOptions from './rectangleSearchOptions';
import TResponse from './core/TResponse';
import IClient from './core/IClient';
import Project from '../entities/Project';
import Endpoint from './endpoint';

export default class Search { 
    private client: IClient

    constructor(client: IClient) {
        this.client = client
    }

    async circle(options: CircleSearchOptions): Promise<Project[]> {
        return await this.client.get(Endpoint.PROJECT, {
            headers: {},
            params: {
                center: options.center,
                radius: options.radius
            }
        }).then((data: TResponse) => {
            const results = data.results
            return results.map((element: Project) => {
                return element
            });
        // }).catch(() => {
        //     console.log('Reject!!!');
        //     return null;
        })
    }

    async rectangle(options: RectangleSearchOptions): Promise<Project[]> {
        return await this.client.get(Endpoint.PROJECT, {
            headers: {},
            params: {
                sw: `${options.sw.lat},${options.sw.lng}`,
                ne: `${options.ne.lat},${options.ne.lng}`
            }
        }).then((data: TResponse) => {
            const results = data.results
            return results.map((element: Project) => {
                return element
            });
        // }).catch(() => {
        //     console.log('Reject!!!');
        //     return null;
        })
    }
}
