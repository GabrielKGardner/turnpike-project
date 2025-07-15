<script setup>
defineProps({
  text: String,
  color: 'yellow' | 'purple',
})

const themeMap = {
  purple: 'bg-kta-purple text-white',
  yellow: 'bg-kta-yellow text-kta-purple',
}
</script>

<template>
  <button type="button" :class="[themeMap[color], 'font-bold rounded-lg py-4 px-8']">
    {{ text }}
  </button>
</template>
