import { Commit } from 'vuex';
import * as types from '../mutation-types';
import api from '../../api';
import Project from '../../entities/Project';
import CircleSearchOptions from '../../api/circleSearchOptions';
import RectangleSearchOptions from '../../api/rectangleSearchOptions';

export interface SearchState {
    circle: boolean,
    rectangle: boolean,
    projects: Project[]
}

const search = {
    namespaced: true,
    state: {
        circle: false,
        rectangle: false,
        projects: []
    },
    getters: {
    },
    mutations: {
        [types.EXECUTE_CIRCLE_SEARCH] (state: SearchState) {
            if (state.circle || state.rectangle) {
                return
            }
            state.circle = true
        },
        [types.EXECUTE_RECTANGLE_SEARCH] (state: SearchState) {
            if (state.circle || state.rectangle) {
                return
            }
            state.rectangle = true
        },
        [types.END_CIRCLE_SEARCH] (state: SearchState, { projects }: { projects: Project[] }) {
            state.projects = projects
            state.circle = false
        },
        [types.END_RECTANGLE_SEARCH] (state: SearchState, { projects }: { projects: Project[] }) {
            state.projects = projects
            state.rectangle = false
        }
    },
    actions: {
        circle({ commit }: { commit: Commit }) {
            commit(types.EXECUTE_CIRCLE_SEARCH)
        },
        rectangle({ commit }: { commit: Commit }) {
            commit(types.EXECUTE_RECTANGLE_SEARCH)
        },
        executeCircle({ commit }: { commit: Commit }, options: CircleSearchOptions) {
            api.search().circle(options).then((projects: Project[]) => {
                commit(types.END_CIRCLE_SEARCH, {
                    projects
                })
            }).catch(() => {
                console.log('Error')
            })
        },
        executeRectangle({ commit }: { commit: Commit }, options: RectangleSearchOptions) {
            api.search().rectangle(options).then((projects: Project[]) => {
                commit(types.END_RECTANGLE_SEARCH, {
                    projects
                })
            }).catch(() => {
                console.log('Error')
            })
        }  
    }
}

export default search
