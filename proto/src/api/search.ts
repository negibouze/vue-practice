import Endpoint from './endpoint';
import IClient from './core/IClient';
import TResponse from './core/TResponse';
import SearchOptions from './search-options';
import Project from '../entities/Project';

export default class Search {
    private client: IClient;

    constructor(client: IClient) {
        this.client = client;
    }

    public async execute(options: SearchOptions): Promise<Project[]> {
        return await this.client.get(Endpoint.PROJECT, {
            headers: {},
            params: options,
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
