import { Commit } from 'vuex';
import * as types from '../mutation-types';
import api from '../../api';
import SearchOptions from '../../api/search-options';
import Project from '../../entities/Project';

export interface SearchState {
    conditions: {};
    projects: Project[];
}

const search = {
    namespaced: true,
    state: {
        conditions: {},
        projects: [],
    },
    getters: {
    },
    mutations: {
        [types.UPDATE_SEARCH_CONDITION](state: SearchState, conditions: object) {
            state.conditions = conditions;
        },
        [types.BEFORE_EXECUTE_SEARCH](state: SearchState) {

        },
        [types.EXECUTE_SEARCH](state: SearchState, projects: Project[]) {
            state.projects = projects;
        },
    },
    actions: {
        updateCondition({ commit }: { commit: Commit }, conditions: object) {
            return new Promise((resolve) => {
                commit(types.UPDATE_SEARCH_CONDITION, conditions);
                resolve();
            });
        },
        execute({ commit }: { commit: Commit }, options: SearchOptions) {
            commit(types.BEFORE_EXECUTE_SEARCH);
            api.search().execute(options).then((projects: Project[]) => {
                commit(types.EXECUTE_SEARCH, {
                    projects,
                });
            }).catch(() => {
                // console.log('Error');
            });
        },
    },
};

export default search;
