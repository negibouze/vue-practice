import cloneDeep from 'lodash.clonedeep';
import Vue from 'vue';
import { Commit } from 'vuex';
import * as types from '../mutation-types';
import api from '@/api';
import ITransportation from '@/interfaces/transportation';
import IArea from '@/interfaces/user-settings/area';
import ISearchCondition from '@/interfaces/user-settings/search-condition';

type ConditionValue = string|number|ITransportation[]|IArea[];

interface IdLabel {
  id: number;
  label: string;
}
interface ValueLabel {
  value: number;
  label: string;
}
export interface ConditionState {
  visibility: boolean;
  lines: ValueLabel[];
  prefectures: ValueLabel[];
  lastCondition: ISearchCondition;
  currentCondition: ISearchCondition;
}

const convert = (array: Array<{ id: number, label: string }>): ValueLabel[] => {
  return array.map((v: { id: number, label: string }) => {
    return { value : v.id, label: v.label };
  });
};

const cond = {
  namespaced: true,
  state: {
    visibility: false,
    lines: [],
    prefectures: [],
    lastCondition: { stageStatus: [1, 2, 3] },
    currentCondition: { stageStatus: [1, 2, 3] },
    } as ConditionState,
  mutations: {
    [types.VISIBLE_SEARCH_CONDITION](state: ConditionState, value: boolean): void {
      state.visibility = value;
    },
    [types.LOAD_SEARCH_CONDITION](state: ConditionState, value: ISearchCondition) {
      state.currentCondition = value;
    },
    [types.UPDATE_SEARCH_CONDITION](state: ConditionState, { key, value }: { key: string, value: ConditionValue }) {
      Vue.set(state.currentCondition, key, value);
    },
    [types.DETERMINE_SEARCH_CONDITION](state: ConditionState) {
      state.lastCondition = state.currentCondition;
    },
    [types.RESTORE_SEARCH_CONDITION](state: ConditionState) {
      state.currentCondition = cloneDeep(state.lastCondition);
    },
    [types.UPDATE_LINES](state: ConditionState, value: ValueLabel[]) {
      state.lines = value;
    },
    [types.UPDATE_PREFECTURES](state: ConditionState, value: ValueLabel[]) {
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
      api.user().getSearchCondition().then((value: ISearchCondition) => {
        commit(types.LOAD_SEARCH_CONDITION, value);
      });
    },
    update({ commit }: { commit: Commit }, { key, value }: { key: string, value: ConditionValue }): void {
      commit(types.UPDATE_SEARCH_CONDITION, { key, value });
    },
    determine({ commit }: { commit: Commit }): void {
      commit(types.DETERMINE_SEARCH_CONDITION);
    },
    restore({ commit }: { commit: Commit }): void {
      commit(types.RESTORE_SEARCH_CONDITION);
    },
    lines({ commit }: { commit: Commit }, areaCode: number): void {
      api.searchCondition().getLines(areaCode).then((lines: IdLabel[]) => {
        commit(types.UPDATE_LINES, convert(lines));
      });
    },
    prefectures({ commit }: { commit: Commit }, areaCode: number): void {
      api.searchCondition().getPrefectures(areaCode).then((prefectures: IdLabel[]) => {
        commit(types.UPDATE_PREFECTURES, convert(prefectures));
      });
    },
    async stations({}, lineId: number): Promise<void|ValueLabel[]> {
      try {
        const stations = await api.searchCondition().getStations(lineId);
        return convert(stations);
      } catch (e) {
        return e;
      }
    },
    async municipalities({}, prefectureId: number): Promise<void|ValueLabel[]> {
      try {
        const municipalities = await api.searchCondition().getMunicipalities(prefectureId);
        return convert(municipalities);
      } catch (e) {
        return e;
      }
    },
  },
};

export default cond;
