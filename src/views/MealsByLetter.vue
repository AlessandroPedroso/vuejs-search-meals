<template>
    <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4 text-orange-500">Meals by Letter</h1>
  </div>
  <div class="flex flex-wrap justify-center gap-3 px-8 mb-6">
    <router-link
      class="w-2 h-2 flex items-center justify-center hover:text-orange-500 hover:scale-150 transition-all"
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
