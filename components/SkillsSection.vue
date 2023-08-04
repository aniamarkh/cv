<script setup lang="ts">
const showMore: Ref<boolean> = ref(false);
</script>

<template>
  <div class="flex flex-col gap-1">
    <h1 class="title">
      <span class="material-symbols-outlined text-base" aria-hidden="true"> construction </span
      >Technologies:
    </h1>
    <Transition>
      <ul class="flex flex-row flex-wrap gap-x-4 gap-y-2">
        <li class="primary-skill">HTML</li>
        <li class="primary-skill">CSS</li>
        <li class="primary-skill">JS</li>
        <li class="primary-skill">TS</li>
        <li class="primary-skill">Vue.js</li>
        <li class="primary-skill">Git</li>
        <li class="skill font-bold">Tailwind</li>
        <li class="skill font-bold">SASS</li>
        <li class="skill font-bold">BEM</li>
        <li class="skill font-bold">Nuxt.js</li>
        <li class="skill">Pinia, Vuex</li>
        <li class="skill">Vitest</li>
        <li class="skill">Chrome Extensions</li>
        <li v-if="showMore" class="skill w-fit">ECharts, Chart.js</li>
        <li v-if="showMore" class="skill">MJML</li>
        <li v-if="showMore" class="skill">Basic proficiency in <strong>React</strong></li>
        <li v-if="showMore" class="skill">A11y</li>
        <li v-if="showMore" class="skill">Responsive and adaptive Web Design</li>
        <li v-if="showMore" class="skill">Pixel Perfect Design</li>
        <li v-if="showMore" class="skill">REST API, WebSocket</li>
        <button class="text-xs hover:text-accent transition-all" @click="showMore = !showMore">
          {{ showMore ? 'Show less...' : 'Show more...' }}
        </button>
      </ul>
    </Transition>
  </div>
</template>
