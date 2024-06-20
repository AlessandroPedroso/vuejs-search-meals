<template>
    <div class="p-8 pb-0">

        <h1 class="text-4xl font-bold mb-4 text-orange-500">Ingredients</h1>

    </div>
  <div class="px-8">
    
    <input
      v-model="keyWord"
      type="text"
      class="rounded border-2 border-gray-200 focus:border-orange-500 mb-3 w-full"
      placeholder="Search for ingredients"
    />

        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
          <a href="#" @click.prevent="openIngredient(ingredient)"
            v-for="ingredient of computedIngredients"
            :key="parseInt(ingredient.idIngredient)"
            class="block bg-white rounded p-3 mb-3 shadow"
          >

          <h3 class="text-2xl font-bold mb-3">{{ ingredient.strIngredient }}</h3>
          <p>{{ ingredient.strDescription }}</p>
        
        </a>
        </div>
    

    <!-- <router-link
      :to="{
        name: 'byIngredient',
        params: { ingredient: ingredient.strIngredient },
      }"
      v-for="ingredient of computedIngredients"
      :key="parseInt(ingredient.idIngredient)"
      class="block bg-white rounded p-3 mb-3 shadow"
    >
      <h3 class="text-2xl font-bold mb-3">{{ ingredient.strIngredient }}</h3>
      <p>{{ ingredient.strDescription }}</p>
    </router-link> -->
  </div>
</template>

<script setup>
import { getMeals } from "../utils/getData";
import { computed, onMounted, ref } from "vue";
import store from "../store";
import { useRoute, useRouter } from "vue-router";

const router = useRouter()
const keyWord = ref("");
const ingredients = ref([]);

const computedIngredients = computed(() => {
  if (!computedIngredients) return ingredients;

  return ingredients.value.filter((i) => i.strIngredient.toLowerCase().includes(keyWord.value.toLowerCase()));
});

function openIngredient(ingredient) {
  store.commit("setIngredient", ingredient)
  router.push({name:"byIngredient",params:{ingredient:ingredient.strIngredient}})
}

onMounted(() => {
  Promise.all([getMeals()]).then((data) => {
    // debugger;
    ingredients.value = data[0].meals;
  });
});
</script>
