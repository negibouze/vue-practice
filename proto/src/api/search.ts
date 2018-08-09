import Endpoint from './endpoint';
import IClient from './core/client';
import TResponse from './core/response';
import SearchOptions from './search-options';
import Project from '../entities/project';

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
