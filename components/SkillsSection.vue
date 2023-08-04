<script setup lang="ts">
const showMore: Ref<boolean> = ref(false);
const skills = [
  { name: 'HTML', isPrimary: true, isHidden: false },
  { name: 'CSS', isPrimary: true, isHidden: false },
  { name: 'JS', isPrimary: true, isHidden: false },
  { name: 'TS', isPrimary: true, isHidden: false },
  { name: 'Vue.js', isPrimary: true, isHidden: false },
  { name: 'Git', isPrimary: true, isHidden: false },
  { name: 'Tailwind', isPrimary: false, isHidden: false },
  { name: 'SASS', isPrimary: false, isHidden: false },
  { name: 'BEM', isPrimary: false, isHidden: false },
  { name: 'Nuxt.js', isPrimary: false, isHidden: false },
  { name: 'Pinia, Vuex', isPrimary: false, isHidden: false },
  { name: 'Vitest', isPrimary: false, isHidden: false },
  { name: 'Chrome Extensions', isPrimary: false, isHidden: false },
  { name: 'ECharts, Chart.js', isPrimary: false, isHidden: true },
  { name: 'MJML', isPrimary: false, isHidden: true },
  { name: 'Basic proficiency in React', isPrimary: false, isHidden: true },
  { name: 'A11y', isPrimary: false, isHidden: true },
  { name: 'Responsive and adaptive Web Design', isPrimary: false, isHidden: true },
  { name: 'Pixel Perfect Design', isPrimary: false, isHidden: true },
  { name: 'REST API, WebSocket', isPrimary: false, isHidden: true },
];
</script>

<template>
  <div class="flex flex-col gap-1">
    <h1 class="title">
      <span class="material-symbols-outlined text-base" aria-hidden="true"> construction </span
      >Technologies:
    </h1>
    <Transition>
      <ul class="flex flex-row flex-wrap gap-x-4 gap-y-2">
        <li
          v-for="(skill, index) in skills"
          v-show="!skill.isHidden || showMore"
          :key="index"
          :class="skill.isPrimary ? 'primary-skill' : 'skill'"
        >
          {{ skill.name }}
        </li>
        <button class="text-xs hover:text-accent transition-all" @click="showMore = !showMore">
          {{ showMore ? 'Show less...' : 'Show more...' }}
        </button>
      </ul>
    </Transition>
  </div>
</template>
