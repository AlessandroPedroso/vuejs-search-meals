<template>
<div class="p-8">
    <h1 class="text-4xl font-bold mb-4">Ingredients</h1>
    <router-link :to="{name: 'byIngredient', params:{ingredient:parseInt(ingredient.idIngredient)}}" v-for="ingredient of ingredients" :key="parseInt(ingredient.idIngredient)" class="block bg-white rounded p-3 mb-3 shadow">
        <h3 class="text-2xl font-bold mb-3">{{ ingredient.strIngredient }}</h3>
        <p>{{ ingredient.strDescription }}</p>
    </router-link>
</div>
</template>

<script setup>
import {getMeals} from '../utils/getData'
import { onMounted, ref } from 'vue';
import store from '../store';

const ingredients = ref([])

onMounted(()=>{
   Promise.all([
    getMeals()
   ]).then((data)=>{
    debugger;
    ingredients.value = data[0].meals

   })
})
</script>