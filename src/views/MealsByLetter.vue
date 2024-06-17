<template>
  <div class="flex justify-center gap-2 mt-3">
    <router-link
      class="px-3 py-1 bg-orange-600 text-white rounded hover:bg-orange-500 active:bg-orange-400 transition-colors"
      :to="{ name: 'byLetter', params: { letter } }"
      v-for="(letter, index) of letters"
      :key="index"

    >
      {{ letter }}
    </router-link>
  </div>

  <Meals :meals="meals"/>

</template>

<script setup>
import { computed, onBeforeMount, onMounted, ref, watch } from "vue";
import store from "../store";
import { useRoute } from "vue-router";
import Meals from "../components/Meals.vue";

const route = useRoute();
const letters = "ABCDEFGHIJKLMNOPQRSTUVXYZ";
const meals = computed(() => store.state.mealsByLetter);


watch(route,()=>{
    store.dispatch("searchMealsByLetter", route.params.letter);
})

onMounted(()=>{
    store.dispatch("searchMealsByLetter", route.params.letter);

})

</script>
