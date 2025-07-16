<script setup lang="ts">
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
  <button
    type="button"
    :class="[
      themeMap[color],
      'font-bold rounded-lg cursor-pointer py-4 px-8 transition duration-200 hover:scale-105 focus-visible:scale-105 active:scale-95',
    ]"
  >
    {{ text }}
  </button>
</template>
