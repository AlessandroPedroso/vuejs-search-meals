<template>
  <div
    class="bg-white shadow rounded-xl hover:scale-105 transition-all"
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
          {{ $filters.truncateWords(meal.strInstructions,30) }}
      </p>
      <div class="mb-5 flex justify-between">
        <YoutubeButton :href="meal.strYoutube"/>
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
</template>

<script setup>
import YoutubeButton from '../components/YoutubeButton.vue'


const {meal} = defineProps({
    meal:{
        required:true,
        type:Object
    }
})

</script>
