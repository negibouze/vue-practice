import { Commit } from 'vuex';
import * as types from '../mutation-types';
import api from '@/api';

export interface BalloonState {
    items: any;
    display: number[];
}

const settings = {
    namespaced: true,
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        balloon: {
            namespaced: true,
            state: {
                items: [],
                display: []
            } as BalloonState,
            getters: {},
            mutations: {
                [types.END_BALLOON_SETTING_ACQUISITION](state: BalloonState, { items, values }: { items: any[], values: number[] }) {
                    state.items = items;
                    state.display = values;
                },
                [types.END_BALLOON_SETTING_UPDATE](state: BalloonState, { values }: { values: number[] }) {
                    state.display = values;
                },
            },
            actions: {
                get({ commit }: { commit: Commit }) {
                    api.settings().getBalloon().then(({ items, values }: { items: any[], values: number[] }) => {
                        commit(types.END_BALLOON_SETTING_ACQUISITION, { items, values });
                    });
                },
                update({ commit }: { commit: Commit }, values: number[]) {
                    api.settings().updateBalloon(values).then(({ values }: { values: number[] }) => {
                        commit(types.END_BALLOON_SETTING_UPDATE, { values });
                    });
                },
            },
        },
        csv: {
            namespaced: true,
            state: {},
            getters: {},
        },
        forms: {
            namespaced: true,
            state: {},
            getters: {},
        },
        list: {
            namespaced: true,
            state: {},
            getters: {},
        },
        range: {
            namespaced: true,
            state: {},
            getters: {},
        },
    },
};

export default settings;
