<script setup lang="ts">
const portfolioItems = [
  {
    title: 'Positivus Landing',
    desc: 'Vue 3, SCSS, pixel-perfect, accessible and responsive',
    repo: 'https://github.com/aniamarkh/positivus-landing',
    deploy: 'https://positivus-landing-aniamarkh.vercel.app/',
    screenshot: 'positivus.png',
  },
  {
    title: 'Weather App',
    desc: 'Vue 3 & TS, SCSS, Vuex, ECharts, REST API, accessible, mobile-first',
    repo: 'https://github.com/aniamarkh/weather-forecast',
    deploy: 'https://weather-forecast-aniamarkh.vercel.app/',
    screenshot: 'weather.png',
  },
  {
    title: 'Kanban Board',
    desc: 'Vue 3 & TS, SCSS, Pinia, drag&drop, Vitest & Vue Testing Utils',
    repo: 'https://github.com/aniamarkh/kanban-board',
    deploy: 'https://kanban-aniamarkh.vercel.app/',
    screenshot: 'kanban.png',
  },
  {
    title: "'Other bookmarks' Manager",
    desc: 'Chrome Extension, Vue 3 & TS, drag&drop, custom theme',
    repo: 'https://github.com/aniamarkh/bookmarks',
    deploy: 'https://chrome.google.com/webstore/detail/kartotek/hcinbgecljcibhpfpjibkodifeaanjep',
    screenshot: 'bookmarks.png',
  },
  {
    title: 'Kettle Control Station',
    desc: "Vue 3 & TS, Node.js, SCSS, Websocket, password is 'porol' ;)",
    repo: 'https://github.com/aniamarkh/kettle-station',
    deploy: 'https://kettle-station.vercel.app/',
    screenshot: 'kettle.png',
  },
  {
    title: 'RS Lang',
    desc: 'RS School course final team-project, built with TS',
    repo: 'https://github.com/aniamarkh/rslang',
    deploy: 'https://rslang-aniamarkh.vercel.app/',
    screenshot: 'lang.png',
  },
];
</script>

<template>
  <div id="portfolio" class="flex flex-col gap-2">
    <h1 class="title text-xl mb-5">
      <span class="material-symbols-outlined text-base" aria-hidden="true"> construction </span
      >Portfolio
    </h1>
    <div class="grid grid-cols-2 gap-6">
      <PortfolioItem
        v-for="(item, index) of portfolioItems"
        :key="index"
        :title="item.title"
        :desc="item.desc"
        :repo="item.repo"
        :deploy="item.deploy"
        :screenshot="`background-image: url('../assets/${item.screenshot}')`"
      />
    </div>
  </div>
</template>
