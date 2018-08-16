import { Commit } from 'vuex';
import * as types from '../mutation-types';

export interface ConditionsState {
  visibility: boolean;
  lines: [{}];
  prefectures: [{}];
  stations: [{}];
  municipalities: [{}];
  conditions: {};
}

const conditions = {
  namespaced: true,
  state: {
    visibility: false,
    lines: [
      { value: 1, label: 'JR山手線' },
    ],
    prefectures: [
      { value: 1, label: '東京都' },
    ],
    stations: [
      { value: 2, label: '品川' },
    ],
    municipalities: [
      { value: 2, label: '渋谷区' },
    ],
    conditions: {},
  } as ConditionsState,
  mutations: {
    [types.VISIBLE_SEARCH_CONDITIONS](state: ConditionsState, value: boolean): void {
      state.visibility = value;
    },
    [types.UPDATE_STATIONS](state: ConditionsState, value: [{}]) {
      state.stations = value;
    },
    [types.UPDATE_MUNICIPALITIES](state: ConditionsState, value: [{}]) {
      state.municipalities = value;
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
    stations({ commit }: { commit: Commit }, lineId: number): void {
      commit(types.UPDATE_STATIONS, [
        { value: 1, label: '渋谷' },
      ]);
    },
    municipalities({ commit }: { commit: Commit }, prefectureId: number): void {
      commit(types.UPDATE_MUNICIPALITIES, [
        { value: 1, label: '新宿区' },
      ]);
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
