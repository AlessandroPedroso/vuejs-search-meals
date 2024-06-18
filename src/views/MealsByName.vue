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

  <Meals :meals="meals" />

</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../store";
import { useRoute } from "vue-router";
import Meals from '../components/Meals.vue'

const route = useRoute();
const keyWord = ref("");
const meals = computed(() => store.state.searchedMeals);

function searchMeals() {
  if(keyWord.value){

    store.dispatch("searchMeals", keyWord.value);
    
  }else{

    store.commit("setSearchMeals", []);

  }
}

onMounted(() => {
  keyWord.value = route.params.name;
  if (keyWord.value) {
    searchMeals();
  }
});
</script>
