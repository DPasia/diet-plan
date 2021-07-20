<template>
  <ion-page :style="{
      backgroundImage: `linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(117, 19, 93, 0.73)), 
                        url('${background}')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
  }">
  <div class="container">
     <h1>Diet App</h1>
 
    <ion-label class="label">your target plan</ion-label>
    <ion-select v-model="target">
        <ion-select-option value="gain">Gain</ion-select-option>
        <ion-select-option value="loss">Loss</ion-select-option>
    </ion-select>

     <ion-button class="button" @click="handleClick">continue</ion-button>
  </div>
  </ion-page>
</template>

<script>
import {  IonPage, IonButton, IonSelect, IonSelectOption, IonLabel } from '@ionic/vue';

export default {
  name: 'MainPage',
  components: {  IonPage, IonButton, IonSelect, IonSelectOption, IonLabel },
  data() {
    return {
      background: "https://images.unsplash.com/photo-1587996597484-04743eeb56b4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80",
      target: "gain",
    }
  },
  methods: {
      handleClick() {
          this.$router.push(`/tabs/${this.target}`);
      }
  }
}
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    color: white;
}

h1 {
    text-align: center;
    font-size: 5rem;
    text-shadow: 5px 1px #000;
}

.label {
    font-size: small;
    color: gainsboro;
    margin-top: 1rem;
}

.button {
    margin-top: 1rem;
}
</style>

