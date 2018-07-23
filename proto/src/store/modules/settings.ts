// import { Commit } from 'vuex'
// import * as types from '../mutation-types'
import RadioVO from '@/value-objects/radio'
import SelectVO from '@/value-objects/select'

export interface SettingsState {
    items: RadioVO[];
    options: SelectVO[];
}

const Settings = {
    namespaced: true,
    state: {
        items: [
            new RadioVO(1, '首都圏'),
            new RadioVO(2, '関西'),
            new RadioVO(3, '東海')
        ],
        options: [
            new SelectVO(1, '首都圏'),
            new SelectVO(2, '関西'),
            new SelectVO(3, '東海')
        ]  
    } as SettingsState,
    getters: {},
    mutations: {
    },
    actions: {
    }
}

export default Settings
