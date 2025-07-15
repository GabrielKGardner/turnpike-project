<script setup lang="ts">
import HeaderGraphic from '@components/section/HeaderGraphic.vue'
import graphic from '@/assets/images/home-header-graphics.webp'
import Button from '@components/ui/Button.vue'
</script>

<template>
  <HeaderGraphic :src="graphic" />
  <div class="flex flex-col gap-6 w-xl px-12 pt-23 pb-52">
    <h2 class="text-7xl text-kta-purple">
      <span class="font-bold">We Help you</span> to grow your
      <span class="highlight">Business</span>
    </h2>
    <p class="text-kta-light-purple">
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
      printer took a galley of type and scrambled it to make a type specimen book.
    </p>
    <Button text="GET STARTED" color="purple" class="self-start" />
  </div>
</template>
