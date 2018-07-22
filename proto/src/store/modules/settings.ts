// import { Commit } from 'vuex'
// import * as types from '../mutation-types'
import RadioVO from '@/value-objects/radio'

export interface SettingsState {
    items: RadioVO[];
}

const Settings = {
    namespaced: true,
    state: {
        items: [
          new RadioVO(1, '首都圏'),
          new RadioVO(2, '関西'),
          new RadioVO(3, '東海')
        ]
    } as SettingsState,
    getters: {},
    mutations: {
    },
    actions: {
    }
}

export default Settings
