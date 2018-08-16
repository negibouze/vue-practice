import { Commit } from 'vuex';
import * as types from '../mutation-types';
import api from '@/api';

interface KeyValue {
  value: number;
  label: string;
}
export interface ConditionsState {
  visibility: boolean;
  lines: KeyValue[];
  prefectures: KeyValue[];
  conditions: {};
}

const conditions = {
  namespaced: true,
  state: {
    visibility: false,
    lines: [
      { value: 1, label: 'JR中央線' },
      { value: 2, label: 'JR山手線' },
    ],
    prefectures: [
      { value: 1, label: '東京都' },
      { value: 2, label: '神奈川県' },
    ],
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
    async stations({}, lineId: number): Promise<void|[{}]> {
      try {
        const stations = await api.searchCondition().getStations(lineId);
        return stations.map((v: { id: number, label: string }) => {
          return {
            value : v.id,
            label: v.label,
          };
        });
      } catch (e) {
        return e;
      }
    },
    async municipalities({}, prefectureId: number): Promise<void|[{}]> {
      try {
        const municipalities = await api.searchCondition().getMunicipalities(prefectureId);
        return municipalities.map((v: { id: number, label: string }) => {
          return {
            value : v.id,
            label: v.label,
          };
        });
      } catch (e) {
        return e;
      }
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
