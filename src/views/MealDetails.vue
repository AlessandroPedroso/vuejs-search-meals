<template>
  <div>
   <pre>{{ meal }}</pre>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import {getMealDetailsById} from '../utils/getData'

const route = useRoute()
const meal =  ref({})

onMounted(()=>{
  Promise.all([getMealDetailsById(route.params.id)]).then((data)=>{
    meal.value = data[0]?.meals[0] || {}
  })
})
</script>
