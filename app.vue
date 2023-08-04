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
    id="about"
    class="w-lg mx-auto min-h-screen font-primary flex flex-col gap-6 bg-white text-black selection:bg-accent selection:text-white dark:bg-darkgrey dark:text-grey"
  >
    <HeaderSection />
    <main class="flex flex-col gap-10 px-7">
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
    <FooterSection />
  </div>
</template>
