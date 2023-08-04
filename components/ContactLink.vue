<template>
  <a
    :href="href"
    class="group w-11 h-11 grid place-items-center relative text-black hover:text-white dark:text-grey dark:hover:text-black ease-in-out duration-300"
    target="_blank"
    aria-hidden="true"
  >
    <slot></slot>
    <span class="visually-hidden">{{ label }}</span>
    <div
      class="bg-accent scale-50 opacity-0 w-11 h-11 absolute bottom-0 left-0 right-0 top-0 group-hover:animate-bounceIn group-hover:opacity-100 group-hover:scale-100"
    ></div>
  </a>
</template>

<script setup lang="ts">
defineProps<{ href: string; label: string }>();
</script>

<style scoped>
.visually-hidden {
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}
</style>
