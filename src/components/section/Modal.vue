<script setup>
import { ref } from 'vue'
import Button from '@components/ui/Button.vue'
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle } from '@headlessui/vue'

const isOpen = ref(false)

function closeModal() {
  isOpen.value = false
}
function openModal() {
  isOpen.value = true
}
</script>

<template>
  <Button text="REQUEST MORE INFORMATION" color="yellow" class="self-start" @click="openModal" />
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-10">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black/25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4 text-center">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="flex flex-col gap-6 w-full max-w-3xl transform overflow-hidden rounded-2xl bg-white text-kta-purple p-12 text-left align-middle shadow-xl transition-all"
              as="form"
            >
              <DialogTitle as="h3" class="text-2xl font-bold">GET IN TOUCH</DialogTitle>
              <div class="flex gap-2">
                <div class="grow-1 flex flex-col">
                  <label for="username" class="text-sm mb-2">FULL NAME</label>
                  <input
                    id="fullName"
                    name="Full Name"
                    type="text"
                    class="p-4 border-1 border-kta-purple rounded-lg"
                  />
                </div>
                <div class="grow-1 flex flex-col">
                  <label for="email" class="text-sm mb-2">EMAIL</label>
                  <input
                    id="email"
                    name="Email"
                    type="email"
                    class="p-4 border-1 border-kta-purple rounded-lg"
                  />
                </div>
              </div>
              <div class="flex flex-col">
                <label for="message" class="text-sm mb-2">MESSAGE</label>
                <textarea
                  id="message"
                  name="Message"
                  type="text"
                  rows="3"
                  class="p-4 border-1 border-kta-purple rounded-lg"
                ></textarea>
              </div>
              <Button type="submit" text="SEND" color="purple" class="self-start" />
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
