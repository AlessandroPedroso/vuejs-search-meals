<template>
  <div class="p-8 pb-0 h-full">
    <input
      v-model="keyWord"
      type="text"
      class="rounded border-2 border-gray-300 w-full focus:outline-none"
      placeholder="Search by name of Meals"
      @change="searchMeals"
    />
  </div>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
    <div
      v-for="meal of meals"
      :key="meal.idMeal"
      class="bg-white shadow rounded-xl"
    >
      <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
        <img
          :src="meal.strMealThumb"
          :alt="meal.strMeal"
          class="rounded-t-2xl w-full h-48 object-cover"
        />
      </router-link>
      <h3 class="p-3 font-bold">{{ meal.strMeal }}</h3>
      <div class="px-3">
        <p class="mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          voluptatem fuga consequatur at obcaecati odit esse asperiores ullam
          eaque impedit quod nobis.
        </p>
        <div class="mb-5 flex justify-between">
          <a
            :href="meal.strYoutube"
            target="_blank"
            class="px-3 py-2 rounded border-2 border-solid text-white bg-red-600 border-red-700 hover:bg-red-500 active:bg-red-400 transition-colors"
            >Youtube</a
          >
          <router-link
            :to="{ name: 'mealDetails', params: { id: meal.idMeal } }"
            class="px-3 py-2 rounded border-2 border-solid text-white bg-orange-600 border-orange-700 hover:bg-orange-500 active:bg-orange-400 transition-colors"
          >
            View Meal Details</router-link
          >
          <p>{{ meal.idMeal }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../store";
import { useRoute } from "vue-router";

const route = useRoute();
const keyWord = ref("");
const meals = computed(() => store.state.searchedMeals);

function searchMeals() {
  store.dispatch("searchMeals", keyWord.value);
}

onMounted(() => {
  keyWord.value = route.params.name;
  if (keyWord.value) {
    searchMeals();
  }
});
</script>
