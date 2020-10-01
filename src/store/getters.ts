import { GetterTree } from 'vuex';
import { State } from './state';
import { Recipe } from "@/interfaces/Recipe";

export type Getters = {
    getRecipe(state: State): (id: string | string[]) => Recipe | undefined;
}

export const getters: GetterTree<State, State> & Getters = {
    getRecipe: (state) => (id) => {
        return state.recipes.find((recipe) => recipe.id === id);
    },
}
