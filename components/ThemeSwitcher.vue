<script setup lang="ts">
const colorMode = useColorMode();
const props = defineProps<{ isNavOpen: boolean }>();
const emit = defineEmits(['toggle']);
const switchTheme = () => {
  props.isNavOpen && emit('toggle');
  colorMode.value === 'light' ? (colorMode.preference = 'dark') : (colorMode.preference = 'light');
};
</script>

<template>
  <button
    class="flex items-center justify-center h-10 w-10 hover:text-accent sm:hover:text-white transition-all duration-300"
    @click="switchTheme"
  >
    <span aria-label="switch to dark mode" class="material-symbols-outlined">
      {{ $colorMode.value === 'dark' ? 'light_mode' : 'dark_mode' }}
    </span>
  </button>
</template>
