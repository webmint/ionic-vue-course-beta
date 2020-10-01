<template>
  <ion-page>
    <AppHeader title="Recipes" />
    <ion-content :fullscreen="true">
      <RecipesList />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonPage } from '@ionic/vue';
import { defineComponent } from 'vue';
import AppHeader from '@/components/common/AppHeader.vue';
import RecipesList from '@/components/recipes/RecipesList.vue';

export default defineComponent({
  name: 'RecipesView',
  components: {
    IonContent,
    IonPage,
    AppHeader,
    RecipesList,
  },
  methods: {
    ionViewWillEnter() {
      console.log('enter'); // Ionic LCH must be used on pages only
    }
  },
});
</script>

<style scoped>

</style>
