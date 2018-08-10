import { Commit } from 'vuex';
import * as types from '../mutation-types';
import api from '@/api';
import Project from '@/entities/Project';
import SearchOptions from '@/interfaces/search-options';

export interface SearchState {
  projects: Project[];
}

const search = {
  namespaced: true,
  state: {
    projects: [],
  },
  getters: {
  },
  mutations: {
    [types.BEFORE_EXECUTE_SEARCH](state: SearchState) {

    },
    [types.EXECUTE_SEARCH](state: SearchState, projects: Project[]) {
      state.projects = projects;
    },
  },
  actions: {
    execute({ commit }: { commit: Commit }, options: SearchOptions): Promise<{}> {
      return new Promise((resolve) => {
        commit(types.BEFORE_EXECUTE_SEARCH);
        api.search().execute(options).then((projects: Project[]) => {
          commit(types.EXECUTE_SEARCH, projects);
        }).catch(() => {
          // console.log('Error');
        });
        resolve();
      });
    },
  },
};

export default search;
