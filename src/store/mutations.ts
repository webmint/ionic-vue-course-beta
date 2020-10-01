import { MutationTree } from 'vuex'
import { MutationTypes } from './mutation-types'
import { State } from './state'

export type Mutations<S = State> = {
    [MutationTypes.DELETE_RECIPE](state: S, payload: string): void;
}

export const mutations: MutationTree<State> & Mutations = {
    [MutationTypes.DELETE_RECIPE](state, payload: string) {
        state.recipes = state.recipes.filter((r) => r.id !== payload);
    },
}
