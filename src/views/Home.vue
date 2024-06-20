<template>
    <div class="p-8 pb-0 text-orange-500">
        <h1 class="text-4xl font-bold mb-4">Random Meals</h1>
    </div>
    <Meals :meals="meals"/>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { randomMeals } from '../utils/getData'
import Meals from '../components/Meals.vue';
// const meals = computed(()=> store.state.meals)

const meals = ref([])

onMounted(async () => {

    //Using Promise all for response is more fast
    for (let i = 0; i < 10; i++){
        
        Promise.all([
            randomMeals()
        ]).then((data) => meals.value.push(data[0].meals[0]))
    }
})

</script>