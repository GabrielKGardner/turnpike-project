<script setup lang="ts">
import ContactModal from '@components/section/ContactModal.vue'
</script>

<template>
  <div class="flex flex-row bg-kta-purple font-white text-white rounded-tr-[128px] pb-6">
    <div class="basis-4/10 px-12 pt-12">
      <h2 class="font-serif font-bold text-4xl mb-7">Dream Agency</h2>
      <p>
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
        unknown printer took a galley of type and scrambled it to make a type specimen book. It has
        survived not only five centuries.
      </p>
    </div>
    <div class="basis-6/10 flex flex-col justify-end gap-6">
      <p class="font-bold text-lg">GET IN TOUCH</p>
      <ContactModal />
    </div>
  </div>
</template>
