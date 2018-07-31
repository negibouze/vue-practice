import Endpoint from './endpoint';
import IClient from './core/IClient';
import TResponse from './core/TResponse';
import CircleSearchOptions from './circleSearchOptions';
import RectangleSearchOptions from './rectangleSearchOptions';
import Project from '../entities/Project';

export default class Search {
    private client: IClient;

    constructor(client: IClient) {
        this.client = client;
    }

    public async circle(options: CircleSearchOptions): Promise<Project[]> {
        return await this.client.get(Endpoint.PROJECT, {
            headers: {},
            params: {
                center: options.center,
                radius: options.radius,
            },
        }).then((data: TResponse) => {
            const results = data.results;
            return results.map((element: Project) => {
                return element;
            });
        // }).catch(() => {
        //     console.log('Reject!!!');
        //     return null;
        });
    }

    public async rectangle(options: RectangleSearchOptions): Promise<Project[]> {
        return await this.client.get(Endpoint.PROJECT, {
            headers: {},
            params: {
                sw: `${options.sw.lat},${options.sw.lng}`,
                ne: `${options.ne.lat},${options.ne.lng}`,
            },
        }).then((data: TResponse) => {
            const results = data.results;
            return results.map((element: Project) => {
                return element;
            });
        // }).catch(() => {
        //     console.log('Reject!!!');
        //     return null;
        });
    }
}
