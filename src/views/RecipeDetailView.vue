<template>
<ion-page>
  <AppHeader title="Recipe" />
  <ion-content>
    <ion-grid class="ion-no-padding">
      <ion-row>
        <ion-col class="ion-no-padding">
          <RecipeSingle />
        </ion-col>
      </ion-row>
    </ion-grid>
  </ion-content>
</ion-page>
</template>

<script>
import {
  IonContent,
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
} from '@ionic/vue';
import AppHeader from '@/components/common/AppHeader.vue';
import RecipeSingle from '@/components/recipes/RecipeDetail';

export default {
  name: 'RecipeDetailView',
  components: {
    IonContent,
    IonPage,
    IonGrid,
    IonRow,
    IonCol,
    RecipeSingle,
    AppHeader,
  },
}
</script>

<style scoped>

</style>
