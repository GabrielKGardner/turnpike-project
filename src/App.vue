<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from '@components/layout/Header.vue'
import Footer from '@components/layout/Footer.vue'
</script>

<template>
  <div class="grid grid-rows-[auto_1fr_auto] min-h-dvh">
    <Header />
    <RouterView />
    <Footer />
  </div>
</template>
