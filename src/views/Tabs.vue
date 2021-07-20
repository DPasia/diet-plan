<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/tabs/gain">
          <ion-icon :icon="chevronUp" />
          <ion-label>Gain</ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab="tab2" href="/tabs/loss">
          <ion-icon :icon="chevronDown" />
          <ion-label>Loss</ion-label>
        </ion-tab-button>

      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { chevronUp, chevronDown } from 'ionicons/icons';

export default {
  name: 'Tabs',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage, IonRouterOutlet },
  setup() {
    return {
      chevronUp,
      chevronDown,
    }
  }
}
</script>