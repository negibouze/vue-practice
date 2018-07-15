import Search from './search';
import IClient from './IClient';
import TClient from './TClient';

export default {
    search: (client?: IClient) => {
        if (!(!!client)) {
            return new Search(new TClient());
        }
        return new Search(client)
    }
}
