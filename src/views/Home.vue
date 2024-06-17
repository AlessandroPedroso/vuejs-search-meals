<template>
    <div class="flex flex-col p-8">

    </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import store from '../store'
import api from '../service/api'
import { getMeals } from '../utils/getData'

// const meals = computed(()=> store.state.meals)

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