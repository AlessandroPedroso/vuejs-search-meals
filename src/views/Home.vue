<template>
    <div class="flex flex-col p-8">
        <input type="text" class="rounded border-2 border-gray-300 w-full focus:outline-none"
            placeholder="Search for Meals" />

        <div class="flex justify-center gap-2 mt-3">
            <router-link :to="{ name: 'byLetter', params: { letter } }" v-for="(letter, index) of letters" :key="index">
                {{ letter }}
            </router-link>
        </div>
    </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import store from '../store'
import api from '../service/api'
import { getMeals } from '../utils/getData'

// const meals = computed(()=> store.state.meals)
const letters = 'ABCDEFGHIJKLMNOPQRSTUVXYZ'.split("")
const ingredients = ref([])

onMounted(async () => {
    //    const {data} = await api.get('list.php?i=list')
    //    console.log(data)

    //Using Promise all for response is more fast
    Promise.all([

        getMeals()

    ]).then((meals) => {
        ingredients.value = meals[0]
    })

})

</script>