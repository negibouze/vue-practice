import Search from './search';
import IClient from './IClient';

export default {
    search: (client: IClient) => { return new Search(client) }
}
