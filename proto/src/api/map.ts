import { CircleSearchOptions } from '../../entity/circleSearchOptions';
import { RectangleSearchOptions } from '../../entity/rectangleSearchOptions';
import { TResponse } from './TResponse';
import IClient from './IClient';
import Project from '../entities/Project';

export default class Map { 
    private client: IClient

    constructor(client: IClient) {
        this.client = client
    }

    async circle(options: CircleSearchOptions): Promise<Project[]> {
        return await this.client.get({
            url: 'projects',
            headers: {},
            params: {
                center: options.center
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
        return await this.client.get({
            url: 'projects',
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
