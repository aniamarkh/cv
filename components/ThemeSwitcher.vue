<script setup lang="ts">
const colorMode = useColorMode();

const switchTheme = () => {
  colorMode.value === 'light' ? (colorMode.value = 'dark') : (colorMode.value = 'light');
};
</script>

<template>
  <button
    class="flex items-center justify-center h-10 w-10 hover:text-accent transition-all duration-300"
    @click="switchTheme"
  >
    <span aria-label="switch to dark mode" class="material-symbols-outlined">
      {{ $colorMode.value === 'light' ? 'light_mode' : 'dark_mode' }}
    </span>
  </button>
</template>
