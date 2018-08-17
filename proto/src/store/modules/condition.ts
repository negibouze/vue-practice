import { Commit } from 'vuex';
import * as types from '../mutation-types';
import api from '@/api';
import SearchCondition from '@/interfaces/user-settings/search-condition';

interface KeyValue {
  value: number;
  label: string;
}
export interface ConditionState {
  visibility: boolean;
  lines: KeyValue[];
  prefectures: KeyValue[];
  condition: SearchCondition|null;
}

const convert = (array: Array<{ id: number, label: string }>): KeyValue[] => {
  return array.map((v: { id: number, label: string }) => {
    return { value : v.id, label: v.label };
  });
};

const condition = {
  namespaced: true,
  state: {
    visibility: false,
    lines: [],
    prefectures: [],
    condition: null,
  } as ConditionState,
  mutations: {
    [types.VISIBLE_SEARCH_CONDITION](state: ConditionState, value: boolean): void {
      state.visibility = value;
    },
    [types.LOAD_SEARCH_CONDITION](state: ConditionState, value: SearchCondition) {
      state.condition = value;
    },
    [types.UPDATE_SEARCH_CONDITION](state: ConditionState, value: SearchCondition) {
      state.condition = value;
    },
    [types.UPDATE_LINES](state: ConditionState, value: KeyValue[]) {
      state.lines = value;
    },
    [types.UPDATE_PREFECTURES](state: ConditionState, value: KeyValue[]) {
      state.prefectures = value;
    },
  },
  actions: {
    visible({ commit }: { commit: Commit }): void {
      commit(types.VISIBLE_SEARCH_CONDITION, true);
    },
    invisible({ commit }: { commit: Commit }): void {
      commit(types.VISIBLE_SEARCH_CONDITION, false);
    },
    load({ commit }: { commit: Commit }): void {
      api.user().getSearchCondition().then((condition: SearchCondition) => {
        commit(types.LOAD_SEARCH_CONDITION, condition);
      });
    },
    update({ commit }: { commit: Commit }, value: object): Promise<{}> {
      return new Promise((resolve) => {
        commit(types.UPDATE_SEARCH_CONDITION, value);
        resolve();
      });
    },
    lines({ commit }: { commit: Commit }, areaCode: number): void {
      api.searchCondition().getLines(areaCode).then((lines: Array<{ id: number, label: string }>) => {
        commit(types.UPDATE_LINES, convert(lines));
      });
    },
    prefectures({ commit }: { commit: Commit }, areaCode: number): void {
      api.searchCondition().getPrefectures(areaCode).then((prefectures: Array<{ id: number, label: string }>) => {
        commit(types.UPDATE_PREFECTURES, convert(prefectures));
      });
    },
    async stations({}, lineId: number): Promise<void|KeyValue[]> {
      try {
        const stations = await api.searchCondition().getStations(lineId);
        return convert(stations);
      } catch (e) {
        return e;
      }
    },
    async municipalities({}, prefectureId: number): Promise<void|KeyValue[]> {
      try {
        const municipalities = await api.searchCondition().getMunicipalities(prefectureId);
        return convert(municipalities);
      } catch (e) {
        return e;
      }
    },
  },
};

export default condition;
