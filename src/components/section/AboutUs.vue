<script setup lang="ts">
import graphic from '@/assets/images/about-graphics.webp'
import Button from '@components/ui/Button.vue'
</script>

<template>
  <div class="flex justify-center px-9 py-24">
    <img :src="graphic" alt="Dream Agency team working together on a project." />
    <div class="flex flex-col gap-9 w-xl p-9">
      <h2 class="text-6xl text-kta-purple">
        <span class="font-bold">About Us<br /></span> Fake or <span class="highlight">Real</span>
      </h2>
      <p class="whitespace-pre-wrap text-kta-light-purple">
        {{
          `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.

Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
        }}
      </p>
      <Button text="EXPLORE MORE" color="purple" class="self-start" />
    </div>
  </div>
</template>
