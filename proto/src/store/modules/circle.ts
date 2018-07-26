import { Commit } from 'vuex';
import * as types from '../mutation-types';

export interface CircleState {
    enable: boolean;
    radius: number;
}

const circle = {
    namespaced: true,
    state: {
        enable: false,
        radius: 0
    } as CircleState,
    getters: {},
    mutations: {
        [types.BEGIN_CIRCLE_SEARCH] (state: CircleState, value: boolean): void {
            state.enable = value
        },
        [types.UPDATE_RADIUS] (state: CircleState, value: number): void {
            state.radius = value
        }
    },
    actions: {
        begin ({ commit }: { commit: Commit }): void {
            commit(types.BEGIN_CIRCLE_SEARCH, true)
        },
        end ({ commit }: { commit: Commit }): void {
            commit(types.BEGIN_CIRCLE_SEARCH, false)
        },
        updateRadius ({ commit }: { commit: Commit }, value: number): void {
            commit(types.UPDATE_RADIUS, value)
        }
    }
}

export default circle
