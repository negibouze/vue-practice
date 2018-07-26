import { Commit } from 'vuex'
import * as types from '../mutation-types'

export interface BalloonState {
    items: any,
    display: number[]
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
                display: []
            } as BalloonState,
            getters: {},
            mutations: {
                [types.END_BALLOON_SETTING_ACQUISITION] (state: BalloonState, { items, values }: { items: any[], values: number[] }) {
                    state.items = items
                    state.display = values
                },
                [types.END_BALLOON_SETTING_UPDATE] (state: BalloonState, { values }: { values: number[] }) {
                    state.display = values
                }
            },
            actions: {
                get({ commit }: { commit: Commit }) {
                    const items = [
                        { key: 1, label: '物件名' },
                        { key: 2, label: '建物名' },
                        { key: 6, label: '所在地' },
                        { key: 7, label: '交通' },
                        { key: 8, label: '最寄駅' },
                        { key: 13, label: '事業主' },
                        { key: 15, label: '販売会社' },
                        { key: 18, label: '管理会社' },
                        { key: 24, label: '着工日' },
                        { key: 25, label: '竣工日' },
                        { key: 26, label: '敷地面積' },
                        { key: 30, label: '構造' }    
                    ]
                    const values = [ 1, 2, 6, 8, 25 ]
                    commit(types.END_BALLOON_SETTING_ACQUISITION, { items, values })
                },
                update({ commit }: { commit: Commit }, values: number[]) {
                    commit(types.END_BALLOON_SETTING_UPDATE, { values })
                    // api.search().circle(options).then((projects: Project[]) => {
                    //     commit(types.END_CIRCLE_SEARCH, {
                    //         projects
                    //     })
                    // }).catch(() => {
                    //     console.log('Error')
                    // })
                },
            },
        },
        csv: {
            namespaced: true,
            state: {},
            getters: {}
        },
        forms: {
            namespaced: true,
            state: {},
            getters: {}
        },
        list: {
            namespaced: true,
            state: {},
            getters: {}
        },
        range: {
            namespaced: true,
            state: {},
            getters: {}
        }
    }
}

export default settings
