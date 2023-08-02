<script setup lang="ts">
useHead({
  title: 'Anna Marchenko CV',
  link: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0',
    },
  ],
});
</script>

<template>
  <div
    class="w-192 mx-auto min-h-screen font-primary flex flex-col gap-5 py-5 px-10 shadow-md bg-white text-black selection:bg-accent selection:text-white"
  >
    <HeaderSection />
    <main class="flex flex-col gap-7">
      <AboutSection />
      <SkillsSection />
    </main>
  </div>
</template>
