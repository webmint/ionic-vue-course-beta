import { ActionTree, ActionContext } from 'vuex'
import { State } from './state'
import { Mutations } from './mutations'
import { ActionTypes } from './action-types'
import { MutationTypes } from './mutation-types'

type AugmentedActionContext = {
    commit<K extends keyof Mutations>(
        key: K,
        payload: Parameters<Mutations[K]>[1]
    ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, State>, 'commit'>

export interface Actions {
    [ActionTypes.DELETE_RECIPE](
        { commit }: AugmentedActionContext,
        id: string
    ): void;
}

export const actions: ActionTree<State, State> & Actions = {
    [ActionTypes.DELETE_RECIPE]({ commit }, id) {
        commit(MutationTypes.DELETE_RECIPE, id)
    },
}
