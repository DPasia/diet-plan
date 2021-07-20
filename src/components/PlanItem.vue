<template>
  <ion-list>
    <ion-list-header :color="color">
      <ion-label>
        <h1>{{ header }}</h1></ion-label
      >
      <ion-button @click="toggle = !toggle" color="warning"
        >{{ toggle ? "Hide" : "Show" }} plans</ion-button
      >
    </ion-list-header>

    <div v-show="toggle">
      <ion-item v-for="(item, i) of items" :key="i">
        <ion-checkbox slot="start" />
        <ion-label text-wrap
          ><p>{{ item }}</p></ion-label
        >
      </ion-item>
    </div>
  </ion-list>
</template>

<script>
import {
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonCheckbox,
} from "@ionic/vue";

export default {
  name: "PlanItem",
  props: {
    header: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
    type: {
      type: String,
      required: true,
    }
  },
  data() {
    return {
      toggle: false,
    };
  },
  computed: {
    color() {
      if (this.type === "gain") {
        return "primary";
      }
      return "danger"
    }
  },
  components: { IonItem, IonLabel, IonList, IonListHeader, IonCheckbox },
};
</script>
