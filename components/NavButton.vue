<script setup lang="ts">
defineProps<{ isNavOpen: Boolean }>();
const emit = defineEmits(['toggle']);
</script>

<template>
  <button
    id="toggle"
    :aria-expanded="isNavOpen ? true : false"
    aria-controls="menu"
    class="w-12 h-12 bg-accent text-white z-40 hidden sm:block absolute top-2 right-2 transition-all duration-300"
    :class="{ 'shadow-md': !isNavOpen }"
    @click="emit('toggle')"
  >
    <span class="sr-only">Open main menu</span>
    <div class="block w-6 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <span
        aria-hidden="true"
        class="burger-icon-line"
        :class="{ 'rotate-45': isNavOpen, ' -translate-y-1.5': !isNavOpen }"
      ></span>
      <span aria-hidden="true" class="burger-icon-line" :class="{ 'opacity-0': isNavOpen }"></span>
      <span
        aria-hidden="true"
        class="burger-icon-line"
        :class="{ '-rotate-45': isNavOpen, ' translate-y-1.5': !isNavOpen }"
      ></span>
    </div>
  </button>
</template>
