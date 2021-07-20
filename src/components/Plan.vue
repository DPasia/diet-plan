<template>
  <div>
    <plan-item
      v-for="(items, header) in dietPlan"
      :key="header"
      :header="header"
      :items="items"
      :type="type"
    />
  </div>
</template>

<script>
import PlanItem from "@/components/PlanItem.vue";

export default {
  name: "Plan",
  props: {
    dietPlan: {
      type: Object,
      required: true,
    },
    type: {
      type: String,
      required: true,
    }
  },
  components: { PlanItem },
};
</script>

<style>
</style>