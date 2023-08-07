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
    class="overflow-x-clip md:w-full w-lg mx-auto min-h-screen font-primary flex flex-col gap-6 bg-white text-black selection:bg-accent selection:text-white dark:bg-darkgrey dark:text-lightgrey transition-all duration-300"
  >
    <HeaderSection />
    <main class="flex flex-col gap-10 px-7">
      <AboutSection />
      <div class="grid grid-cols-3 md:grid-cols-1 gap-4 md:gap-10 md:max-w-lg">
        <div id="skills" class="flex flex-col gap-4 col-span-1 md:col-span-2">
          <SkillsSection />
          <LangsSection />
        </div>
        <div id="experience" class="flex flex-col gap-4 col-span-2">
          <JobSection />
          <EducationSection />
        </div>
      </div>
      <PortfolioSection />
    </main>
    <FooterSection />
  </div>
</template>
