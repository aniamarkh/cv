<script setup lang="ts">
const showMore: Ref<boolean> = ref(false);
</script>

<template>
  <div>
    <div class="flex flex-col gap-2">
      <h1 class="title text-xl mb-2">My Tech Stack:</h1>
      <ul class="flex flex-row flex-wrap gap-x-4 gap-y-2">
        <li class="bg-accent"><strong>HTML</strong></li>
        <li class="bg-accent"><strong>CSS (Tailwind, SASS, BEM methodology)</strong></li>
        <li class="bg-accent"><strong>JS</strong></li>
        <li class="bg-accent"><strong>TS</strong></li>
        <li class="bg-accent"><strong>Vue.js</strong></li>
        <li class="bg-accent"><strong>Git</strong></li>
        <li class="bg-grey"><strong>Nuxt.js</strong></li>
        <li class="bg-grey"><strong>State Management</strong>: Pinia, Vuex</li>
        <li class="bg-grey"><strong>Testing</strong>: Vitest, React Testing Library</li>
        <li v-if="showMore" class="bg-grey">
          <strong>Data Visualization</strong>: ECharts, Chart.js
        </li>
        <li v-if="showMore" class="bg-grey"><strong>Chrome Extensions</strong></li>
        <li v-if="showMore" class="bg-grey"><strong>MJML</strong></li>
        <li v-if="showMore" class="bg-grey">Basic proficiency in <strong>React</strong></li>
        <li v-if="showMore" class="bg-grey">A11y</li>
        <li v-if="showMore" class="bg-grey">Responsive and adaptive Web Design</li>
        <li v-if="showMore" class="bg-grey">Pixel Perfect Design</li>
        <li v-if="showMore" class="bg-grey">REST API, WebSocket</li>
        <button class="text-xs hover:text-accent transition-all" @click="showMore = !showMore">
          {{ showMore ? 'Show less...' : 'Show more...' }}
        </button>
      </ul>
    </div>
  </div>
</template>
