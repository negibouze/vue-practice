import { Commit } from 'vuex';
import * as types from '../mutation-types';
import DropDownItems from '@/value-objects/dropdown';

export enum MapLayout {
  MapFull,
  SplitHorizontal,
  SplitVertical,
  ListFull,
}
export interface MapState {
  layout: MapLayout;
  menu: DropDownItems;
}

const Map = {
  namespaced: true,
  state: {
    layout: MapLayout.SplitHorizontal,
    menu: new DropDownItems(
      [
        { key: 1, value: '首都圏' },
        { key: 2, value: '関西' },
        { key: 3, value: '東海' },
        { key: 4, value: '九州' },
        { key: 5, value: '北海道' },
        { key: 6, value: '東北' },
        { key: 7, value: '甲信越' },
        { key: 8, value: '中国四国' },
      ],
    ),
  } as MapState,
  getters: {},
  mutations: {
    [types.CHANGE_MAP_LAYOUT](state: MapState, value: MapLayout): void {
      state.layout = value;
    },
  },
  actions: {
    changeLayout({ commit }: { commit: Commit }, value: MapLayout): void {
      commit(types.CHANGE_MAP_LAYOUT, value);
    },
  },
};

export default Map;
