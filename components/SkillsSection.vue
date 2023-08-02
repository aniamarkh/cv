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
        <li class="bg-accent font-bold">HTML</li>
        <li class="bg-accent font-bold">CSS</li>
        <li class="bg-accent font-bold">JS</li>
        <li class="bg-accent font-bold">TS</li>
        <li class="bg-accent font-bold">Vue.js</li>
        <li class="bg-accent font-bold">Git</li>
        <li class="bg-grey font-bold">Tailwind</li>
        <li class="bg-grey font-bold">SASS</li>
        <li class="bg-grey font-bold">BEM</li>
        <li class="bg-grey font-bold">Nuxt.js</li>
        <li class="bg-grey">Pinia, Vuex</li>
        <li class="bg-grey">Vitest</li>
        <li class="bg-grey">Chrome Extensions</li>
        <li v-if="showMore" class="bg-grey w-fit">ECharts, Chart.js</li>
        <li v-if="showMore" class="bg-grey">MJML</li>
        <li v-if="showMore" class="bg-grey">Basic proficiency in <strong>React</strong></li>
        <li v-if="showMore" class="bg-grey">A11y</li>
        <li v-if="showMore" class="bg-grey">Responsive and adaptive Web Design</li>
        <li v-if="showMore" class="bg-grey">Pixel Perfect Design</li>
        <li v-if="showMore" class="bg-grey">REST API, WebSocket</li>
        <button class="text-xs hover:text-accent transition-all" @click="showMore = !showMore">
          {{ showMore ? 'Show less...' : 'Show more...' }}
        </button>
      </ul>
    </Transition>
  </div>
</template>
