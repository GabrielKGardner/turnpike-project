<script setup lang="ts">
import Ellipse from '@/assets/images/ellipse.svg'
import Card from '@components/ui/Card.vue'
import Computer from '@/assets/icons/computer-icon.svg'
import Mobile from '@/assets/icons/mobile-phone-icon.svg'
import Rocket from '@/assets/icons/rocket-icon.svg'
import Website from '@/assets/icons/website-icon.svg'
</script>

<template>
  <div class="relative">
    <img :src="Ellipse" alt="" class="absolute -bottom-20 right-0 -z-30" />
    <div class="absolute -z-20 top-0 w-9/10 h-full bg-kta-light-blue rounded-tr-[400px]"></div>
    <div class="flex flex-col gap-23 px-12 py-23">
      <h2 class="text-5xl text-kta-purple text-center w-96 mx-auto">
        <span class="font-bold">What We Do <br /></span>For Your
        <span class="highlight">Business</span>
      </h2>
      <div class="flex gap-12">
        <Card
          title="WEBSITE DESIGN"
          text="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
          color="pink"
          :src="Website"
        />
        <Card
          title="WEB DEVELOPMENT"
          text="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
          color="light-yellow"
          :src="Computer"
        />
        <Card
          title="MOBILE APP DEVELOPMENT"
          text="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
          color="light-blue"
          :src="Mobile"
        />
        <Card
          title="MARKETING"
          text="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
          color="light-pink"
          :src="Rocket"
        />
      </div>
    </div>
  </div>
</template>
