import { Commit } from 'vuex';
import * as types from '../mutation-types';
import Coordinate from '@/value-objects/coordinate';

export interface CircleState {
    active: boolean;
    mordal: boolean;
    center: Coordinate|null;
    radius: number;
}

const circle = {
    namespaced: true,
    state: {
        active: false,
        mordal: false,
        center: null,
        radius: 0,
    } as CircleState,
    mutations: {
        [types.CIRCLE_SEARCH](state: CircleState, value: boolean): void {
            state.active = value;
        },
        [types.VISIBLE_MORDAL_CIRCLE_SEARCH](state: CircleState, value: boolean): void {
            state.mordal = value;
        },
        [types.SET_CENTER_COORDINATE](state: CircleState, value: Coordinate): void {
            state.center = value;
        },
        [types.UPDATE_RADIUS](state: CircleState, value: number): void {
            state.radius = value;
        },
    },
    actions: {
        begin({ commit }: { commit: Commit }): void {
            commit(types.CIRCLE_SEARCH, true);
        },
        end({ commit }: { commit: Commit }): void {
            commit(types.CIRCLE_SEARCH, false);
        },
        showMordal({ commit }: { commit: Commit }): void {
            commit(types.VISIBLE_MORDAL_CIRCLE_SEARCH, true);
        },
        hideMordal({ commit }: { commit: Commit }): void {
            commit(types.VISIBLE_MORDAL_CIRCLE_SEARCH, false);
        },
        setCenter({ commit }: { commit: Commit }, value: Coordinate): Promise<{}> {
            return new Promise((resolve) => {
                commit(types.SET_CENTER_COORDINATE, value);
                resolve();
            });
        },
        updateRadius({ commit }: { commit: Commit }, value: number): void {
            commit(types.UPDATE_RADIUS, value);
        },
    },
};

export default circle;
