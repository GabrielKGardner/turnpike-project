<script setup>
defineProps({
  title: String,
  text: String,
  color: 'pink' | 'light-yellow' | 'light-blue' | 'light-pink',
  src: String,
})
const colorMap = {
  pink: 'bg-kta-pink',
  'light-yellow': 'bg-kta-light-yellow',
  'light-blue': 'bg-kta-light-blue',
  'light-pink': 'bg-kta-light-pink',
}
</script>

<template>
  <div class="bg-white drop-shadow-md rounded-lg p-5">
    <img :src="src" alt="" :class="[colorMap[color], 'text-kta-purple size-12 rounded-lg mb-3']" />
    <h3 class="text-kta-purple font-bold mb-1.5">{{ title }}</h3>
    <p class="text-kta-light-purple text-sm">{{ text }}</p>
  </div>
</template>
