<template>
  <div class="max-w-[800px] mx-auto px-2 py-5">
    <!-- <pre>{{ meal }}</pre> -->
    <div class="flex flex-col justify-center items-center">
      <h1 class="text-3xl md:text-5xl font-bold mb-5">{{ meal.strMeal }}</h1>
      <img :src="meal.strMealThumb" :alt="meal.strMeal" class="w-[93%] md:max-w-full" />
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 text-lg py-8 px-2">
      <div>
        <strong class="font-bold">Category: </strong>{{ meal.strCategory }}
      </div>
      <div><strong class="font-bold">Area: </strong>{{ meal.strArea }}</div>
      <div><strong class="font-bold">Tags: </strong>{{ meal.strTags }}</div>
    </div>
    <div class="my-2 max-w-full px-2">
      {{ meal.strInstructions }}
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 px-2">
      <div>
        <h2 class="text-2xl font-semibold mb-3">Ingredients</h2>
        <ul>
          <template v-for="(element, index) of new Array(20)">
            <li v-if="meal[`strIngredient${index + 1}`]">
              {{ index + 1 }}. {{ meal[`strIngredient${index + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
      <div>
        <h2 class="text-2xl font-semibold mb-3">Measures</h2>
        <ul>
          <template v-for="(element, index) of new Array(20)">
            <li v-if="meal[`strMeasure${index + 1}`]">
              {{ index + 1 }}. {{ meal[`strMeasure${index + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
      <div class="mt-4 flex gap-4">
        <YoutubeButton :href="meal.strYoutube">YouTube</YoutubeButton>
        <a
          :href="meal.strSource"
          target="_blank"
          class="px-3 py-2 rounded border-2 border-solid text-white bg-orange-600 border-white hover:bg-orange-500 active:bg-orange-400 transition-colors"
          >View Original Source
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { getMealDetailsById } from "../utils/getData";
import YoutubeButton from "../components/YoutubeButton.vue";

const route = useRoute();
const meal = ref({});

onMounted(() => {
  Promise.all([getMealDetailsById(route.params.id)]).then((data) => {
    meal.value = data[0]?.meals[0] || {};
  });
});
</script>
