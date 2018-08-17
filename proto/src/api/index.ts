import IClient from './core/i-client';
import TClient from './core/client';
import Search from './search';
import Settings from './settings';
import SearchCondition from './search-condition';
import User from './user';

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
  searchCondition: (client?: IClient) => {
    if (!(!!client)) {
      return new SearchCondition(new TClient());
    }
    return new SearchCondition(client);
  },
  user: (client?: IClient) => {
    if (!(!!client)) {
      return new User(new TClient());
    }
    return new User(client);
  },
};
