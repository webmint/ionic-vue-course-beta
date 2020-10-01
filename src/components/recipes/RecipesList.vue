<template>
  <ion-list>
    <ion-item
        v-for="recipe in recipes"
        :key="recipe.id"
        :router-link="{ name: 'Recipe', params: { id: recipe.id }}"
    >
      <ion-avatar slot="start">
        <img :src="recipe.imageUrl" />
      </ion-avatar>
      <ion-label>
        {{ recipe.title }}
      </ion-label>
    </ion-item>
  </ion-list>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonList, IonItem, IonAvatar, IonLabel } from '@ionic/vue';
import { mapState } from "vuex";


export default defineComponent({
  name: "RecipesList",
  components: {
    IonList,
    IonItem,
    IonAvatar,
    IonLabel,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState([
        'recipes',
        'counter',
    ])
  },
  created() {
    console.log('created'); // will work only once due to ionic caching system
  },
  mounted() {
    console.log('moindet');
  },
});
</script>

<style scoped>

</style>
