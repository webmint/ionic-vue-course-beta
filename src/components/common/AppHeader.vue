<template>
  <ion-header :translucent="true">
    <ion-toolbar color="primary">
      <ion-buttons slot="start">
       <ion-back-button
           v-if="!isRecipesPage"
           defaultHref="/recipes"
       />
      </ion-buttons>
      <ion-title>
        {{ title }}
      </ion-title>
      <ion-buttons
          v-if="!isRecipesPage"
          slot="primary"
      >
        <ion-button
          @click="onDeleteRecipe"
        >
          <ion-icon
              :icon="icons.trashOutline"
              slot="icon-only"
          ></ion-icon>
        </ion-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
</template>

<script lang="ts">
import { trashOutline } from 'ionicons/icons'

import { defineComponent }  from 'vue';
import { IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonButton, IonIcon, alertController } from '@ionic/vue';
import { mapActions } from 'vuex';

export default defineComponent({
  name: 'AppHeader',
  components: {
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonButton,
    IonIcon,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      icons: {
        trashOutline,
      }
    };
  },
  computed: {
    isRecipesPage(): boolean {
      return this.$route.name === 'Recipes';
    }
  },
  methods: {
    ...mapActions([
        'DELETE_RECIPE',
    ]),
    async onDeleteRecipe() {
      const alert = await alertController.create({
        header: 'Are you sure?',
        message: 'Do you really want to delete a recipe?',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
          },
          {
            text: 'Delete',
            handler: () => {
              this.DELETE_RECIPE(this.$route.params.id);
              this.$router.push({ name: 'Recipes' });
            }
          },
        ]
      });
      return alert.present();
    }
  },
});
</script>

<style scoped>
  header {
    all: inherit;
  }
</style>
