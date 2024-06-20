<template>
  <a
    :href="href"
    target="_blank"
    class="px-3 py-2 rounded border-2 border-solid text-white bg-red-600 border-red-700 hover:bg-red-500 active:bg-red-400 transition-colors"
    ><slot>YouTube</slot>
    </a>
</template>

<script setup>
const props = defineProps({
    href:String
})
</script>
