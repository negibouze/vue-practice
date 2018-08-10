import IClient from './core/i-client';
import TClient from './core/client';
import Search from './search';
import Settings from './settings';

export default {
  search: (client?: IClient) => {
    if (!(!!client)) {
      return new Search(new TClient());
    }
    return new Search(client);
  },
  settings: (client?: IClient) => {
    if (!(!!client)) {
      return new Settings(new TClient());
    }
    return new Settings(client);
  },
};
