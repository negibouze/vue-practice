import { Commit } from 'vuex';
import * as types from '../mutation-types';

export interface ConditionsState {
    visibility: boolean;
    conditions: {};
}

const conditions = {
    namespaced: true,
    state: {
        visibility: false,
        conditions: {},
    } as ConditionsState,
    mutations: {
        [types.VISIBLE_SEARCH_CONDITIONS](state: ConditionsState, value: boolean): void {
            state.visibility = value;
        },
        [types.UPDATE_SEARCH_CONDITIONS](state: ConditionsState, value: object) {
            state.conditions = value;
        },
    },
    actions: {
        visible({ commit }: { commit: Commit }): void {
            commit(types.VISIBLE_SEARCH_CONDITIONS, true);
        },
        invisible({ commit }: { commit: Commit }): void {
            commit(types.VISIBLE_SEARCH_CONDITIONS, false);
        },
        update({ commit }: { commit: Commit }, value: object): Promise<{}> {
            return new Promise((resolve) => {
                commit(types.UPDATE_SEARCH_CONDITIONS, value);
                resolve();
            });
        },
    },
};

export default conditions;
