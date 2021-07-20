<template>
  <plan :dietPlan="thePlan" :type="achievementType" />
</template>

<script>
import Plan from "@/components/Plan.vue";

export default {
  name: "DietPlan",
  props: {
    achievementType: {
      type: String,
      required: true,
    },
  },
  components: { Plan },
  computed: {
    timeInterval() {
      return {
        wakingUp: "Upon waking app",
        breakfast: "Breakfast",
        lunch: "Lunch",
        dinner: "Dinner",
        bedtime: "Bed time",
      };
    },
    thePlan() {
      if (this.achievementType === "gain") {
        return this.gainPlans;
      }
      return this.lossPlans;
    },
    lossPlans() {
      const t = this.timeInterval;
      return {
        [t.wakingUp]: ["🥛 1-2 glass luke warm water"],
        [t.breakfast]: ["🍵 1 bowl of oats"],
        [t.lunch]: ["🍌 fruit"],
        [t.dinner]: ["🥗 one bowl of salad"],
      };
    },
    gainPlans() {
      const t = this.timeInterval;
      return {
        [t.breakfast]: [
          "🥚 2 boiled eggs",
          "🍞 2 slice of multi-grain bread with butter",
          "🥣 bowl of oatmeal",
          "🍊 orange juice",
        ],
        [t.lunch]: ["🍖 meat", "🍗 chicken or pork", "🍚 cups of rice"],
        [t.dinner]: [
          "🍣 fish",
          "🍛 stir fried veggies with baked potatoes",
          "🍘 brown rice",
        ],
        [t.bedtime]: ["🥛 milk"],
      };
    },
  },
};
</script>

<style>
</style>