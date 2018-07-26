// import { Commit } from 'vuex'
// import * as types from '../mutation-types'
import DropDownVO from '@/value-objects/dropdown';

export interface MapMenuState {
    menu: DropDownVO;
}

const MapMenu = {
    namespaced: true,
    state: {
        menu: new DropDownVO(
          [
            { key: 1, value: '首都圏' },
            { key: 2, value: '関西' },
            { key: 3, value: '東海' },
            { key: 4, value: '九州' },
            { key: 5, value: '北海道' },
            { key: 6, value: '東北' },
            { key: 7, value: '甲信越' },
            { key: 8, value: '中国四国' }
          ]
        )
    } as MapMenuState,
    getters: {},
    mutations: {
    },
    actions: {
    }
}

export default MapMenu
