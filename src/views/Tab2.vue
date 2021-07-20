<template>
  <ion-page >
    <ion-header>
      <ion-toolbar>
        <ion-title>🧘‍♀️ Weight Loss</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">🧘‍♀️ Weight Loss</ion-title>
        </ion-toolbar>
      </ion-header>

      <diet-plan :achievement-type="loss" />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/vue";
import DietPlan from "@/components/DietPlan.vue";

export default {
  name: "Tab2",
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    DietPlan,
  },
};
</script>