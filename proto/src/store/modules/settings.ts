import { Commit } from 'vuex';
import * as types from '../mutation-types';
import api from '@/api';

export interface BalloonState {
  items: any;
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
      } as BalloonState,
      getters: {},
      mutations: {
        [types.END_BALLOON_SETTING_ACQUISITION](state: BalloonState, items: any[]) {
          state.items = items;
        },
        [types.END_BALLOON_SETTING_UPDATE](state: BalloonState, values: number[]) {
          console.log(values);
        },
      },
      actions: {
        get({ commit }: { commit: Commit }) {
          api.settings().getBalloon().then((items: any[]) => {
            commit(types.END_BALLOON_SETTING_ACQUISITION, items);
          });
        },
        update({ commit }: { commit: Commit }, values: number[]) {
          api.settings().updateBalloon(values).then((vals: number[]) => {
            commit(types.END_BALLOON_SETTING_UPDATE, { vals });
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
