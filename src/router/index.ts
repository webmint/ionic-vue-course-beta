import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/recipes'
  },
  {
    path: '/recipes',
    name: 'Recipes',
    component: () => import(/* webpackChunkName: "recipe-detail" */ '../views/RecipesView.vue'),
  },
  {
    path: '/recipes/:id',
    name: 'Recipe',
    component: () => import(/* webpackChunkName: "recipe-detail" */ '../views/RecipeDetailView.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
