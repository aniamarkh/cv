<script setup lang="ts">
useHead({
  title: 'Anna Marchenko CV',
  link: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,1,0',
    },
  ],
});
</script>

<template>
  <div
    class="w-lg mx-auto min-h-screen font-primary flex flex-col gap-6 py-5 px-10 bg-white text-black selection:bg-accent selection:text-white"
  >
    <HeaderSection />
    <main class="flex flex-col gap-10">
      <AboutSection />
      <div class="grid grid-cols-3 gap-3">
        <div class="flex flex-col gap-4 col-span-1">
          <SkillsSection />
          <LangsSection />
        </div>
        <div class="flex flex-col gap-4 col-span-2">
          <EducationSection />
          <JobSection />
        </div>
      </div>
      <PortfolioSection />
    </main>
  </div>
</template>
