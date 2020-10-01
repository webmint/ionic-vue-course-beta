<template>
  <article v-if="recipe">
    <ion-img :src="recipe.imageUrl" />
    <h1 class="ion-text-center">{{ recipe.title }}</h1>
    <ion-list>
      <ion-item
          v-for="(ingredient, index) in recipe.ingredients"
          :key="index"
      >
        <ion-label>
          {{ ingredient }}
        </ion-label>
      </ion-item>
    </ion-list>
  </article>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted } from 'vue';
import { IonImg, IonList, IonItem, IonLabel } from '@ionic/vue';
import { useStore } from '@/store';
import { useRoute } from "vue-router";

export default defineComponent({
  name: 'RecipeDetail',
  components: {
    IonImg,
    IonList,
    IonItem,
    IonLabel,
  },
  setup() {
    const store = useStore();
    const { params: { id } } = useRoute();

    const recipe = computed(() => store.getters.getRecipe(id));

    const ionViewWillEnter = () => console.log('enter');

    onMounted(() => {
      console.log('mounder');
    });
    return {
      recipe,
      ionViewWillEnter,
    };
  },
});
</script>

<style scoped>

</style>
