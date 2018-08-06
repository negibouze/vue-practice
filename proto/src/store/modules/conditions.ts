import { Commit } from 'vuex';
import * as types from '../mutation-types';

export interface ConditionsState {
    visibility: boolean;
}

const conditions = {
    namespaced: true,
    state: {
        visibility: false,
    } as ConditionsState,
    mutations: {
        [types.VISIBLE_SEARCH_CONDITIONS](state: ConditionsState, value: boolean): void {
            state.visibility = value;
        },
    },
    actions: {
        visible({ commit }: { commit: Commit }): void {
            commit(types.VISIBLE_SEARCH_CONDITIONS, true);
        },
        invisible({ commit }: { commit: Commit }): void {
            commit(types.VISIBLE_SEARCH_CONDITIONS, false);
        },
    },
};

export default conditions;
